import { AuthProvider } from "@/utility/contextState.js/AuthContext";
import { CategoryProvider } from "@/utility/contextState.js/ProductCategory/CategoryContext";
import { ProductProvider } from "@/utility/contextState.js/ProductContext";
import React from "react";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>{children}</ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
