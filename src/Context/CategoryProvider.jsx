import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const [search,setSearch]=useState("");
  const[distance,setDistance]=useState();
  return (
    <CategoryContext.Provider value={{ categories, setCategories,selected, setSelected,search,setSearch,distance,setDistance }}>
      {children}
    </CategoryContext.Provider>
  );
}
