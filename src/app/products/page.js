"use client";

import { useProducts } from "@/utility/contextState.js/ProductContext";
import React, { useEffect, useState } from "react";
import {
  FunnelIcon,
  StarIcon,
  ShoppingCartIcon,
  HeartIcon,
  XMarkIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/outline";
import { useCategory } from "@/utility/contextState.js/ProductCategory/CategoryContext";
import Link from "next/link";

const ProductsPage = () => {
  const { fetchAllProducts, products } = useProducts();
  const { categories, fetchCategories } = useCategory();
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    rating: null,
  });

  useEffect(() => {
    fetchAllProducts();
    fetchCategories();
  }, []);

  console.log("check categories", categories);

  //   const categories = [
  //     { name: "Sofas" },
  //     { name: "Chairs" },
  //     { name: "Beds" },
  //     // Add more categories
  //   ];

  //   const priceRanges = [
  //     "Under ₹10,000",
  //     "₹10,000 - ₹25,000",
  //     "₹25,000 - ₹50,000",
  //     "Over ₹50,000",
  //   ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Page Header */}
      {/* <div className="bg-amber-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold">
            Handcrafted Furniture
          </h1>
          <p className="text-amber-200">
            Discover timeless pieces for your home
          </p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-amber-900 flex items-center">
                <FunnelIcon className="mr-2" /> Filters
              </h2>
              <button
                className="text-sm text-amber-600 hover:underline"
                onClick={() =>
                  setFilters({
                    category: "",
                    priceRange: "",
                    rating: null,
                  })
                }
              >
                Clear all
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-md font-medium text-amber-800 mb-3">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat._id}>
                    <button
                      className={`flex items-center w-full text-left p-2 rounded-md transition ${
                        filters.category === cat.name
                          ? "bg-amber-100 text-amber-800"
                          : "hover:bg-amber-50"
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, category: cat.name })
                      }
                    >
                      {cat.categoryName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            {/* <div className="mb-8">
              <h3 className="text-md font-medium text-amber-800 mb-3">
                Price Range
              </h3>
              <ul className="space-y-2">
                {priceRanges.map((range) => (
                  <li key={range}>
                    <button
                      className={`w-full text-left p-2 rounded-md transition ${
                        filters.priceRange === range
                          ? "bg-amber-100 text-amber-800"
                          : "hover:bg-amber-50"
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, priceRange: range })
                      }
                    >
                      {range}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sorting Options */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
              <div>
                <span className="text-amber-700">
                  {products?.length || 0} products
                </span>
              </div>
              <div>
                <select className="border border-amber-300 rounded-md p-2 text-amber-800 focus:ring-amber-500 focus:border-amber-500">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products && products.length > 0 ? (
                products.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                  >
                    <div className="relative pb-[75%] bg-amber-100 overflow-hidden group">
                      <img
                        src={item.mainImage}
                        alt={item.name}
                        className="absolute h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-white font-medium text-lg">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-medium text-amber-900 mb-2">
                        {item.name}
                      </h3>

                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-amber-800">
                          ₹{item.price?.toLocaleString("en-IN")}
                        </span>
                        <button className="text-amber-700 hover:text-amber-900">
                          <Link href={`/products/${item._id}`}>
                            View Details
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-amber-700">
                    No products found. Please try different filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
