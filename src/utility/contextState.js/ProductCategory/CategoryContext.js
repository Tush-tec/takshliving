"use client";

import { createContext, useContext, useState } from "react";
import { getCategories } from "@/api/api";
import { requestHandler } from "@/utility/app";

const CategoryContext = createContext({
  products: [],
  isLoading: false,
  error: false,
  homeProduct: async () => {},
  allProducts: async () => {},
  getIndividualProducts: async () => {},
});

const useCategory = () => {
  return useContext(CategoryContext);
};

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchCategories = async () => {
    setIsLoading(true);

    await requestHandler(
      async () => getCategories(),
      setIsLoading,
      (res) => {
        setCategories(res.data.categories);
      },
      (error) => {
        setError(error);
      }
    );
  };

  return (
    <CategoryContext.Provider
      value={{ fetchCategories, isLoading, error, categories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider, useCategory };
