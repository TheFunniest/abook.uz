import React from "react";
import "./styles.scss";
import { ReactComponent as ArrowDown } from "../../assets/images/arrow_down.svg";
import { ReactComponent as SearchIcon } from "../../assets/images/searchIcon.svg";

const Filter = () => {
  return (
    <div className="filter">
      <ul className="filter-list">
        <li className="filter-list__item">
          По дате
          <ArrowDown
            style={{
              marginLeft: 5,
            }}
          />
        </li>
        <li className="filter-list__item">По названию</li>
        <li className="filter-list__item">Аудиокнига</li>
      </ul>

      <div className="search-input">
        <input type="text" placeholder="Автор или название книги"/>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Filter;
