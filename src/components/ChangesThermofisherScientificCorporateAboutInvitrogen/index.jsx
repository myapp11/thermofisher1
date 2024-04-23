import React from "react";
import { Text, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutInvitrogen({
  accelerating = "Accelerating discovery research",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center w-full gap-[137px] p-[39px] sm:p-5 bg-gray-100_01">
        <Img src="images/img_layer_1.svg" alt="layerone_one" className="h-[48px] mt-10" />
        <Text as="p" className="mb-[37px] !text-black-900_01">
          {accelerating}
        </Text>
      </div>
    </div>
  );
}
