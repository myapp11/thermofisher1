import React from "react";
import { Text, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutThermo({
  acommitmentto = "A commitment to analytical precision",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center w-full gap-[106px] p-[39px] sm:p-5 bg-gray-100_01">
        <Img src="images/img_thermo_scientific.svg" alt="image" className="h-[79px] mt-10" />
        <Text as="p" className="mb-[37px] !text-black-900_01">
          {acommitmentto}
        </Text>
      </div>
    </div>
  );
}
