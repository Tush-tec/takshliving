import React from "react";

const HeroSection = ({ imgURL, altText, titleText, extraClass }) => {

    console.log("check hero section", titleText);
    

  return (
    <div className="relative border">
      <div className="relative  main-home-slider-part w-full">
        <img
          src={imgURL}
          alt={altText}
          className={`w-full h-[200px] sm:h-[200px] lg:h-[400px] main-home-slider-part object-cover ${extraClass} `}
        />
        <div className=""> 
            {/* absolute inset-0 bg-black/50 */}
          <div className="absolute inset-0 flex  items-center ">
            <div className="container  px-4 md:px-26 lg:px-26  w-full mx-auto">
              <h1 className=" text-center  font-bold drop-shadow-lg text-white leading-tight">
                {titleText}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
