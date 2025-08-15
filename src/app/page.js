import HeroSection from "@/components/HeroSection";
import HeroSectionSwiper from "@/components/HeroSectionSwiper";
import Products from "@/components/Home/Products";
import { ArrowRightIcon, CheckBadgeIcon, TagIcon, TruckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Home() {

    const images = [
    {
      url: "https://images.unsplash.com/photo-1615803796379-b4cda8e9c09c?w=1200&auto=format&fit=crop&q=80",
      title: "Experience Serenity",
      description: "Discover breathtaking landscapes and tranquil moments.",
    },
    {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80",
      title: "Unforgettable Adventures",
      description: "Embark on journeys beyond imagination.",
    },
    {
      url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&auto=format&fit=crop&q=80",
      title: "Luxury & Comfort",
      description: "Indulge in the finest experiences.",
    },
    {
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=80",
      title: "Nature’s Beauty – Inspired Comfort",
      description:
        "A perfect blend of elegance and nature, our sofa design brings the warmth of earthy tones and organic textures into your living space.",
    },
    {
      url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1200&auto=format&fit=crop&q=80",
      title: "Timeless Elegance",
      description: "Step into a world of style and sophistication.",
    },
  ];

  const checkSection = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit assumenda enim beatae. Magni ipsam earum recusandae, consequatur aspernatur consectetur soluta asperiores ut rem amet iusto laudantium quasi eum hic officiis?",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg",
      title: "lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit assumenda enim beatae. Magni ipsam earum recusandae, consequatur aspernatur consectetur soluta asperiores ut rem amet iusto laudantium quasi eum hic officiis?",
    },
  ];

  return (
    <>

      <HeroSectionSwiper
        items={images}

      />

       <section className="container bg-white mx-auto px-4 py-8 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          The Latest Excuse to Rearrange Your Living Room (Again)
        </h2>
        {/* <Products /> */}
      </section>
        {/* <HeroSection 
          imgURL="https://t3.ftcdn.net/jpg/03/20/06/16/360_F_320061630_qTwTYsIEPJO62ubp5bzF41Pob4oJug5b.jpg"
          titleText="Explore the World"
          subtitle="Discover the beauty of the world"
          altText="bannerImg"

        /> */}
             <section className="py-16 px-4 sm:px-8 lg:px-16 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900">
              Transform Your Space with{" "}
              <span className="font-medium">Handcrafted Elegance</span>
            </h2>
            <div className="h-1 w-20 bg-amber-600"></div>
          </div>

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              At Wood You Believe It?, we blend timeless craftsmanship with
              contemporary design. Each piece is meticulously created to bring
              warmth, character, and enduring quality to your modern living
              spaces.
            </p>

            <div className="group relative inline-block border border-gray-200 rounded-xl hover:border-amber-500 transition-all duration-300 overflow-hidden">
              <button className="flex items-center gap-2 px-8 py-3 text-lg font-medium text-gray-900 group-hover:text-amber-600 transition-all duration-300">
                Discover Our Collection
                <ArrowRightIcon className="w-5 h-5 text-gray-600 group-hover:text-amber-600 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Enhanced underline effect */}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-amber-600 group-hover:left-0 group-hover:w-full transition-all duration-500 ease-out"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}

      <div className="container mx-auto sm:px-8 lg:px-16 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Section */}
          <div className=" border bg-zinc-700 rounded-2xl p-5 h-[500px] overflow-y-auto hide-scrollbar  space-y-5">
            {/* Image Section */}
            <div className="px-5 ">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
                alt=""
                className="object-cover w-full rounded-2xl"
              />
            </div>
            <div className="px-5 ">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
                alt=""
                className="object-cover w-full rounded-2xl"
              />
            </div>
            <div className="px-5 ">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
                alt=""
                className="object-cover w-full rounded-2xl"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className=" ">
            {checkSection &&
              checkSection.length > 0 &&
              checkSection.map((item, index) => (
                  <div key={item.id} className={`flex flex-col md:flex-row  gap-6 rounded-lg border-gray-300  mb-5  border  py-5 px-5 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`} >
                    <div className="h-40 md:h-50 w-full  ">
                    
                      <img
                        src={item.img}
                        alt={item.title}
                        className="object-cover  w-full h-full rounded-2xl"
                      />
                    </div>

                    <div className="flex flex-col justify-center  ">
                      {" "}
                      <h3 className="text-xl font-medium mb-2">
                        Lorem ipsum dolor sit
                       
                      </h3>
                       <span className="border border-amber-600 w-60 mb-2"></span>
                      <p className="text-gray-600 line-clamp-5">
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ratione quam quae fugit
                        debitis fugiat quia omnis delectus sed repudiandae officia
                        eos illo totam, ut consequatur exercitationem doloribus
                        soluta libero beatae.
                      </p>
                    </div>
                  </div>
              ))}
          </div>
        </div>
      </div>

      {/* <section className="bg-white py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
          Shop by Category
        </h2>
        <Category />
      </section> */}

      {/* ParaGrah and Heading */}

      {/* <section className="my-10">
        <SecondCarousel />
      </section> */}

      <section className="bg-white py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Why Choose Us?
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <CheckBadgeIcon className="mx-auto w-12 h-12 text-red-500" />
            <h3 className="text-lg font-semibold mt-2">Premium Quality</h3>
            <p className="text-gray-600">Crafted with top-notch materials.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <TagIcon className="mx-auto w-12 h-12 text-green-500" />
            <h3 className="text-lg font-semibold mt-2">Affordable Prices</h3>
            <p className="text-gray-600">
              Luxury furniture at unbeatable prices.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <TruckIcon className="mx-auto w-12 h-12 text-blue-500" />
            <h3 className="text-lg font-semibold mt-2">Fast & Free Delivery</h3>
            <p className="text-gray-600">
              Enjoy hassle-free doorstep delivery.
            </p>
          </div>
        </div>
      </section>

      
    </>
  );
}
