import React from "react";
import { Text, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutApplied({
  thepathto = "The path to genomic discoveries",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center w-full gap-[110px] p-10 sm:p-5 bg-gray-100_01">
        <Img src="images/img_applied_biosystems.svg" alt="applied_one" className="h-[75px] mt-10" />
        <Text as="p" className="mb-[37px] !text-black-900_01">
          {thepathto}
        </Text>
      </div>
    </div>
  );
}
