import { Button } from "@/components/ui/button";
import closet from "@/assets/closet-2.jpg";
import womenImage from "@/assets/14.jpg";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const processSteps = [
    {
      id: 1,
      title: "Meet and greet",
      description: "Let's get to know each other and figure out a plan that works for you",
    },
    {
      id: 2,
      title: "Declutter the clutter",
      description: "Clean up gets you ready for the set up",
    },
    {
      id: 3,
      title: "Set a plan",
      description: "Obtain appropriate measurements and provide recommendations",
    },
    {
      id: 4,
      title: "Make it pretty",
      description:
        "Shop for needed supplies then time to get to work and put everything in its place",
    },
    {
      id: 5,
      title: "It's Showtime",
      description: "We reveal your newly organized space fit for a king, queen and business.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 max-w-10/12">
      <div className="flex items-center justify-between flex-col md:flex-row w-11/12 mx-auto  gap-10 md:gap-4">
        <div className="relative  mx-auto container flex items-center justify-center ">
          <div className="relative w-3/6">
            <div className="absolute -top-8 -right-10 w-full h-full border-8 border-gray-300 rounded-lg -z-20 " />
            <img src={closet} alt="Organized closet with hanging clothes" className="" />
            <div className="absolute bottom-0 right-0 transform translate-x-2/4 translate-y-1/4 w-2/3 bg-white p-2 rounded-lg shadow-xl">
              <img
                src={womenImage}
                alt="Professional organizer"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              <span className="line "></span>
              MJ'S PROCESS TO SUCCESS
            </h2>
            <p className="text-gray-600 mb-8">
              MJ is a professional and skilled expert in all domestic spheres. She offers a wide
              range of services which include: Entrance way, Closet & garages, food pantry,
              workspace, play area and reading area, and bookshelves.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div key={step.id} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-blue-900 group-hover:text-blue-700 transition-colors">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16 text-center space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          Getting Organized Is Just A Click Away
        </h3>
        <Button className="bg-[#E3C1C1] hover:bg-[#d4b1b1] text-black px-8 py-6 text-lg">
          Take Action Today
        </Button>
      </div>
    </section>
  );
}
