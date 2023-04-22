import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { db } from "../libs/firebaseClient";
import firebase from "../libs/firebaseClient";
import "firebase/firestore";
import Link from "next/link";
import Searchli from "./SearchItems";

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (term) => {
    try {
      console.log("seaching", searchTerm);
      const snapshot = await db
        .collection("search")
        .where("value", ">=", term)
        .get();
      const result = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSearchResults(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form className="grid">
      <div className="grid-row-1 sm:mx-6 lg:m-2 flex items-center rounded-md shadow-md bg-gray-100 m-2 text-black">
        <input
          type="text"
          className="py-2 pl-4 pr-12 rounded-l-md w-full focus:outline-none"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          className=" hover:bg-yellow-300 rounded-r-md px-4 py-2 focus:outline-none"
          type="submit"
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {searchResults.length > 0 && (
        <ul
          id="search-list"
          className=" grid gap-2 absolute grid-row-2 sm:mx-6 mt-12 flex items-center rounded-md shadow-md bg-gray-100 m-2 text-black p-3 px-12"
        >
          {searchResults.map((doc) => (
            <Searchli value={doc.value} link="/"/>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchBar;
