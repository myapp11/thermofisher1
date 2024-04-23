import React from "react";
import { Text, Heading, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutLeader({
  lisaPbrittOne = "images/img_rectangle_19930.png",
  markncasper = "Lisa P. Britt",
  chairman = "Senior Vice President & Chief Human Resources Officer",
  ...props
}) {
  return (
    <div {...props}>
      <div className="self-stretch">
        <Img src={lisaPbrittOne} alt="lisa_pbritt_one" className="h-[347px] w-full object-cover" />
        <div className="flex flex-col mt-[-38px] gap-1 p-[15px] bg-teal-700">
          <Heading as="h1">{markncasper}</Heading>
          <Text size="xs" as="p" className="!text-white-A700 !leading-[22px]">
            {chairman}
          </Text>
        </div>
      </div>
    </div>
  );
}
