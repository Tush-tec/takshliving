import { LocalStorage } from "@/utility/app";
import axios from "axios";


const apiClient = axios.create({
    baseURL:"http://localhost:8080/api/v1/" || "https://dev-com-backend.vercel.app/api/v1",
    withCredentials: true,
    timeout:120000
        
})


apiClient.interceptors.request.use(
    function (config) {
      const token = LocalStorage.get("Token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
);


const registerUser = (data) =>{
    return apiClient.post('/users/auth/register', data)
}

const loginUser = (data) => {
    return apiClient.post('/users/auth/login', data, {
        withCredentials: true
    })
};


const logOutUser = () => {
    return apiClient.post('/users/auth/logout', {},);
};


const getHomeProducts =  async ({page, limit}) => {
    return apiClient.get(`/products/product/all-product?page=${page}&limit=${limit}`)
}


const getUSP =  async () => {
    return apiClient.get("")
}

const getSightSeeing = async () => {
    return apiClient.get()
}

const getLocation = async () => {
    return apiClient.get()
}

const getInterNational = async () => {

}

const getBannerSlider = async () => {
    return apiClient.get()
}

const getMemory = async () => {
    return apiClient.get()
}

const getFeedBack =  async () => {
    return apiClient.get
}

const getPolicies = async () => {
    return apiClient.get()
}

const Faq = async () => {
    return apiClient.get()
}

export {
    registerUser,
    loginUser,
    logOutUser,
    getHomeProducts,
    getUSP,
    getSightSeeing,
    getLocation,
    getInterNational,
    getBannerSlider,
    getMemory,
    getFeedBack,
    getPolicies,
    Faq
}