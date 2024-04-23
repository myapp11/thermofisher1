import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Slider, Button } from "../../components";
import ChangesThermofisherScientificCorporateAboutApplied from "../../components/ChangesThermofisherScientificCorporateAboutApplied";
import ChangesThermofisherScientificCorporateAboutFisher from "../../components/ChangesThermofisherScientificCorporateAboutFisher";
import ChangesThermofisherScientificCorporateAboutGibco from "../../components/ChangesThermofisherScientificCorporateAboutGibco";
import ChangesThermofisherScientificCorporateAboutInvitrogen from "../../components/ChangesThermofisherScientificCorporateAboutInvitrogen";
import ChangesThermofisherScientificCorporateAboutLeader from "../../components/ChangesThermofisherScientificCorporateAboutLeader";
import ChangesThermofisherScientificCorporateAboutPatheon from "../../components/ChangesThermofisherScientificCorporateAboutPatheon";
import ChangesThermofisherScientificCorporateAboutPpd from "../../components/ChangesThermofisherScientificCorporateAboutPpd";
import ChangesThermofisherScientificCorporateAboutThermo from "../../components/ChangesThermofisherScientificCorporateAboutThermo";
import ChangesThermofisherScientificCorporateAboutTopnav from "../../components/ChangesThermofisherScientificCorporateAboutTopnav";
import ChangesThermofisherScientificCorporateAboutUnitylab from "../../components/ChangesThermofisherScientificCorporateAboutUnitylab";
import ChangesThermofisherScientificCorporateLandingPageOpB2 from "../../components/ChangesThermofisherScientificCorporateLandingPageOpB2";
import Footer from "../../components/Footer";
import ThermofisherScientificCorporateLandingPageCFourOurstories from "../../components/ThermofisherScientificCorporateLandingPageCFourOurstories";

export default function ChangesThermofisherScientificCorporateAboutPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-[33px] bg-white-A700">
        <header className="flex flex-col items-center justify-center gap-[26px]">
          <div className="self-stretch">
            <ChangesThermofisherScientificCorporateAboutTopnav />
          </div>
          <a href="#" className="ml-[99px]">
            <Heading size="s" as="h6" className="!text-teal-700 tracking-[1.80px] uppercase">
              ABOUT
            </Heading>
          </a>
        </header>
        <div>
          <div className="h-[396px] relative">
            <div className="justify-center h-[396px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img
                src="images/img_pexels_edward_jenner_4031321_396x1440.png"
                alt="pexelsedward"
                className="justify-center h-[396px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <Img
                src="images/img_rectangle_19900.png"
                alt="image"
                className="h-[396px] w-[61%] right-0 bottom-0 top-0 my-auto object-cover absolute"
              />
            </div>
            <div className="h-[396px] w-[48%] left-0 bottom-0 top-0 my-auto absolute">
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
          </div>
          <div className="mt-[37px]">
            <div className="flex flex-col items-center gap-[49px]">
              <Heading size="s" as="h1" className="self-start !text-teal-700 tracking-[1.80px] uppercase">
                OUR MISSION
              </Heading>
              <div className="h-[601px] w-full mx-auto md:p-5 relative max-w-[1259px]">
                <div className="h-[147px] w-[10%] bottom-0 left-0 m-auto bg-white-A700 absolute" />
                <div className="flex md:flex-col justify-between items-center w-[98%] top-0 right-0 left-0 gap-5 m-auto absolute">
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
                          community and to help researchers, organizations, and companies solve some of the world’s most
                          pressing issues. We do that by providing cutting-edge technologies and services that are the
                          result of our significant investment in research and development.
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
              <div className="self-stretch">
                <div className="flex flex-col justify-center gap-[50px] p-[45px] md:p-5 bg-gray-200">
                  <Heading size="s" as="h2" className="ml-[54px] !text-teal-700 tracking-[1.80px] uppercase">
                    Our Stories
                  </Heading>
                  <div className="w-full mb-0.5 mx-auto md:p-5 max-w-[1192px]">
                    <div className="flex flex-col">
                      <div className="w-full">
                        <Slider
                          autoPlay
                          autoPlayInterval={2000}
                          responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
                          renderDotsItem={(props) => {
                            return props?.isActive ? (
                              <div className="w-[18px] h-[6px] mr-1.5 bg-red-A700" />
                            ) : (
                              <div className="h-[6px] w-[6px] mr-1.5 bg-gray_600_75" />
                            );
                          }}
                          activeIndex={sliderState}
                          onSlideChanged={(e) => {
                            setSliderState(e?.item);
                          }}
                          ref={sliderRef}
                          className="z-[1]"
                          items={[...Array(3)].map(() => (
                            <React.Fragment key={Math.random()}>
                              <ThermofisherScientificCorporateLandingPageCFourOurstories className="flex justify-center items-center mx-auto bg-gray-100" />
                            </React.Fragment>
                          ))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-[77px]">
            <Heading size="s" as="h2" className="ml-[100px] !text-teal-700 tracking-[1.80px] uppercase">
              LEADERSHIP
            </Heading>
            <div className="mt-[27px]">
              <div className="pl-[100px] pr-14 md:px-5 bg-teal-700">
                <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1190px]">
                  <div className="h-[408px] w-[46%] relative">
                    <div className="flex sm:flex-col justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <Img src="images/img_marc_2.png" alt="marctwo_one" className="w-[25%] sm:w-full object-cover" />
                      <Img src="images/img_marc_1.png" alt="marcone_one" className="w-[408px] object-cover" />
                    </div>
                    <div className="flex justify-center w-[91%] bottom-[6%] right-0 left-0 m-auto absolute">
                      <div className="flex w-full p-4 bg-indigo-900 rounded">
                        <Text size="md" as="p" className="w-[92%] !text-white-A700">
                          <>
                            Marc Casper
                            <br />
                            Chairman, President & CEO, Thermo Fisher Scientific
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[46%] md:w-full">
                    <Heading size="s" as="h3" className="!text-gray-100_01 tracking-[1.80px] uppercase">
                      MESSAGE FROM CEO
                    </Heading>
                    <Text size="2xl" as="p" className="mt-[50px] !text-white-A700 italic">
                      “ The reason we responded so quickly to the pandemic was the amazing team we have. 90,000
                      colleagues around the world dedicated to our customers’ success.”
                    </Text>
                    <div className="flex w-[44%] md:w-full mt-8 p-[7px]">
                      <Text as="p" className="self-start mb-1 !text-white-A700 tracking-[0.64px]">
                        READ COMPLETE LETTER
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-[53px] gap-[53px] mx-auto md:p-5 max-w-[1241px]">
              <Text size="4xl" as="p" className="flex !text-indigo-900">
                <span className="text-indigo-900">O</span>
                <span className="text-indigo-900">ur </span>
                <span className="text-indigo-900 font-bold">leadership team</span>
              </Text>
              <div className="gap-10 grid-cols-4 md:grid-cols-[1fr] grid">
                <ChangesThermofisherScientificCorporateAboutLeader className="flex flex-col w-full" />
                <ChangesThermofisherScientificCorporateAboutLeader
                  lisaPbrittOne="images/img_rectangle_19930_347x280.png"
                  markncasper="Aditya Joshi"
                  chairman="Vice President & Chief Strategy Officer"
                  className="flex flex-col w-full"
                />
                <ChangesThermofisherScientificCorporateAboutLeader
                  lisaPbrittOne="images/img_rectangle_19930_1.png"
                  markncasper="Michel Lagarde"
                  chairman="Executive Vice President & Chief Operating Officer"
                  className="flex flex-col w-full"
                />
                <ChangesThermofisherScientificCorporateAboutLeader
                  lisaPbrittOne="images/img_rectangle_19930_2.png"
                  markncasper="Karen E. Nelson"
                  chairman="Chief Scientific Officer"
                  className="flex flex-col w-full"
                />
                <ChangesThermofisherScientificCorporateAboutLeader
                  lisaPbrittOne="images/img_rectangle_19930_3.png"
                  markncasper="Sandy Pound"
                  chairman="Vice President & Chief Communications Officer"
                  className="flex flex-col w-full"
                />
                <ChangesThermofisherScientificCorporateAboutLeader
                  lisaPbrittOne="images/img_rectangle_19930_4.png"
                  markncasper="Alan Sachs"
                  chairman="Chief Medical Officer"
                  className="flex flex-col w-full"
                />
                <ChangesThermofisherScientificCorporateAboutLeader
                  lisaPbrittOne="images/img_rectangle_19930_5.png"
                  markncasper="Ryan Snyder"
                  chairman="Senior Vice President & Chief Information Officer"
                  className="flex flex-col w-full"
                />
                <ChangesThermofisherScientificCorporateAboutLeader
                  lisaPbrittOne="images/img_rectangle_19930_6.png"
                  markncasper="Stephen Williamson"
                  chairman="Senior Vice President & Chief Financial Officer"
                  className="flex flex-col w-full"
                />
              </div>
            </div>
            <ChangesThermofisherScientificCorporateLandingPageOpB2
              readmore="Full Leadership List"
              imageOne="images/img_rectangle_19957.svg"
              className="flex items-center w-[18%] md:w-full mt-12 ml-[92px] py-[7px]"
            />
          </div>
          <div className="flex flex-col mt-[77px] gap-10">
            <div className="flex flex-col gap-[50px]">
              <Heading size="s" as="h2" className="ml-[99px] !text-teal-700 tracking-[1.80px] uppercase">
                OUR BRANDS
              </Heading>
              <div>
                <div className="flex md:flex-col">
                  <div className="h-[216px] w-[31%] relative">
                    <Img
                      src="images/img_vector_red_a700_216x445.svg"
                      alt="vector_three"
                      className="justify-center h-[216px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <Img
                      src="images/img_logo_white_a700.svg"
                      alt="logo_three"
                      className="h-[42px] ml-[99px] left-[22%] bottom-0 top-0 my-auto absolute"
                    />
                  </div>
                  <div className="flex p-12 md:p-5 bg-red-900 flex-1">
                    <Text size="lg" as="p" className="w-[94%] !text-white-A700 !leading-[30px]">
                      Whether they are improving life for patients, protecting our global climate or keeping people
                      safe, our customers look to Thermo Fisher Scientific for innovative solutions. Products and
                      services sold under the following Thermo Fisher brands enable customers to push science and
                      technology a step beyond.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center w-full gap-[45px] grid-cols-3 mx-auto md:grid-cols-[1fr] md:p-5 grid max-w-[1240px]">
              <ChangesThermofisherScientificCorporateAboutThermo className="flex items-center w-full" />
              <ChangesThermofisherScientificCorporateAboutApplied className="flex justify-center items-center w-full" />
              <ChangesThermofisherScientificCorporateAboutInvitrogen className="flex justify-end items-center w-full" />
              <ChangesThermofisherScientificCorporateAboutFisher className="flex items-center w-full" />
              <ChangesThermofisherScientificCorporateAboutUnitylab className="flex justify-center items-center w-full" />
              <ChangesThermofisherScientificCorporateAboutPatheon className="flex justify-center items-center w-full" />
              <ChangesThermofisherScientificCorporateAboutPpd className="flex items-center w-full" />
              <ChangesThermofisherScientificCorporateAboutGibco className="flex justify-center items-center w-full" />
            </div>
          </div>
        </div>
        <Footer className="pt-9 sm:pt-5 bg-gray-800" />
      </div>
    </>
  );
}
