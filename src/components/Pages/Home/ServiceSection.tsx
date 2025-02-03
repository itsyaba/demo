import { Clock, DollarSign, Smile, Brain, Users, Briefcase } from "lucide-react";
import {
  IconBabyCarriage,
  IconCookie,
  IconDevicesDown,
  IconHanger,
  IconHomeEdit,
  IconSettingsCode,
  IconSettingsDown,
  IconToolsKitchen3,
  IconWashMachine,
} from "@tabler/icons-react";
import ClockGif from "../../../assets/clock (2).gif";
import MoneyGif from "../../../assets/money (2).gif";
import ClarityGif from "../../../assets/clarity (2).gif";
import SocialGif from "../../../assets/social (2).gif";
import StressGif from "../../../assets/stress (2).gif";
// I'm not being racist
import black_women from "../../../assets/black_women.jpg";
import { Button } from "@/components/ui/moving-border";
export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Laundry Room Organization",
      icon: <IconWashMachine className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 2,
      title: "Closet Organizer",
      icon: <IconHanger className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 3,
      title: "Kitchen Organizer",
      icon: <IconToolsKitchen3 className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 4,
      title: "Pantry Organizer",
      icon: <IconCookie className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 5,
      title: "Home Office Organizing",
      icon: <Briefcase className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 6,
      title: "Children's Room Organization",
      icon: <IconBabyCarriage className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 7,
      title: "Downsizing Storage",
      icon: <IconDevicesDown className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 8,
      title: "Downsizing Home",
      icon: <IconSettingsDown className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 9,
      title: "Decluttering House For The Sale",
      icon: <IconSettingsCode className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 10,
      title: "Organizing After a House Move",
      icon: <IconHomeEdit className="w-6 h-6 lg:w-10 lg:h-10" />,
      color: "bg-yellowC",
    },
  ];

  const benefits = [
    {
      id: 1,
      title: "Save Time",
      icon: <Clock className="w-6 h-6" />,
      animateIcon: ClockGif,
    },
    {
      id: 2,
      title: "Save Money",
      icon: <DollarSign className="w-6 h-6" />,
      animateIcon: MoneyGif,
    },
    {
      id: 3,
      title: "Less Stress",
      icon: <Smile className="w-6 h-6" />,
      animateIcon: StressGif,
    },
    {
      id: 4,
      title: "Clarity of Mind",
      icon: <Brain className="w-6 h-6" />,
      animateIcon: ClarityGif,
    },
    {
      id: 5,
      title: "Better Social Life",
      icon: <Users className="w-6 h-6" />,
      animateIcon: SocialGif,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-clip " id="services">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-16 text-blue-900">
          Our Services
        </h2>
        <div className="h-[40vh] md:h-full">
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] mx-auto  ">
            {/* Services Circle */}
            <div className="absolute inset-0 border-2 border-blue-900 rounded-full animate-spin-slow  ">
              {services.map((service, index) => {
                const angle = (index * 360) / services.length;
                const radius = window.innerWidth < 640 ? 175 : window.innerWidth < 1024 ? 225 : 300;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={service.id}
                    className="absolute w-10 h-10 -mt-6 -ml-5 md:w-15 md:h-15 md:-mt-10 md:-ml-10 lg:w-28 lg:h-28 lg:-mt-14 lg:-ml-14 animate-maintain"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div
                      className={`w-full h-full rounded-full ${service.color} flex items-center justify-center shadow-md`}
                    >
                      {service.icon}
                    </div>
                    <p className="text-xs md:text-center font-medium text-blue-900 mt-2 w-24 text-left ">
                      {service.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Benefits Circle */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[160px] sm:h-[160px] lg:w-[400px] lg:h-[400px] border-2 border-blue-300 rounded-full">
              <div className="animate-spin-reverse absolute top-1/2 left-1/2">
                {benefits.map((benefit, index) => {
                  const angle = (index * 360) / benefits.length;
                  const radius = window.innerWidth < 640 ? 80 : window.innerWidth < 1024 ? 80 : 200;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <div
                      key={benefit.id}
                      className="absolute w-10 h-10 -mt-5 -ml-5 sm:w-12 sm:h-12 sm:-mt-6 sm:-ml-6 lg:w-16 lg:h-16 lg:-mt-8 lg:-ml-8 animate-maintain-reverse z-20"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <div className="w-full h-full rounded-full bg-yellowC flex flex-col items-center justify-center shadow-md">
                        <div className="text-blue-500 mb-0.5">{benefit.icon}</div>
                      </div>
                      <p className=" text-center font-medium text-blue-900 text-sm w-24">
                        {benefit.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div> */}

            {/* Central Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-20 sm:h-20 lg:w-44 lg:h-44 z-10 ">
              <div className=" absolute -top-12 rounded-lg text-center left-0 right-0 lg:-right-4 lg:-left-4">
                <Button
                  borderRadius="0.2rem"
                  className="text-xs md:text-base lg:text-md py-2  flex flex-col items-center  bg-white text-black shadow-2xl border-none font-poppins "
                >
                  <span className="block font-extrabold">10+</span>
                  services we provide
                </Button>
              </div>
              {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white px-6 py-1  rounded-lg z-20 w-1/2">
                <p className="text-sm sm:text-base lg:text-lg font-semibold whitespace-wrap text-center ">
                  <span className="block">10+</span>
                  Service we provide
                </p>
              </div> */}
              <img
                src={black_women}
                alt="Professional Organizer"
                className="w-full h-full rounded-full object-top border-4 border-white shadow-2xl "
              />
            </div>
          </div>
        </div>

        {/* Professional Organizer Benefits Section */}
        <div className="mt-32 w-11/12 mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            Benefits of Hiring a Professional Organizer
          </h2>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {typeof benefit.animateIcon === "string" ? (
                    <img
                      src={benefit.animateIcon || "/placeholder.svg"}
                      alt={benefit.title}
                      className="w-20 h-20"
                    />
                  ) : (
                    benefit.animateIcon
                  )}
                </div>
                <h3 className="font-semibold text-lg text-blue-900">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
