import React from "react";
import type { Metadata } from "next";
import { skills } from "./skill-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Skills",
};

export default function Skills() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Skills</h1>
      <div className="space-y-6">
        {skills.map((skills, index) => (
          
          
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {skills.title}
                </span>
                
              </div>
              
            </div>
          
        ))}
      </div>
    </section>
  );
}
