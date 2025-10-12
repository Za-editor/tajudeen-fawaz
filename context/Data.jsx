import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error Loading JSON", err));
  }, []);
  return (
    <DataContext.Provider value={{ products }}>{children}</DataContext.Provider>
  );
};
