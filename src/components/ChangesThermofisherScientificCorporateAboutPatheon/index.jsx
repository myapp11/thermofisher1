import React from "react";
import { Text, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutPatheon({
  endtoend = "End-to-end pharma services solutions",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center w-full gap-[139px] p-10 sm:p-5 bg-gray-100_01">
        <Img src="images/img_layer_1_black_900_01.svg" alt="layerone_one" className="h-[46px] mt-10" />
        <Text as="p" className="mb-[37px] !text-black-900_01">
          {endtoend}
        </Text>
      </div>
    </div>
  );
}
