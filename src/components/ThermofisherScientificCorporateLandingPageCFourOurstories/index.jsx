import React from "react";
import { Text, Img } from "./..";

export default function ThermofisherScientificCorporateLandingPageCFourOurstories({
  ifyassociate,
  developing = "Developing scientific breakthroughs as part of the Graduate Leadership Development Program.",
  myworkisa,
  bornalmost = "Born almost three months premature, I grew up passionate about healthcare and cutting-edge technologies to create better health outcomes. My attraction to Thermo Fisher Scientific was simple: the chance to make a positive impact through problem solving.",
  readmore = "Read full story",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col w-full gap-6">
        <div className="flex md:flex-col justify-between items-start gap-5">
          <div className="flex sm:flex-col justify-center w-[49%] md:w-full gap-2">
            <div className="flex-1">
              <div>
                <div>
                  <div className="h-[367px] relative">
                    <Img
                      src="images/img_shutterstock_413063374_367x516.png"
                      alt="shutterstock"
                      className="justify-center h-[367px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <div className="flex flex-col justify-center w-full h-full gap-[19px] left-0 bottom-0 right-0 top-0 p-6 m-auto sm:p-5 bg-indigo-900 absolute">
                      <Text as="p" className="flex mt-[231px] ml-1.5 !text-white-A700">
                        <span className="text-white-A700 font-bold">Ify</span>
                        <span className="text-white-A700">&nbsp;</span>
                        <span className="text-white-A700 font-light">
                          | Associate, Graduate Leadership Development Program
                        </span>
                      </Text>
                      <Text as="p" className="ml-1.5 !text-white-A700 leading-6">
                        {developing}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[367px] w-[4%] bg-indigo-900" />
            <div className="h-[367px] w-[3%] opacity-0.8 bg-indigo-900_a2" />
            <div className="h-[367px] w-[8px] opacity-0.5 bg-indigo-900_87" />
          </div>
          <div className="flex flex-col w-[46%] md:w-full gap-4">
            <Text size="5xl" as="p" className="flex !font-normal !leading-[56px]">
              <span className="text-gray-900">My work is a story of </span>
              <span className="text-gray-900 font-bold">
                <>
                  problem <br />
                  solving.
                </>
              </span>
            </Text>
            <Text size="lg" as="p" className="!leading-[30px]">
              {bornalmost}
            </Text>
            <div className="flex items-center gap-2 py-2">
              <Img src="images/img_rectangle_19957.svg" alt="image" className="h-[18px]" />
              <Text as="p" className="self-start !text-gray-800 tracking-[0.64px]">
                {readmore}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex w-[54px] h-[6px]" />
      </div>
    </div>
  );
}
