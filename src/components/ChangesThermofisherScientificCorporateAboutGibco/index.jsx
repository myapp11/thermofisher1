import React from "react";
import { Text, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutGibco({
  solutionsfor = "Solutions for the everyday and the extra challenging",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-end w-full gap-[137px] p-10 sm:p-5 bg-gray-100_01">
        <Img src="images/img_vector_light_blue_900.svg" alt="vector_one" className="h-[48px] mt-10" />
        <Text as="p" className="w-[98%] md:w-full mb-2.5 !text-black-900_01 leading-6">
          {solutionsfor}
        </Text>
      </div>
    </div>
  );
}
