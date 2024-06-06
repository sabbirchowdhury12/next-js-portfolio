import React from "react";

type SectionHeadingProps = {
  title: string;
  sub_title: string;
};

export default function SectionHeading({
  title,
  sub_title,
}: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl  font-bold uppercase mb-2  text-center">
        {title}
      </h2>
      <h2 className="text-xl  font-bold uppercase mb-8 text-center">
        {sub_title}
      </h2>
    </div>
  );
}