import React from "react";
import { Text, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutFisher({
  thescientific = (
    <>
      The scientific marketplace for choice and <br />
      convenience
    </>
  ),
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col justify-end w-full gap-36 p-[34px] sm:p-5 bg-gray-100_01">
        <Img
          src="images/img_layer_1_light_blue_900_01.svg"
          alt="layerone_one"
          className="h-[40px] mt-[45px] ml-[5px]"
        />
        <Text as="p" className="mb-[15px] ml-[5px] !text-black-900_01 leading-6">
          {thescientific}
        </Text>
      </div>
    </div>
  );
}
