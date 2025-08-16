"use client";
import { useCategory } from "@/utility/contextState.js/ProductCategory/CategoryContext";
import Link from "next/link";
import React, { useEffect } from "react";

const HomeCategory = () => {
  const { fetchCategories, categories } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center mb-12">
        <span className="italic font-serif">Elevating Spaces</span> with{" "}
        <span className="text-amber-600">Craftsmanship and Design</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {categories &&
          categories.length > 0 &&
          categories.map((item) => (
            <div
              key={item._id}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <Link href={`/${item._id}`}>
                <img
                  src={item.image.replace(
                    "/upload/",
                    "/upload/w_600,h_750,c_fill/"
                  )}
                  alt={item.categoryName}
                  className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-3  font-medium text-xl  sm:text-base">
                  {item.categoryName}
                </p>
                <div></div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeCategory;
