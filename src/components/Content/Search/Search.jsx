import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FaUser, FaSearch } from "react-icons/fa";
import { SearchStyles } from "./SearchStyle";

export const Search = ({ show, setShow }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?q=${decodeURI(value)}`);
    setValue("");
  };

  const handleBars = () => {
    setShow(!show);
  };

  return (
    <SearchStyles className="mb-2">
      <form className="bar-search" onSubmit={handleSearch}>
        <div
          className="hamburger"
          id={show ? "active" : ""}
          onClick={handleBars}
        >
          <span></span>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Buscar..."
            name="value"
            value={value}
            onChange={handleValue}
            required
          />
          <div className="btn-search" onClick={handleSearch}>
            <FaSearch />
          </div>
        </div>
      </form>
      <div className="user">
        <FaUser />
        <p>Alearigth</p>
      </div>
    </SearchStyles>
  );
};
