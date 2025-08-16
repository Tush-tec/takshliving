"use client";

import { createContext, useContext, useState } from "react";
import { requestHandler } from "../app";
import { getAllProducts, getProductById } from "@/api/api";

const ProductContext = createContext({
  products: [],
  isLoading: false,
  error: false,
  homeProduct: async () => {},
  allProducts: async () => {},
  getIndividualProducts: async () => {},
  fetchProductsbyId: async (id) => {},
});

const useProducts = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchAllProducts = async () => {
    console.log("check request");

    setIsLoading(true);
    setError(null);

    try {
      await requestHandler(
        async () => getAllProducts(),
        setIsLoading,
        (res) => {
          console.log("check products res", res.data);

          setProducts(res.data);
          //   setProducts((prevProducts) => {
          //     const newProducts = res.data.filter(
          //       (newProduct) =>
          //         !prevProducts.some((prev) => prev._id === newProduct._id)
          //     );
          //     return [...prevProducts, ...newProducts];
          //   });

          //   if (res.data.length === 0) {
          //     setHasMore(false);
          //   }
        }
      );
    } catch (error) {
      setError(error);
    }
  };

  const fetchProductsbyId = async (id) => {
    setIsLoading(true);

    await requestHandler(
      async () => getProductById(id),
      setIsLoading,
      (res) => {
        setProducts(res.data);
      },
      (err) => {
        setError(err || err.message);
      }
    );
  };

  return (
    <ProductContext.Provider
      value={{
        fetchAllProducts,
        fetchProductsbyId,
        isLoading,
        error,
        hasMore,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider, useProducts };
