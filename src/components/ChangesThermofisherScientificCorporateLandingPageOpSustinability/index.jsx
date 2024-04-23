import React from "react";
import { Text, Img, Heading } from "./..";

export default function ChangesThermofisherScientificCorporateLandingPageOpSustinability({
  price = "CORPORATE SOCIAL RESPONSIBILITY",
  description,
  price1,
  readmoreOne = "READ MORE",
  ...props
}) {
  return (
    <div {...props}>
      <Heading size="s" as="h1" className="ml-[92px] !text-teal-700 tracking-[1.80px] uppercase">
        {price}
      </Heading>
      <div className="self-stretch ml-[92px]">
        <div className="flex flex-col gap-12">
          <div className="flex md:flex-col justify-between items-start gap-5">
            <Img src="images/img_national_cancer.png" alt="nationalcancer" className="w-[44%] md:w-full object-cover" />
            <div className="flex flex-col w-[49%] md:w-full gap-[18px]">
              <div className="flex flex-col ml-[7px] gap-[33px]">
                <Text size="5xl" as="p" className="flex w-[85%] md:w-full">
                  <span className="text-gray-900 font-bold">
                    <>
                      As a world leader in science, <br />
                    </>
                  </span>
                  <span className="text-gray-900 font-normal">
                    we have a great responsibility to serve the global community
                  </span>
                </Text>
                <div>
                  <div className="flex md:flex-col justify-between items-start gap-5">
                    <div className="h-[106px] w-[6px] mt-[3px] relative">
                      <div className="justify-center h-full w-[6px] left-0 bottom-0 right-0 top-0 m-auto bg-lime-700 absolute" />
                      <div className="justify-center h-full w-[6px] left-0 bottom-0 right-0 top-0 m-auto bg-teal-100 absolute" />
                    </div>
                    <div className="flex justify-center w-[94%] md:w-full">
                      <div className="flex md:flex-col justify-center items-start w-full">
                        <Text size="lg" as="p" className="flex w-[72%] md:w-full z-[1] !leading-[30px]">
                          <span className="text-gray-900 text-3xl font-medium">
                            <>
                              $ 25 Million <br />
                            </>
                          </span>
                          <span className="text-gray-900 text-2xl">
                            <>
                              Impact investment to support <br />
                              Black businesses and communities.
                            </>
                          </span>
                        </Text>
                        <div className="h-[106px] w-[28%] mt-[3px] ml-[-53px] bg-teal-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2 py-[7px]">
                <Img src="images/img_rectangle_19957.svg" alt="image_three" className="h-[18px] mt-[3px]" />
                <a href="#" className="mb-1">
                  <Text as="p" className="!text-gray-800 tracking-[0.64px]">
                    {readmoreOne}
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-[54px] h-[6px]" />
        </div>
      </div>
    </div>
  );
}
