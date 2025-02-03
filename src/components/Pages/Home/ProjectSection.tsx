import { useState } from "react";
import { cn } from "@/lib/utils";
import { Compare } from "@/components/ui/compare";

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
    image: "https://themojoeffect.com/wp-content/uploads/2023/03/Entrance-way-before.jpeg",
    after: "https://themojoeffect.com/wp-content/uploads/2023/03/Entrance-way-after.jpeg",
    category: "landing",
    alt: "landing",
  },
  {
    id: 2,
    image: "https://themojoeffect.com/wp-content/uploads/2023/03/closet-after-scaled.jpg",
    after: "https://themojoeffect.com/wp-content/uploads/2023/03/closet-before-scaled.jpg",
    category: "closets",
    alt: "Organizing clothes and charity boxes",
  },
  {
    id: 3,
    image: "https://themojoeffect.com/wp-content/uploads/2023/01/cluttered-drawer-before.jpg",
    after: "https://themojoeffect.com/wp-content/uploads/2023/01/decluttered-drawer-after.jpg",
    category: "closets",
    alt: "Organizing clothes and charity boxes",
  },
  {
    id: 4,
    image: "https://themojoeffect.com/wp-content/uploads/2023/01/Messy-bathroom-cabinet.jpeg",
    after: "https://themojoeffect.com/wp-content/uploads/2023/01/decluttered-bathroom-cabinet.jpeg",
    category: "closets",
    alt: "Organizing clothes and charity boxes",
  },
  {
    id: 5,
    image:
      "https://themojoeffect.com/wp-content/uploads/2023/01/cluttered-dresser-before-scaled.jpg",
    after:
      "https://themojoeffect.com/wp-content/uploads/2023/01/decluttered-dresser-after-scaled.jpg",
    category: "closets",
    alt: "Organizing clothes and charity boxes",
  },
  {
    id: 6,
    image: "https://themojoeffect.com/wp-content/uploads/2023/01/Cluttered-kitchen-pantry.jpeg",
    after: "https://themojoeffect.com/wp-content/uploads/2023/01/deCluttered-kitchen-pantry.jpeg",
    category: "food",
    alt: "Food pantry",
  },
  {
    id: 7,
    image: "https://themojoeffect.com/wp-content/uploads/2023/01/Unorganized-kitchen-cabinet.jpeg",
    after: "https://themojoeffect.com/wp-content/uploads/2023/01/organized-kitchen-cabinet.jpeg",
    category: "food",
    alt: "Food pantry",
  },
  {
    id: 8,
    image: "https://themojoeffect.com/wp-content/uploads/2023/01/20230116_171203-scaled.jpg",
    after: "https://themojoeffect.com/wp-content/uploads/2023/01/IMG_20230116_1822341.jpg",
    category: "work",
    alt: "Organized workspace with laptop",
  },
  {
    id: 9,
    image: "https://themojoeffect.com/wp-content/uploads/2023/01/IMG-20221028-WA0013.jpg",
    after: "https://themojoeffect.com/wp-content/uploads/2023/01/IMG-20221028-WA0015.jpg",
    category: "work",
    alt: "Organized workspace with laptop",
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
                firstImageClassName="object-cover object-left-center "
                secondImageClassname="object-cover object-left-center"
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
