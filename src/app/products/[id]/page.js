"use client";

import { useProducts } from "@/utility/contextState.js/ProductContext";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";

const page = () => {
  const { id } = useParams();
  const { fetchProductsbyId, products } = useProducts();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    if (id) fetchProductsbyId(id);
  }, [id]);

  if (!products)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  const product = products;

  const images = product.images || [
    product.mainImage || "/placeholder-furniture.jpg",
  ];
  const colors = product.colors || ["#B88E72", "#3A3A3A", "#F9F1E7"];
  const features = product.features || [
    "Solid Wood Construction",
    "Handcrafted Details",
    "Premium Upholstery",
  ];

  return (
    <div className="min-h-screen bg-amber-50 py-8">
      <div className="container mx-auto px-4">
        <button className="flex items-center text-amber-700 mb-6 hover:underline">
          <ArrowLeftIcon className="w-5 h-5 mr-1" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="relative pb-[70%] bg-amber-100 rounded-lg overflow-hidden mb-4">
              <img
                src={images[currentImageIndex]}
                alt={product.name}
                className="absolute h-full w-full object-cover cursor-zoom-in"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full backdrop-blur-sm">
                <ArrowsPointingOutIcon className="w-5 h-5 text-amber-800" />
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                    currentImageIndex === index
                      ? "border-amber-600"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h1 className="text-3xl font-serif font-bold text-amber-900 mb-2">
              {product.name || "Premium Furniture Piece"}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) =>
                  star <= (product.rating || 4) ? (
                    <SolidStarIcon
                      key={star}
                      className="w-5 h-5 text-amber-500"
                    />
                  ) : (
                    <StarIcon key={star} className="w-5 h-5 text-amber-300" />
                  )
                )}
              </div>
              <span className="text-sm text-amber-600 ml-2">
                ({product.reviews || 12} reviews)
              </span>
            </div>

            <div className="text-3xl font-bold text-amber-800 mb-6">
              ₹{(product.price || 29999).toLocaleString("en-IN")}
            </div>

            <p className="text-amber-700 mb-6">
              {product.shortDescription ||
                "Beautifully crafted furniture piece combining traditional techniques with modern design."}
            </p>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-amber-800 mb-2">Color</h3>
              <div className="flex gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-amber-600"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Color option ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-amber-800 mb-2">
                Quantity
              </h3>
              <div className="flex items-center border border-amber-200 rounded-lg w-fit">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 text-amber-700 hover:bg-amber-50"
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 text-amber-700 hover:bg-amber-50"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button className="flex-1 flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 rounded-lg font-medium transition">
                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="flex-1 flex items-center justify-center border border-amber-300 text-amber-700 hover:bg-amber-50 py-3 px-6 rounded-lg font-medium transition">
                <HeartIcon className="w-5 h-5 mr-2" />
                Wishlist
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-amber-700">
              <div className="flex items-center">
                <TruckIcon className="w-5 h-5 mr-2 text-amber-600" />
                Free Delivery
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-amber-600" />
                10-Year Warranty
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-serif font-bold text-amber-900 mb-4">
            Product Details
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-amber-800 mb-2">
              Key Features
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-amber-700">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {product.description && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-amber-800 mb-2">
                Description
              </h3>
              <p className="text-amber-700">{product.description}</p>
            </div>
          )}

          <div>
            <h3 className="text-lg font-medium text-amber-800 mb-2">
              Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-amber-700">
              <div>
                <span className="font-medium">Material:</span>{" "}
                {product.material || "Solid Teak Wood"}
              </div>
              <div>
                <span className="font-medium">Dimensions:</span>{" "}
                {product.dimensions || 'L 72" × W 32" × H 30"'}
              </div>
              <div>
                <span className="font-medium">Weight:</span>{" "}
                {product.weight || "45 kg"}
              </div>
              <div>
                <span className="font-medium">Assembly:</span>{" "}
                {product.assembly || "Required (tools included)"}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section (placeholder for future API implementation) */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-serif font-bold text-amber-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-amber-700">
            No reviews yet. Be the first to review!
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-serif font-bold text-amber-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
