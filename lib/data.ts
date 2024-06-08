import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaFacebookMessenger } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbLocationFilled } from "react-icons/tb";
import { BsCalendar3EventFill } from "react-icons/bs";
import { GrFlagFill } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const aboutCards = [
  {
    icon: React.createElement(GrFlagFill),
    title: "Nationality",
    describe: "Bangladeshi",
  },
  {
    icon: React.createElement(TbLocationFilled),
    title: "Address",
    describe: "Manikganj, Dhaka",
  },
  {
    icon: React.createElement(BsCalendar3EventFill),
    title: "Support",
    describe: "24/7 -- online",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Development Course",
    location: "Programming Hero",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Development Course Level 2",
    location: "Programming Hero",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "BSS (Hons)",
    location: "Govt. Debendro College",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - present",
  },
  {
    title: "Youtube - Online Course",
    location: "Online",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const contactCards = [
  {
    icon: React.createElement(MdEmail),
    title: "Email",
    describe: "sabbirchowdhury40854@gmail.com",
  },
  {
    icon: React.createElement(FaSquareWhatsapp),
    title: "Whatsapp",
    describe: "+8801989969238",
  },
  {
    icon: React.createElement(FaFacebookMessenger),
    title: "Messenger",
    describe: "Sabbir Chowdhury",
  },
] as const;
