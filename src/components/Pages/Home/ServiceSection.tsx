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
import ClockGif from "../../../assets/clock.gif";
import MoneyGif from "../../../assets/money.gif";
import ClarityGif from "../../../assets/clarity.gif";
import SocialGif from "../../../assets/social.gif";
import StressGif from "../../../assets/stress.gif";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Laundry Room Organization",
      icon: <IconWashMachine className="w-10 h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 2,
      title: "Closet Organizer",
      icon: <IconHanger className="w-10 h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 3,
      title: "Kitchen Organizer",
      icon: <IconToolsKitchen3 className="w-10 h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 4,
      title: "Pantry Organizer",
      icon: <IconCookie className="w-10 h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 5,
      title: "Home Office Organizing",
      icon: <Briefcase className="w-10 h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 6,
      title: "Children's Room Organization",
      icon: <IconBabyCarriage className="w-10 h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 7,
      title: "Downsizing Storage",
      icon: <IconDevicesDown className="w-10 h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 8,
      title: "Downsizing Home",
      icon: <IconSettingsDown className="w-10 h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 9,
      title: "Decluttering House For The Sale",
      icon: <IconSettingsCode className="w-10 h-10" />,
      color: "bg-yellowC",
    },
    {
      id: 10,
      title: "Organizing After a House Move",
      icon: <IconHomeEdit className="w-10 h-10" />,
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
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-clip">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Our Services</h2>

        <div className="relative w-[800px] h-[800px] mx-auto">
          {/* Services Circle */}
          <div className="absolute inset-0 border-2 border-blue-200 rounded-full animate-spin-slow">
            {services.map((service, index) => {
              const angle = (index * 360) / services.length;
              const x = 400 * Math.cos((angle * Math.PI) / 180);
              const y = 400 * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={service.id}
                  className="absolute w-28 h-28 -mt-14 -ml-14 animate-maintain"
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
                  <p className="text-xs text-center font-medium text-blue-900 mt-2">
                    {service.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Benefits Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-blue-300 rounded-full  ">
            <div className="animate-spin-reverse absolute top-1/2 left-1/2">
              {benefits.map((benefit, index) => {
                const angle = (index * 360) / benefits.length;
                const x = 200 * Math.cos((angle * Math.PI) / 180);
                const y = 200 * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={benefit.id}
                    className="absolute w-20 h-20 -mt-10 -ml-10 animate-maintain-reverse "
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-yellowC flex flex-col items-center justify-center shadow-md">
                      <div className="text-blue-500 mb-0.5">{benefit.icon}</div>
                    </div>
                    <p className=" text-center font-medium text-blue-900 text-sm">
                      {benefit.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Central Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 z-10">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
              alt="Professional Organizer"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Professional Organizer Benefits Section */}
        <div className="mt-32 w-11/12 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
            Benefits of Hiring a Professional Organizer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
