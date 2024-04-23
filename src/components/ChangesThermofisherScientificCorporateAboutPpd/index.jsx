import React from "react";
import { Text, Img } from "./..";

export default function ChangesThermofisherScientificCorporateAboutPpd({
  helpingdeliver = "Helping deliver life-changing therapies",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center w-full gap-[143px] p-10 sm:p-5 bg-gray-100_01">
        <Img src="images/img_union.svg" alt="union_one" className="h-[42px] mt-10" />
        <Text as="p" className="mb-[37px] !text-black-900_01">
          {helpingdeliver}
        </Text>
      </div>
    </div>
  );
}
