"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BsArrowBarDown } from "react-icons/bs";
import { CgArrowDown } from "react-icons/cg";

export default function SectionDivider() {
  return (
    <motion.div
      className=" animate-bounce  my-24 h-16 w-16 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <CgArrowDown className="border  border-black dark:border-white h-6 w-6 rounded-full" />
    </motion.div>
  );
}
