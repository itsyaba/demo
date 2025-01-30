import React from "react";
import { Box, Clock, DollarSign, Smile, Brain, Users, Briefcase } from "lucide-react";
import { IconBabyCarriage, IconCookie, IconHanger, IconHomeEdit, IconSettingsCode, IconSettingsDown, IconToolsKitchen3, IconWashMachine } from "@tabler/icons-react";

const services = [
  {
    id: 1,
    title: "Laundry Room Organization",
    icon: <IconWashMachine className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Closet Organizer",
    icon: <IconHanger className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Kitchen Organizer",
    icon: <IconToolsKitchen3 className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    id: 4,
    title: "Pantry Organizer",
    icon: <IconCookie className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    id: 5,
    title: "Home Office Organizing",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    id: 6,
    title: "Children's Room Organization",
    icon: <IconBabyCarriage className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    id: 7,
    title: "Downsizing Storage",
    icon: <Box className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    id: 8,
    title: "Downsizing Home",
    icon: <IconSettingsDown className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    id: 9,
    title: "Decluttering House For The Sale",
    icon: <IconSettingsCode className="w-6 h-6" />,
    color: "bg-blue-600",
  },
  {
    id: 10,
    title: "Organizing After a House Move",
    icon: <IconHomeEdit className="w-6 h-6" />,
    color: "bg-blue-500",
  },
];

const benefits = [
  { id: 1, title: "Save Time", icon: <Clock className="w-6 h-6" /> },
  { id: 2, title: "Save Money", icon: <DollarSign className="w-6 h-6" /> },
  { id: 3, title: "Less Stress", icon: <Smile className="w-6 h-6" /> },
  { id: 4, title: "Clarity of Mind", icon: <Brain className="w-6 h-6" /> },
  { id: 5, title: "Better Social Life", icon: <Users className="w-6 h-6" /> },
];

export default function ServicesSection() {
  const serviceRadius = 300;
  const benefitRadius = 140;

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-clip">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Our Services</h2>

        <div className="relative w-[700px] h-[700px] mx-auto">
          {/* Decorative Circles */}
          <div className="absolute inset-0 w-full h-full">
            {/* Services Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] border-2 border-blueC/50 rounded-full" />
            {/* Benefits Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-blueC/30 rounded-full" />
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
              alt="Professional Organizer"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Benefits */}
          <div className="absolute w-full h-full">
            {benefits.map((benefit, index) => {
              const angle = (index * 360) / benefits.length;
              const x = benefitRadius * Math.cos((angle * Math.PI) / 180);
              const y = benefitRadius * Math.sin((angle * Math.PI) / 180);
              // console.log(angle, x, y);

              return (
                <div
                  key={benefit.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div className="flex flex-col items-center w-24">
                    <div className="bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-md">
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <p className="text-xs text-center font-medium text-blue-900">{benefit.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Services */}
          <div className="absolute w-full h-full ">
            {services.map((service, index) => {
              const angle = (index * 360) / services.length;
              const x = serviceRadius * Math.cos((angle * Math.PI) / 180);
              const y = serviceRadius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={service.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div className="flex flex-col items-center w-28">
                    <div
                      className={`${service.color} w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-md`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <p className="text-xs text-center font-medium text-blue-900">{service.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Organizer Rates Section */}
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
                  {React.cloneElement(benefit.icon, { className: "w-8 h-8" })}
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
