const apiKey = import.meta.env.VITE_PAWGALLERY_API_KEY;
const url = import.meta.env.VITE_PAWGALLERY_BASE_URL;

export type DataType = {
  id: number;
  name: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  image: {
    url: string;
  };
};

export const fetchDogs = async (): Promise<DataType[]> => {
  const apiLink = `${url}/breeds`;
  const response = await fetch(apiLink, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  if (!response.ok) {
    throw new Error("failed");
  }
  return response.json();
};

export const searchDogs = async (query: string): Promise<DataType[]> => {
  const searchResponse = await fetch(`${url}/breeds/search?q=${query}`, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  if (!searchResponse.ok) {
    throw new Error("Search Failed");
  }
  return searchResponse.json();
};
