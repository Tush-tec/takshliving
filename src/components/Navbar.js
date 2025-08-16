"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "next/image";
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const headerLinks = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Contact",
      url: "/contact",
    },
    {
      id: 4,
      name: "Blogs",
      url: "/blogs",
    },
  ];

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery("");
    }
  };
  return (
    <header className="section-wrapper mx-auto">
      <nav className="grid grid-cols-3 items-center py-2">
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              src="https://res.cloudinary.com/ddbs9k8be/image/upload/v1755352771/optimized_images/xcndubyfu7pqjj7haldf.jpg"
              alt="logo"
              className="w-80 h-20 relative top-2 object-cover"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between items-center">
          {headerLinks.map((items, index) => (
            <Link
              key={index}
              href={items.url}
              className="font-bold text-lg hover:text-blue-600 transition-colors"
            >
              {items.name}
            </Link>
          ))}
        </div>

        {/* Search and Sign Up */}
        <div className="flex justify-end items-center gap-4">
          {/* Search Icon and Input */}
          <div className="relative flex items-center">
            {/* Animated Search Input - positioned to the left of the icon */}
            <div
              className={`absolute right-full mr-2 ${
                showSearch
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2 pointer-events-none"
              } transition-all duration-200`}
            >
              <input
                type="search"
                placeholder="Search things...."
                className="w-64 h-10 border rounded-md p-2 shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Search Icon Button */}
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Sign Up Button - Uncommented and properly spaced */}
          {/* <Link
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors whitespace-nowrap"
          >
            Sign Up
          </Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
