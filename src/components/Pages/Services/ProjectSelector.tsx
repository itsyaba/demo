"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SponsorshipTiers } from "./sponsorship-tires";

const PROJECTS = {
  water: {
    title: "Clean Drinking Water",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem at quidem quam ratione optio. Iste dolorem voluptas ex accusantium ipsam illo exercitationem alias libero, harum error aliquam nihil vitae aut fuga! Quisquam optio modi itaque deserunt, aliquam alias nisi. Dolores reprehenderit ut culpa, eligendi animi sit accusantium perspiciatis. Asperiores, maiores..",
  },
  hospital: {
    title: "Dikome Balue Hospital Rebuild",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt qui pariatur blanditiis, dolorem natus deserunt odio libero, perspiciatis similique, quos voluptatibus harum illo ea minima esse possimus eos rem? Nostrum quisquam possimus optio praesentium dolorum! Distinctio doloremque dolores, tempora dolorum unde, odit praesentium quibusdam, inventore rerum deleniti incidunt ipsum consectetur expedita quis ea numquam cupiditate possimus? Voluptatum, optio fugit?",
  },
};

export function ProjectSelector() {
  const [selectedProject, setSelectedProject] = useState<string>("");

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Select a Project to Support</h2>
        <Select onValueChange={setSelectedProject} value={selectedProject}>
          <SelectTrigger className="w-full max-w-md mx-auto">
            <SelectValue placeholder="Choose a project" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="water">Clean Drinking Water</SelectItem>
            <SelectItem value="hospital">Dikome Balue Hospital Rebuild</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {selectedProject && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{PROJECTS[selectedProject as keyof typeof PROJECTS].title}</CardTitle>
              <CardDescription>
                {PROJECTS[selectedProject as keyof typeof PROJECTS].description}
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center">Choose Your Sponsorship Level</h3>
            <SponsorshipTiers selectedProject={selectedProject} />
          </div>
        </div>
      )}
    </div>
  );
}
