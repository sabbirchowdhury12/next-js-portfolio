"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { generateProjectData, projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Image, { StaticImageData } from "next/image";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const projectBtn = [
  { name: "Full-Stack", value: "full-stack" },
  { name: "Font-end", value: "Font-end" },
  { name: "Javascript", value: "javascript" },
  { name: "Css", value: "css" },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState("full-stack");
  const [selectedbtn, setSelectedbtn] = useState("full-stack");
  const { ref } = useSectionInView("Projects", 0.5);

  const data: any = generateProjectData(selectedProject);

  const handleProject = (value: string) => {
    setSelectedProject(value);
    setSelectedbtn(value);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading title="My Projects" sub_title="" />
      {/* <ul className="flex  justify-center flex-wrap items-center gap-4">
        {projectBtn.map((btn) => {
          return (
            <div
              key={btn.value}
              onClick={() => handleProject(btn.value)}
              className={` borderBlack rounded-xl px-5 py-3  mb-10 cursor-pointer ${
                btn.value === selectedbtn
                  ? "bg-gray-500 text-white dark:bg-white dark:text-black"
                  : "bg-white dark:text-white/80 dark:bg-white/10 "
              }`}
            >
              {btn.name}
            </div>
          );
        })}
      </ul> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((project: any) => {
          return (
            <React.Fragment key={project.id}>
              <Project project={project} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
{
  /*<div className="grid grid-cols-2 gap-4">
 {data?.map(
  (
    project: React.JSX.IntrinsicAttributes &
      (
        | {
            readonly title: "rmtDev";
            readonly description: "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.";
            readonly tags: readonly [
              "React",
              "TypeScript",
              "Next.js",
              "Tailwind",
              "Redux"
            ];
            readonly imageUrl: StaticImageData;
          }
        | {
            readonly title: "CorpComment";
            readonly description: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.";
            readonly tags: readonly [
              "React",
              "Next.js",
              "MongoDB",
              "Tailwind",
              "Prisma"
            ];
            readonly imageUrl: StaticImageData;
          }
        | {
            readonly title: "Word Analytics";
            readonly description: "A public web app for quick analytics on text. It shows word count, character count and social media post limits.";
            readonly tags: readonly [
              "React",
              "Next.js",
              "SQL",
              "Tailwind",
              "Framer"
            ];
            readonly imageUrl: StaticImageData;
          }
      ),
    index: React.Key | null | undefined
  ) => (
    <React.Fragment key={index}>
      <Project {...project} />
    </React.Fragment>
  )
)}
</div> */
}
