import { useState } from "react";
import { cn } from "@/lib/utils";
import { Compare } from "@/components/ui/compare";

import entranceWay from "@/assets/mojo/Entrance-way-before.jpeg";
import entranceWayAfter from "@/assets/mojo/Entrance-way-after.jpeg";
import closet from "@/assets/mojo/closet-before-scaled.jpg";
import closetAfter from "@/assets/mojo/closet-after-scaled.jpg";
import drawer from "@/assets/mojo/cluttered-drawer-before.jpg";
import drawerAfter from "@/assets/mojo/decluttered-drawer-after.jpg";
import bathroom from "@/assets/mojo/Messy-bathroom-cabinet.jpeg";
import bathroomAfter from "@/assets/mojo/decluttered-bathroom-cabinet.jpeg";
import dresser from "@/assets/mojo/cluttered-dresser-before-scaled.jpg";
import dresserAfter from "@/assets/mojo/decluttered-dresser-after-scaled.jpg";
import kitchen from "@/assets/mojo/Cluttered-kitchen-pantry.jpeg";
import kitchenAfter from "@/assets/mojo/deCluttered-kitchen-pantry.jpeg";
import kitchenOrg from "@/assets/mojo/IMG-20221028-WA0013.jpg";
import kitchenOrgAfter from "@/assets/mojo/IMG-20221028-WA0015.jpg";
import work from "@/assets/mojo/20230116_171203-scaled.jpg";
import workAfter from "@/assets/mojo/IMG_20230116_1822341.jpg";
import workplace from "@/assets/mojo/work-area-before-scaled.jpg";
import workplaceAfter from "@/assets/mojo/work-area-after-scaled.jpg";
import mens from "@/assets/mojo/mens-closet.jpg";
import mensAfter from "@/assets/mojo/WhatsApp-Image-2023-02-23-at-5.32.53-PM.jpeg";

const categories = [
  { id: "all", label: "ALL" },
  { id: "closets", label: "Closets and Garages" },
  { id: "food", label: "Food Pantry and Kitchen area" },
  { id: "work", label: "Work Area and Play Area" },
  { id: "landing", label: "Landing /Entrance way" },
];

const projects = [
  {
    id: 1,
    image: entranceWay,
    after: entranceWayAfter,
    category: "landing",
    alt: "landing",
  },
  {
    id: 2,
    image: closetAfter,
    after: closet,
    category: "closets",
    alt: "Organizing clothes and charity boxes",
  },
  {
    id: 3,
    image: drawer,
    after: drawerAfter,
    category: "closets",
    alt: "Organizing clothes and charity boxes",
  },
  {
    id: 4,
    image: bathroom,
    after: bathroomAfter,
    category: "closets",
    alt: "Organizing clothes and charity boxes",
  },
  {
    id: 5,
    image: dresser,
    after: dresserAfter,
    category: "closets",
    alt: "Organizing clothes and charity boxes",
  },
  {
    id: 6,
    image: kitchen,
    after: kitchenAfter,
    category: "food",
    alt: "Food pantry",
  },
  {
    id: 7,
    image: kitchenOrg,
    after: kitchenOrgAfter,
    category: "food",
    alt: "Food pantry",
  },
  {
    id: 8,
    image: work,
    after: workAfter,
    category: "work",
    alt: "Organized workspace with laptop",
  },
  {
    id: 9,
    image: workplace,
    after: workplaceAfter,
    category: "work",
    alt: "Organized workspace with laptop",
  },
  {
    id: 11,
    image: mens,
    after: mensAfter,
    category: "food",
    alt: "Organized room",
  },
];

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div id="projects">
      <div className="container mx-auto px-4 py-10 max-w-11/12">
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2 font-railway">
            OUR PROJECT
          </div>
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">Projects</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-xs transition-colors tracking-wider font-railway uppercase",
                activeCategory === category.id
                  ? "border border-yellow-400 text-black"
                  : "hover:bg-muted"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group "
            >
              <Compare
                firstImage={project.image}
                secondImage={project.after}
                firstImageClassName="object-cover  "
                secondImageClassname="object-cover "
                className="transition-transform duration-300 group-hover:scale-110"
                slideMode="hover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
