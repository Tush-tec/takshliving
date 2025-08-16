import Link from "next/link";
import React from "react";
import logo from "next/image";
const Navbar = () => {
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

  return (
    <header className="section-wrapper mx-auto ">
      <nav className="grid grid-cols-3  items-center py-2">
        <div className=" ">
          <Link href="/">
            <img
              src="https://res.cloudinary.com/ddbs9k8be/image/upload/v1755352771/optimized_images/xcndubyfu7pqjj7haldf.jpg"
              alt="logo"
              className="w-80  h-20  relative top-2  object-cover "
            />
          </Link>
        </div>
        <div className=" flex justify-between items-center ">
          {headerLinks.map((items, index) => (
            <Link key={index} href={items.url} className="font-bold text-lg">
              {items.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <input
            type="search"
            placeholder="Search things...."
            className="w-95 h-10 border rounded-md p-2"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
