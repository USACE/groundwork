import { useState } from "react";
import magnifyingGlass from "../img/Magnifying_glass_icon.svg";

function Search({ value, onChange, placeholder = "Search", ...props }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
      style={{
        order: 2,
        backgroundImage: `url("${magnifyingGlass}")`,
        backgroundSize: "13px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "10px center",
      }}
      className="gw-bg-white gw-border-gray-200 gw-border-2 gw-rounded gw-h-8 gw-m-2 gw-text-sm gw-text-black gw-w-full gw-pl-8"
    />
  );
}

function SearchDotGov({ accessKey, affiliate, placeholder, ...props }) {
  const [searchString, setSearchString] = useState([]);

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      window.location = `https://search.usa.gov/search?affiliate=${affiliate}&access_key=${accessKey}&query=${searchString}`;
    }
    if (e.key === "Escape") {
      setSearchString("");
    }
  };

  return (
    <Search
      value={searchString}
      onChange={(e) => {
        setSearchString(e.target.value);
      }}
      onKeyUp={handleKeyUp}
      {...props}
    />
  );
}

export default Search;
export { Search, SearchDotGov };
