import { PiDogDuotone } from "react-icons/pi";
import { Card } from "../components/Card/Card";
import type { DataType } from "../api/pawGalleryApi";
import { fetchDogs, searchDogs } from "../api/pawGalleryApi";
import { useEffect, useState } from "react";
import { Searching } from "../components/Searching/Searching";

export const MainPage = () => {
  const [dogs, setDogs] = useState<DataType[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [searchedDogs, setSearchedDogs] = useState<DataType[] | null>(null);

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const dogsInfo = await fetchDogs();
        setDogs(dogsInfo);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown Error");
      }
    };
    loadInfo();
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchedDogs(null);
      return;
    }
    try {
      const result = await searchDogs(query);
      setSearchedDogs(result);
    } catch {
      setError("search failed");
    }
  };

  const displayDogs = searchedDogs ?? dogs;
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <div className="logo">
            <span>
              <PiDogDuotone />
            </span>
          </div>
          <Searching onSearch={handleSearch} />
        </div>
        <div className="mainGallery">
          <div className="mainContainer">
            {error && <p>not Found</p>}
            {displayDogs.map((dog) => (
              <Card
                key={dog.id}
                name={dog.name}
                breed_group={dog.breed_group}
                life_span={dog.life_span}
                temperament={dog.temperament}
                image={dog.image?.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
