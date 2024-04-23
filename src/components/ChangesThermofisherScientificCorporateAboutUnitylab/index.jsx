import React from "react";
import { Text, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutUnitylab({
  thelaboratory = (
    <>
      The laboratory service and support <br />
      solution
    </>
  ),
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-end w-full gap-[111px] p-10 sm:p-5 bg-gray-100_01">
        <Img src="images/img_layer_1_gray_700_02.svg" alt="layerone_one" className="h-[73px] mt-10" />
        <Text as="p" className="w-[87%] md:w-full mb-2.5 !text-black-900_01 leading-6">
          {thelaboratory}
        </Text>
      </div>
    </div>
  );
}
