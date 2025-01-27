import { useState, useEffect } from "react";
import closet from "../../../assets/closet.jpg";

const contents = [
  {
    id: 1,
    title: "Simplify Your Space with Our Decluttering Service",
    subtitle: "WE PROVIDE THE BEST ORGANIZING SERVICES",
  },
  {
    id: 2,
    title: "Convenient Decluttering and Organizing for Busy Lives",
    subtitle: "All You Need",
  },
  {
    id: 3,
    title: "We Help You Organize Your Home and Business",
    subtitle: "Organize your home and business",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % contents.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentContent = contents[currentIndex];

  //TODO: Functional Get Started Button
  //TODO: Find a better BG Image
  //TODO: Simple tweaks here and there
  //TODO: LEFT OR RIGHT it should not be that hard of a question

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${closet})`,
        }}
        //         I found another Image but I didn't like it so we'll stick with the old one
        //         style={{
        //           backgroundImage:
        //             'url("https://images.unsplash.com/photo-1587874522487-fe10e954d035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        //         }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="ml-auto w-full md:w-2/3 lg:w-1/2 bg-white/20 backdrop-blur-lg rounded-lg p-8 lg:p-12 transform transition-all duration-500 ease-in-out">
            {/* So that the height won't jump up and down we hardcode it  */}
            <div className="h-[250px] relative">
              <div
                className={`absolute inset-0 transform transition-all duration-500 ease-in-out  flex items-start justify-between flex-col ${
                  isAnimating ? "opacity-0 translate-y-12" : "opacity-100 translate-y-0"
                }`}
              >
                <h2 className="text-yellowC font-bold tracking-wider mb-2 text-sm lg:text-base font-railway uppercase">
                  - {currentContent.subtitle}
                </h2>
                {currentContent.title && (
                  <h1 className="text-white text-3xl lg:text-5xl font-bold leading-tight mb-3">
                    {currentContent.title}
                  </h1>
                )}
                <button
                  className="bg-transparent border border-yellowC  text-white px-12 py-2  font-semibold transform transition-all duration-300 hover:scale-105  font-poppins
                   "
                >
                  Get Started
                </button>
              </div>
            </div>
            {/* Progress Indicators  ** instead of the side I thought the bottom would be better */}
            <div className="flex gap-2 mt-8">
              {contents.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? "w-8 bg-yellow-400" : "w-2 bg-white/50"
                  }`}
                  onClick={() => {
                    console.log("clicked : " + index);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
