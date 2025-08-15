"use client";

import { requestHandler } from "../app";

const { createContext, useContext } = require("react");



const ProductContext = createContext({
    products: [],
    isLoading : false,
    error : false ,
    homeProduct : async () => {},
    allProducts  : async () => {},
    getIndividualProducts :  async () => {},
})


const useProducts = () => {
    return useContext(ProductContext)
}

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true); 


    const homeProduct = async () => {

    }

    const getAllProducts = async ({ page }) => {
        setIsLoading(true);
        setError(null);

        try {
            await requestHandler(
                async () => fetchProducts({page}), 
                setLoading,
                (res) => {
                    setProducts((prevProducts) => {
                        const newProducts = res.data.filter(
                            (newProduct) => !prevProducts.some((prev) => prev._id === newProduct._id)
                        );
                        return [...prevProducts, ...newProducts]; 
                    });
                    
                    if (res.data.length === 0) {
                        setHasMore(false); 
                    }
                }
            );
        } catch (error) {
            setError(error);
        }
    };

    return (
        <ProductContext.Provider value={{ products, getAllProducts, isLoading, error, hasMore }}>
            {children}
        </ProductContext.Provider>
    );
};


export { ProductContext, ProductProvider, useProducts };
