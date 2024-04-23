import React from "react";
import { Img } from "./..";

export default function ThermofisherScientificCorporateCSRCsr({ ...props }) {
  return (
    <div {...props}>
      <div className="flex md:flex-col justify-center w-max h-full left-0 bottom-0 right-0 top-0 m-auto overflow-auto absolute">
        <div className="flex md:flex-col justify-center w-[50%] md:w-full z-[1]">
          <Img src="images/img_vector_red_600.png" alt="vector_one" className="w-[47%] md:w-full object-cover" />
          <Img
            src="images/img_vector_500x587.png"
            alt="vector_three"
            className="w-[53%] md:w-full ml-[-293px] object-cover"
          />
        </div>
        <div className="flex md:flex-col justify-center w-[63%] md:w-full ml-[-165px]">
          <Img src="images/img_vector_1.png" alt="vector_five" className="w-[50%] md:w-full object-cover" />
          <Img
            src="images/img_vector_2.png"
            alt="vector_seven"
            className="w-[50%] md:w-full ml-[-163px] object-cover"
          />
        </div>
      </div>
      <Img
        src="images/img_vector_500x390.png"
        alt="vector_nine"
        className="h-[500px] w-[27%] left-0 bottom-0 top-0 my-auto object-cover absolute"
      />
    </div>
  );
}
