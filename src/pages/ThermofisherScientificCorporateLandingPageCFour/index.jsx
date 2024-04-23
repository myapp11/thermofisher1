import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button } from "../../components";
import ThermofisherScientificCorporateLandingPageCFourOurstories from "../../components/ThermofisherScientificCorporateLandingPageCFourOurstories";

export default function ThermofisherScientificCorporateLandingPageCFourPage() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full overflow-auto bg-white-A700">
        <div className="self-end">
          <div className="flex flex-col gap-[30px]">
            <header>
              <div>
                <div className="flex md:flex-col justify-center">
                  <Img
                    src="images/img_thermo_fisher_scientific.png"
                    alt="thermofisher"
                    className="w-[11%] md:w-full z-[1] object-cover"
                  />
                  <div className="flex md:flex-col justify-between items-center ml-[-173px] gap-5 px-6 sm:px-5 bg-white-A700 flex-1">
                    <Img src="images/img_logo.svg" alt="logo_one" className="h-[28px] md:w-full" />
                    <div className="flex md:flex-col justify-center items-center mr-[11px]">
                      <a href="#">
                        <Text />
                      </a>
                      <Text className="ml-10" />
                      <Text className="ml-[42px]" />
                      <Text className="ml-[42px]" />
                      <Text className="ml-[42px]" />
                      <Img src="images/img_search.svg" alt="search_one" className="h-[16px] w-[16px] ml-[50px]" />
                      <Button size="xs" shape="round" className="ml-[35px] min-w-[137px]">
                        Thermofisher.com
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <Heading size="s" as="h1" className="ml-[100px] !text-teal-700 tracking-[1.80px] uppercase">
              ABOUT
            </Heading>
            <div className="h-[396px] relative">
              <div className="flex md:flex-col justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="h-[396px] w-[33%] z-[1] relative">
                  <Img
                    src="images/img_vector_red_a700_396x696.png"
                    alt="vector_one"
                    className="justify-center h-[396px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex w-[32%] h-max ml-[196px] left-[28%] bottom-0 top-0 my-auto absolute">
                    <div className="flex items-start gap-2.5">
                      <Button color="gray_900" shape="circle" className="w-[40px]">
                        <Img src="images/img_component_10.svg" />
                      </Button>
                      <Text size="xs" as="p" className="mt-[9px] !text-white-A700 !font-medium">
                        Watch this video
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_pexels_edward_jenner_4031321.png"
                  alt="pexelsedward"
                  className="w-[67%] md:w-full ml-[-695px] object-cover"
                />
              </div>
              <Img
                src="images/img_rectangle_19900.png"
                alt="image"
                className="h-[396px] w-[61%] right-0 bottom-0 top-0 my-auto object-cover absolute"
              />
            </div>
            <footer>
              <div className="flex flex-col w-full gap-20">
                <div className="flex flex-col w-full gap-[50px] mx-auto md:p-5 max-w-[1240px]">
                  <Heading size="s" as="h6" className="!text-teal-700 tracking-[1.80px] uppercase">
                    OUR MISSION
                  </Heading>
                  <div className="flex md:flex-col justify-between items-center gap-5">
                    <div className="w-[44%] md:w-full">
                      <Text size="lg" as="p" className="flex !font-medium !leading-7">
                        <span className="text-red-900">
                          <>
                            Everything we do starts with our Mission
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 text-[38px] font-normal">
                          To enable our customers to make the world{" "}
                        </span>
                        <span className="text-gray-900 text-[38px] font-bold">
                          <>
                            healthier, cleaner, and safer.
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900">
                          <>
                            <br />
                            The nature of our business is to enable growth and innovation within the global scientific
                            community and to help researchers, organizations, and companies solve some of the world’s
                            most pressing issues. We do that by providing cutting-edge technologies and services that
                            are the result of our significant investment in research and development.
                            <br />
                            <br />
                          </>
                        </span>
                        <span className="text-gray-900 font-normal">
                          We believe creating a better tomorrow starts with the action we take today, and we continually
                          strive toward improvement and excellence for the benefit of our customers, our colleagues, and
                          the world.
                        </span>
                      </Text>
                    </div>
                    <Img
                      src="images/img_pexels_mikhail_nilov_8851730.png"
                      alt="pexelsmikhail"
                      className="w-[48%] md:w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-12 p-12 md:p-5 bg-gray-200">
                    <Heading size="s" as="h6" className="ml-[52px] !text-teal-700 tracking-[1.80px] uppercase">
                      Our Stories
                    </Heading>
                    <div className="w-full mx-auto md:p-5 max-w-[1192px]">
                      <div>
                        <div>
                          <div className="flex flex-col">
                            <ThermofisherScientificCorporateLandingPageCFourOurstories className="flex flex-col gap-6 z-[1] bg-gray-100" />
                            <div className="flex w-[54px] h-[6px] mt-[-6px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
