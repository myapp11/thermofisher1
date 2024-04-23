import React from "react";
import { Button, Img, Text } from "./..";

export default function ChangesThermofisherScientificCorporateAboutTopnav({
  navmenuOne,
  navmenuThree,
  navmenuFive,
  navmenuSeven,
  navmenuNine,
  thermofishercom = "Thermofisher.com",
  ...props
}) {
  return (
    <div {...props}>
      <div className="w-full bg-white-A700">
        <div className="flex md:flex-col justify-between w-full gap-5 mx-auto md:p-5 max-w-[1404px]">
          <div className="h-[80px] w-[12%] relative">
            <Img
              src="images/img_logo.svg"
              alt="logo_one"
              className="justify-center h-[28px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
            <Img
              src="images/img_thermo_fisher_scientific.png"
              alt="thermofisher"
              className="justify-center h-[80px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
          </div>
          <div className="flex md:flex-col justify-center items-center">
            <a href="#">
              <Text>{navmenuOne}</Text>
            </a>
            <a href="#" className="ml-10">
              <Text>{navmenuThree}</Text>
            </a>
            <a href="#" className="ml-[42px]">
              <Text>{navmenuFive}</Text>
            </a>
            <a href="#" className="ml-[42px]">
              <Text>{navmenuSeven}</Text>
            </a>
            <a href="#" className="ml-[42px]">
              <Text>{navmenuNine}</Text>
            </a>
            <Img src="images/img_search.svg" alt="search_one" className="h-[16px] w-[16px] ml-[50px]" />
            <Button size="xs" shape="round" className="ml-[35px] min-w-[137px]">
              {thermofishercom}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
