import Link from "next/link";
import React from "react";

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
    <header className="container mx-auto">
      <nav className="grid grid-cols-3  items-center py-5 px-20 ">
        <div>
          <Link href="/">
            <img
              src="https://deshvideshprod.s3.ap-south-1.amazonaws.com/website-static/logo-light-theme.webp"
              alt="logo"
              className="w-20 object-cover "
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
