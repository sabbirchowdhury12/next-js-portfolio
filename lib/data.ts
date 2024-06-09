import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaFacebookMessenger } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbLocationFilled } from "react-icons/tb";
import { BsCalendar3EventFill } from "react-icons/bs";
import { GrFlagFill } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import img1 from "@/public/auto-x.png";
import img2 from "@/public/Go-trip.png";
import img3 from "@/public/chat.png";
import img4 from "@/public/phone.png";
import img5 from "@/public/tour.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
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
      "Through this course, I've cultivated a robust foundation in web development, mastering HTML, CSS, and JavaScript. I specialize in building dynamic, responsive web applications with React.js and server-side development using Express.js, and MongoDB for databases.  ",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Development Course Level 2",
    location: "Programming Hero",
    description:
      "Completed coursework in full-stack development, learning to build fast React apps with Next.js and manage state with Redux Toolkit. Used Mongoose to work with MongoDB and Prisma for database management. Gained skills in designing and querying databases with PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "BSS (Hons)",
    location: "Govt. Debendro College",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - present",
  },
  {
    title: "Youtube - Online Course",
    location: "Online",
    description: "",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Auto-X (Car-Rental)",
    imgUrl: img1,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client: "https://github.com/sabbirchowdhury12/nextjs-auto-X-frontend",
    server: "https://github.com/sabbirchowdhury12/auto-X-backend",
    live: "https://autox-frontend.vercel.app",
    name: "Auto-X ",
  },
  {
    id: 2,
    title: "GoTrip (Service Provider Website)",
    imgUrl: img2,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client:
      "https://github.com/sabbirchowdhury12/full-stack-tourist-service-frontend",
    server:
      "https://github.com/sabbirchowdhury12/full-stack-tourist-service-backend",
    live: "https://full-stack-tourist-service-frontend.vercel.app",
    name: "GoTrip",
  },
  {
    id: 3,
    title: "Chat App",
    imgUrl: img3,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client:
      "https://github.com/sabbirchowdhury12/mern-stack-chat-application-client-side",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-chat-application-server-side",
    live: "https://mern-stack-chat-app.netlify.app",
    name: "Chat Application",
  },
  {
    id: 4,
    title: "Resale Phone",
    imgUrl: img4,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client:
      "https://github.com/sabbirchowdhury12/sabbirchowdhury12-mern-stack-repair-resale-phone-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-Repair-Resale-Phone-server",
    live: "https://resale-repair-phone.web.app/",
    name: "Resale and Buy Phone",
  },
  {
    id: 5,
    title: "Tour Website",
    imgUrl: img5,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-server",
    live: "https://world-tourist-website.web.app/",
    name: "Tour Website",
  },
] as const;
export const projectsData2 = [
  {
    id: 3,
    title: "Chat App",
    imgUrl: img3,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client:
      "https://github.com/sabbirchowdhury12/mern-stack-chat-application-client-side",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-chat-application-server-side",
    live: "https://mern-stack-chat-app.netlify.app",
    name: "Chat Application",
  },
  {
    id: 4,
    title: "Resale Phone",
    imgUrl: img4,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client:
      "https://github.com/sabbirchowdhury12/sabbirchowdhury12-mern-stack-repair-resale-phone-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-Repair-Resale-Phone-server",
    live: "https://resale-repair-phone.web.app/",
    name: "Resale and Buy Phone",
  },
  {
    id: 1,
    title: "Auto-X (Car-Rental)",
    imgUrl: img1,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client: "https://github.com/sabbirchowdhury12/nextjs-auto-X-frontend",
    server: "https://github.com/sabbirchowdhury12/auto-X-backend",
    live: "https://autox-frontend.vercel.app",
    name: "Auto-X ",
  },
  {
    id: 2,
    title: "GoTrip (Service Provider Website)",
    imgUrl: img2,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client:
      "https://github.com/sabbirchowdhury12/full-stack-tourist-service-frontend",
    server:
      "https://github.com/sabbirchowdhury12/full-stack-tourist-service-backend",
    live: "https://full-stack-tourist-service-frontend.vercel.app",
    name: "GoTrip",
  },

  {
    id: 5,
    title: "Tour Website",
    imgUrl: img5,
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    client:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-client",
    server:
      "https://github.com/sabbirchowdhury12/mern-stack-tourist-service-website-server",
    live: "https://world-tourist-website.web.app/",
    name: "Tour Website",
  },
] as const;
// export const reactProjectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const generateProjectData = (name: string) => {
  if (name == "full-stack") return projectsData;
  if (name == "css") return projectsData2;
};

export const frontendSkillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Next.js",
  "BOOTSTRAP",
  "MUI",
  "STYLED-COMPonts",
  "SHADCN",
  "Tailwind",
  "Redux",
  "Git",
] as const;
export const backendSkillsData = [
  "TypeScript",
  "Node.js",
  "NEST JS",
  "Prisma",
  "MongoDB",
  "Mongoose",
  "FIRBASE",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "NODEMAILER",
  "jwt",
] as const;

export const contactCards = [
  {
    icon: React.createElement(MdEmail),
    title: "Email",
    describe: "sabbirchowdhury40854@gmail.com",
    link: "mailto:sabbirchowdhury40854@gmail.com",
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
