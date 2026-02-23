import { PiDogThin } from "react-icons/pi";
import { Card } from "../components/Card/Card";
import type { DataType } from "../api/pawGalleryApi";
import { fetchDogs, searchDogs } from "../api/pawGalleryApi";
import { useEffect, useState } from "react";
import { Searching } from "../components/Searching/Searching";
import { Pagination } from "../components/Pagination/Pagination";

export const MainPage = () => {
  const [dogs, setDogs] = useState<DataType[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [searchedDogs, setSearchedDogs] = useState<DataType[] | null>(null);
  const [activePage, setActivePage] = useState<number>(0);

  function handlePageClick(pageNumber: number) {
    setActivePage(pageNumber);
  }

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
  const numberOfPage: number = Math.ceil(displayDogs.length / 9);

  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <div className="logo">
            <span>
              <PiDogThin />
            </span>
          </div>
          <Searching onSearch={handleSearch} />
        </div>
        <div className="mainGallery">
          <div className="mainContainer">
            {error && <p>not Found</p>}
            {displayDogs
              .slice(activePage * 9, (activePage + 1) * 9)
              .map((dog) => (
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
        <Pagination
          numberOfPage={numberOfPage}
          activePage={activePage}
          onPageChange={handlePageClick}
        />
      </div>
    </div>
  );
};
