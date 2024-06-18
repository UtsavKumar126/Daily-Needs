import React, { useContext, useEffect } from "react";
import styles from "./Styles.module.css";
import { CategoryContext } from "../../../Context/CategoryProvider";

function SearchBar() {
  const { categories, setCategories, selected, setSelected, setSearch } =
    useContext(CategoryContext);
  useEffect(() => {
    getCategories();
  }, []);
  async function getCategories() {
    const resp = await fetch("https://dummyjson.com/products/category-list");
    const data = await resp.json();
    setCategories(data);
  }
  function addSelected(e) {
    if (!selected.includes(e.target.value)) {
      setSelected([...selected, e.target.value]);
      console.log(e.target.value);
    }
  }
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search for Products ...."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <select name="" id="" onChange={addSelected}>
        <optgroup label="Categories"></optgroup>
        <optgroup>
          {categories &&
            categories.map((data, i) => (
              <option value={data} key={i}>
                {data}
              </option>
            ))}
        </optgroup>
      </select>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
