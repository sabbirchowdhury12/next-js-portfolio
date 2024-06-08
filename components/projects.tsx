"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { generateProjectData, projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Image, { StaticImageData } from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState("react");
  const { ref } = useSectionInView("Projects", 0.5);

  const data: any = generateProjectData(selectedProject);
  console.log(selectedProject, data);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading title="My Projects" sub_title="" />
      <button ref={ref} className="" onClick={() => setSelectedProject("mern")}>
        Mearn
      </button>
      <button
        ref={ref}
        className=""
        onClick={() => setSelectedProject("react")}
      >
        react
      </button>
      <div className="grid grid-cols-2 gap-4">
        {data?.map((project: any) => {
          return (
            <div key={project?.title} className="shadow p-4 rounded-lg border">
              <p className="text-2xl text-center">{project.title}</p>
              <div className="projects_img  w-full h-[250px] overflow-hidden cursor-pointer">
                <Image
                  src={project.imageUrl}
                  alt="fdsaf"
                  height={500}
                  width={500}
                  className="object-cover w-full transition-transform ease-out duration-[5000ms] rounded-[1rem]"
                />
              </div>
              <p className="my-4 text-center">{project.title}</p>
              <div className="flex justify-center items-center gap-4">
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>
                <a
                  className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href="https://github.com"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>
              </div>
            </div>
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
