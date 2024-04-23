import React from "react";
import { Text, Img, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="w-full pb-8 sm:pb-5">
        <div>
          <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1267px]">
            <div className="flex flex-col items-end w-[86%] md:w-full">
              <div className="flex sm:flex-col self-stretch justify-between items-start mr-[88px] gap-5">
                <Heading as="h6" className="!text-gray-200">
                  About Thermo Fisher Scientific
                </Heading>
                <div className="flex justify-between w-[24%] sm:w-full gap-5">
                  <a href="#" className="self-end">
                    <Heading as="h6">Company</Heading>
                  </a>
                  <a href="#" className="self-end">
                    <Heading as="h6">Brands</Heading>
                  </a>
                </div>
              </div>
              <a href="#" className="mt-[17px]">
                <Heading as="h6">Thermo Scientific</Heading>
              </a>
              <a href="#" className="mr-[223px]">
                <Heading as="h6">Sustainability</Heading>
              </a>
              <div className="flex md:flex-col self-stretch justify-end items-center mt-0.5">
                <Text as="p" className="w-[73%] md:w-full !text-blue_gray-100 !font-normal leading-[25px]">
                  Thermo Fisher Scientific Inc. (NYSE: TMO) is the world leader in serving science, with annual revenue
                  over $40 billion. Our Mission is to enable our customers to make the world healthier, cleaner and
                  safer. Whether our customers are accelerating life sciences research, solving complex analytical
                  challenges, increasing productivity in their laboratories, improving patient health through
                  diagnostics or the development and manufacture of life-changing therapies, we are here to support
                  them. Our global team delivers an unrivaled combination of innovative technologies, purchasing
                  convenience and pharmaceutical services through our industry-leading brands, including Thermo
                  Scientific, Applied Biosystems, Invitrogen, Fisher Scientific, Unity Lab Services, Patheon and PPD.
                </Text>
                <div className="flex flex-col self-start items-start ml-[124px] gap-[37px]">
                  <a href="#">
                    <Heading as="h6">Investors</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Newsroom</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Careers</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">About</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Contact Us</Heading>
                  </a>
                </div>
                <div className="flex flex-col items-start ml-[91px] gap-9">
                  <a href="#">
                    <Heading as="h6">Applied Biosystems</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Invitrogen</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Fisher Scientific</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Unity Labs Services</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Patheon</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">PPD</Heading>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[8%] md:w-full gap-5">
              <Heading as="h6" className="!text-gray-200">
                Connect
              </Heading>
              <div className="flex flex-col items-start pt-2">
                <div className="flex flex-col w-[69%] md:w-full gap-6">
                  <div className="flex gap-6">
                    <div className="w-[50%]">
                      <div>
                        <div>
                          <Img
                            src="images/img_linkedin_161.svg"
                            alt="linkedin161_one"
                            className="h-[24px] w-full md:w-[24px]"
                          />
                        </div>
                      </div>
                    </div>
                    <Img src="images/img_pajamas_twitter.svg" alt="pajamastwitter" className="h-[24px] w-[24px]" />
                  </div>
                  <div className="flex gap-[30px]">
                    <div className="flex flex-col py-[3px] flex-1">
                      <div>
                        <div>
                          <div className="flex justify-center">
                            <Img src="images/img_youtube_168.svg" alt="youtube168_one" className="h-[16px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img src="images/img_group_11.svg" alt="facebook176_one" className="h-[24px]" />
                  </div>
                  <Img src="images/img_instagram_167.svg" alt="instagram167" className="h-[24px] w-[24px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[20px] mt-4 relative">
            <div className="h-px w-full top-[24%] right-0 left-0 m-auto rounded-tr-[1px] rounded-bl-[1px] rounded-br-[1px] opacity-0.4 bg-gray-800_7e absolute" />
            <Text
              as="p"
              className="w-max ml-[78px] left-[5%] bottom-0 top-0 my-auto !text-blue_gray-100 !font-normal absolute"
            >
              <span className="text-blue_gray-100">For more information, please visit </span>
              <a href="#" className="text-blue_gray-100 underline">
                www.thermofisher.com
              </a>
            </Text>
          </div>
          <div className="flex md:flex-col justify-between items-start w-full mt-[74px] gap-5 mx-auto md:p-5 max-w-[1114px]">
            <Img src="images/img_logo_gray_200.svg" alt="logo_five" className="h-[32px] md:w-full" />
            <div className="flex md:flex-col justify-between w-[78%] md:w-full mt-[5px] gap-5">
              <Text size="xs" as="p" className="self-end !text-gray-200">
                © Copyright 2006-2023 Thermo Fisher Scientific Inc. All rights reserved.
              </Text>
              <a href="#" className="self-start">
                <Text size="xs" as="p" className="!text-gray-200">
                  Terms & Conditions
                </Text>
              </a>
              <a href="#" className="self-end">
                <Text size="xs" as="p" className="!text-gray-200">
                  Privacy Information Center
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
