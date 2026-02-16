import { useState } from "react";
type SearchingProps = {
  onSearch: (value: string) => void;
};

export const Searching = ({ onSearch }: SearchingProps) => {
  const [item, setItem] = useState<string>("");
  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        value={item}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setItem(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(item);
          }
        }}
      />
    </div>
  );
};
