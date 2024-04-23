import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";
import ThermofisherScientificCorporateCSRCsr from "../../components/ThermofisherScientificCorporateCSRCsr";

export default function ThermofisherScientificCorporateCSRPage() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-[86px] bg-white-A700">
        <header>
          <div className="flex md:flex-col justify-between items-center gap-5 px-6 sm:px-5 bg-white-A700">
            <Img src="images/img_logo.svg" alt="logo_one" className="h-[28px] md:w-full" />
            <div className="flex md:flex-col justify-center items-center mr-3">
              <a href="#">
                <Text />
              </a>
              <Text className="ml-[42px]" />
              <a href="#" className="ml-[31px]">
                <Text />
              </a>
              <a href="#" className="ml-[42px]">
                <Text />
              </a>
              <a href="#" className="ml-[42px]">
                <Text />
              </a>
              <Img src="images/img_search.svg" alt="search_one" className="h-[16px] w-[16px] ml-[50px]" />
              <a
                href="#"
                className="flex justify-center items-center h-[32px] ml-[35px] px-3 py-[7px] bg-gray-500 rounded"
              >
                <Text size="xs" as="p" className="!text-white-A700 text-center">
                  Thermofisher.com
                </Text>
              </a>
            </div>
          </div>
        </header>
        <div>
          <div className="flex flex-col gap-[81px]">
            <div className="flex flex-col w-full gap-5 mx-auto md:p-5 max-w-[1132px]">
              <Text size="6xl" as="p" className="flex !font-helveticaneue">
                <span className="text-gray-900 font-helveticaneueltwg font-normal">
                  Our CSR approach is focused on four key pillars -{" "}
                </span>
                <span className="text-gray-900 font-helveticaneueltwg font-bold">
                  Operations, Colleagues, Communities and Environment.{" "}
                </span>
              </Text>
              <div className="flex w-[32%] md:w-full py-[7px]">
                <Text as="p" className="self-start mb-1 !text-red-A700 tracking-[0.64px]">
                  READ MORE ABOUT OUR CSR APPROACH
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center overflow-auto">
              <div className="w-full">
                <ThermofisherScientificCorporateCSRCsr className="h-[500px] pr-[211px] md:pr-5 relative" />
              </div>
              <div className="self-stretch h-[631px] relative">
                <div className="flex justify-center w-full top-0 right-0 left-0 px-14 py-20 m-auto md:p-5 bg-black-900 absolute">
                  <Text size="xl" as="p" className="w-[93%] mb-[127px] !text-white-A700">
                    As the world leader in serving science, we understand that we have a unique opportunity and
                    responsibility to use our position to make a positive impact on society – not only by enabling our
                    customers’ success, but also through our actions as a Company to make the world a better place. Our
                    CSR approach is focused on four key pillars – Operations, Colleagues, Communities and Environment.
                    This strategic framework allows us to effectively manage ESG priorities that are fundamental to our
                    business, driving competitive differentiation, and creating sustainable value for all our
                    stakeholders.
                  </Text>
                </div>
                <div className="flex justify-center w-[86%] bottom-0 right-0 left-0 p-8 m-auto sm:p-5 bg-deep_purple-500 absolute">
                  <div className="flex flex-col w-full gap-8 mx-auto md:p-5 max-w-[1176px]">
                    <div className="flex md:flex-col justify-between items-start gap-5">
                      <div className="flex md:flex-col justify-center items-center w-[55%] md:w-full mt-[3px] gap-[15px]">
                        <Text size="3xl" as="p" className="flex !text-white-A700">
                          <span className="text-white-A700 font-bold">Corporate Social Responsibility</span>
                          <span className="text-white-A700">&nbsp;</span>
                          <span className="text-white-A700 font-light">Report</span>
                        </Text>
                        <div className="flex justify-center w-[14%] md:w-full pb-1">
                          <div className="flex justify-center items-center gap-2">
                            <Text size="3xl" as="p" className="!text-white-A700">
                              2022
                            </Text>
                            <Img src="images/img_vector.svg" alt="vector_eleven" className="self-end h-[6px]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-center w-[39%] md:w-full gap-4 bg-deep_purple-900">
                        <div className="flex flex-col items-center w-[12%] sm:w-full p-2.5 bg-red-A700">
                          <Img src="images/img_pdf_svgrepo_com.svg" alt="pdfsvgrepocom" className="h-[32px] w-[32px]" />
                        </div>
                        <Text as="p" className="flex self-end !text-white-A700">
                          <span className="text-white-A700">Thermo Fisher Scientific </span>
                          <span className="text-white-A700 font-normal">: CSR Annual Report 2022</span>
                        </Text>
                      </div>
                    </div>
                    <Text size="lg" as="p" className="!text-white-A700 !leading-[30px]">
                      Our Corporate Social Responsibility (CSR) reports are available to provide further detail to our
                      CSR Programs and the progress we make each year. You can download current and previous years
                      reports in PDF format below.
                    </Text>
                  </div>
                </div>
              </div>
              <Heading size="s" as="h1" className="self-start mt-[77px] !text-teal-700 tracking-[1.80px] uppercase">
                Strategic Framework
              </Heading>
              <div className="flex md:flex-col w-full mt-[60px] gap-px mx-auto md:p-5 max-w-[1240px]">
                <div className="flex flex-col w-full gap-[54px] p-8 sm:p-5 bg-white-A700">
                  <Img src="images/img_line_chart_line.svg" alt="linechartline" className="h-[88px] w-[88px]" />
                  <div className="flex flex-col mb-[88px] gap-[27px]">
                    <Text size="lg" as="p" className="!font-medium">
                      Reporting
                    </Text>
                    <Text as="p" className="!font-normal leading-6">
                      In line with our commitment to transparency, we publish an annual CSR Report that outlines our
                      progress consistent with our CSR strategy.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col w-full mb-16 gap-[54px] p-8 sm:p-5 bg-white-A700">
                  <Img src="images/img_test_tubes_svgrepo_com.svg" alt="testtubes_one" className="h-[88px] w-[88px]" />
                  <div className="flex flex-col gap-[27px]">
                    <Text size="lg" as="p" className="!font-medium">
                      Materiality Assessment
                    </Text>
                    <Text as="p" className="!font-normal leading-6">
                      In line with the Company’s growth and evolution, we conducted an initial materiality assessment in
                      2019 through an in-depth process led by an independent third-party advisor.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[54px] p-8 sm:p-5 bg-white-A700">
                  <Img
                    src="images/img_handshake_thin_svgrepo_com.svg"
                    alt="handshakethin"
                    className="h-[88px] w-[88px]"
                  />
                  <div className="flex flex-col mb-[136px] gap-[27px]">
                    <Text size="lg" as="p" className="!font-medium">
                      Stakeholder Engagement
                    </Text>
                    <Text as="p" className="!font-normal leading-6">
                      We are committed to creating sustainable value for all our stakeholders.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[52px] p-8 sm:p-5 bg-white-A700">
                  <Img src="images/img_business_financ.svg" alt="businessfinanc" className="h-[88px] w-[88px]" />
                  <div className="flex flex-col mb-[88px] gap-[29px]">
                    <Text size="lg" as="p" className="!font-medium">
                      Sustainable Finance
                    </Text>
                    <Text as="p" className="!font-normal leading-6">
                      We embed our environmental, social and governance (ESG) priorities within the business to drive
                      ownership and progress toward our commitments.
                    </Text>
                  </div>
                </div>
              </div>
              <Heading size="s" as="h2" className="self-start mt-[340px] !text-teal-700 tracking-[1.80px] uppercase">
                HIGHLIGHTS
              </Heading>
              <div className="w-full mt-[31px] mx-auto md:p-5 max-w-[1240px]">
                <div className="flex md:flex-col gap-[27px]">
                  <div className="flex w-full mb-0.5 pb-6 sm:pb-5">
                    <div className="flex flex-col items-start gap-1.5">
                      <Text size="3xl" as="p" className="flex !text-white-A700">
                        <span className="text-gray-900">$</span>
                        <span className="text-gray-900">1.3 </span>
                        <span className="text-gray-900">billion</span>
                      </Text>
                      <Text as="p" className="!font-normal">
                        In R&D Investment
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-full mb-0.5 pb-6 sm:pb-5">
                    <div className="flex flex-col items-start gap-[7px]">
                      <Text size="3xl" as="p">
                        Net-zero emission
                      </Text>
                      <Text as="p" className="!font-normal">
                        by 2050{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex justify-center w-full">
                    <div className="flex flex-col w-full gap-1.5">
                      <Text size="3xl" as="p">
                        25% reduction
                      </Text>
                      <Text as="p" className="!font-normal leading-6">
                        in absolute scope 1 and 2 emissions since 2018
                      </Text>
                    </div>
                  </div>
                  <div className="flex w-full mb-0.5 pb-6 sm:pb-5">
                    <div className="flex flex-col items-start gap-[7px]">
                      <Text size="3xl" as="p">
                        89.5K students
                      </Text>
                      <Text as="p" className="!font-normal">
                        reached through STEM education
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Heading size="s" as="h3" className="self-start mt-[379px] !text-teal-700 tracking-[1.80px] uppercase">
                DIVERSITY & INCLUSION
              </Heading>
              <div className="h-[396px] w-full mt-[50px] mx-auto md:p-5 relative max-w-[1240px]">
                <div className="h-[396px] w-[84%] right-0 bottom-0 top-0 my-auto absolute">
                  <Img
                    src="images/img_shutterstock_1127680448.png"
                    alt="shutterstock"
                    className="justify-center h-[396px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Img
                    src="images/img_vector_red_a700.png"
                    alt="vector_thirteen"
                    className="h-[396px] w-[8%] right-0 bottom-0 top-0 my-auto object-cover absolute"
                  />
                </div>
                <div className="h-[396px] w-[59%] left-0 bottom-0 top-0 my-auto absolute">
                  <Img
                    src="images/img_vector_red_a700_396x729.svg"
                    alt="vector_fifteen"
                    className="justify-center h-[396px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <Heading
                    size="lg"
                    as="h4"
                    className="w-[74%] h-max ml-[60px] left-[8%] bottom-0 top-0 my-auto absolute"
                  >
                    <span className="text-white-A700">We collectively strive to create an inclusive culture </span>
                    <span className="text-white-A700 font-light">
                      where our colleagues feel they belong and are empowered to contribute, collaborate and innovate.
                    </span>
                  </Heading>
                </div>
              </div>
              <Text size="lg" as="p" className="w-[86%] md:w-full mt-12 !leading-[30px]">
                <>
                  Our commitment to fostering a culture that values diversity and inclusion (D&I) considers gender and
                  ethnicity diversity as well as diversity of backgrounds, experiences and viewpoints. All are equally
                  vital to the colleague experience and the Company’s long- term success.
                  <br />
                  We collectively strive to create an inclusive culture where our colleagues feel they belong and are
                  empowered to contribute, collaborate and innovate. When individual differences are welcomed and
                  supported, we unlock the true value of diversity.
                  <br />
                  <br />
                  Our D&I strategy is embedded in every stage of our colleague experience – from recruiting and hiring
                  to training, development and long-term career planning. Our growing cross- divisional team helps to
                  activate our D&I strategy and goals throughout each of our businesses and corporate functions.
                  <br />.
                </>
              </Text>
              <a href="#" className="self-start mt-[22px]">
                <Text as="p" className="!text-red-A700 tracking-[0.64px]">
                  READ MORE
                </Text>
              </a>
              <Heading size="s" as="h5" className="self-start mt-[90px] !text-teal-700 tracking-[1.80px] uppercase">
                CULTURE
              </Heading>
              <div className="flex md:flex-col justify-between items-center w-full mt-[50px] gap-5 mx-auto md:p-5 max-w-[1240px]">
                <Img
                  src="images/img_shutterstock_2085055825.png"
                  alt="shutterstock"
                  className="w-[48%] md:w-full object-cover"
                />
                <div className="flex flex-col w-[44%] md:w-full pb-[11px] gap-[27px]">
                  <Text size="5xl" as="p" className="flex !font-normal !leading-[56px]">
                    <span className="text-gray-900 font-light">Our culture</span>
                    <span className="text-gray-900">&nbsp;</span>
                    <span className="text-gray-900 font-bold">strengthens our business. </span>
                  </Text>
                  <Text size="lg" as="p" className="flex !leading-[30px]">
                    <span className="text-gray-900">
                      <>
                        We believe that a positive working environment is built on empowerment, trust, continuous
                        improvement and inclusion. <br />
                      </>
                    </span>
                    <span className="text-gray-900">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900">With our</span>
                    <span className="text-red-A700">&nbsp;</span>
                    <span className="text-red-A700">Mission</span>
                    <span className="text-red-A700">, Vision, </span>
                    <span className="text-red-A700">4i values</span>
                    <span className="text-gray-900">and our </span>
                    <span className="text-red-A700">PPI Business System</span>
                    <span className="text-gray-900">
                      as our operational foundation, we encourage our colleagues to help shape and cultivate our culture
                      through participation in programs designed to elevate the colleague experience.
                    </span>
                  </Text>
                  <a href="#">
                    <Text as="p" className="!text-red-A700 tracking-[0.64px]">
                      READ MORE
                    </Text>
                  </a>
                </div>
              </div>
              <Heading size="s" as="h6" className="self-start mt-[77px] !text-teal-700 tracking-[1.80px] uppercase">
                JOIN OUR TEAM
              </Heading>
              <div className="flex md:flex-col self-stretch justify-between items-start mt-[50px] gap-5">
                <div className="flex md:flex-col justify-center items-start w-[48%] md:w-full gap-1">
                  <div className="h-[440px] w-[14%] bg-teal-700" />
                  <div className="flex flex-col gap-[78px] flex-1">
                    <div className="flex flex-col ml-11">
                      <div className="flex flex-col gap-6">
                        <Text size="5xl" as="p" className="flex !font-light !leading-[56px]">
                          <span className="text-gray-900">What you do everyday </span>
                          <span className="text-gray-900 font-bold">will be meaningful.</span>
                        </Text>
                        <Text size="lg" as="p" className="!leading-[30px]">
                          Our team, everyone makes an impact. It starts from within each of us, and when we bring our
                          expertise together, we make a significant difference - to our team, to our customers and to
                          the world.
                        </Text>
                      </div>
                      <div className="flex w-[54px] h-[6px] mt-12" />
                      <div className="flex w-[44%] md:w-full mt-[90px] py-[7px]">
                        <Text as="p" className="self-start mb-1 !text-red-A700 tracking-[0.64px]">
                          EXPLORE OPPORTUNITIES
                        </Text>
                      </div>
                    </div>
                    <Heading size="s" as="h6" className="!text-teal-700 tracking-[1.80px] uppercase">
                      ENVIRONMENT
                    </Heading>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center w-[45%] md:w-full">
                  <Img src="images/img_rectangle_19938.png" alt="image" className="w-[85%] md:w-full object-cover" />
                  <div className="h-[440px] w-[15%] bg-teal-700" />
                </div>
              </div>
              <div className="h-[500px] w-full mt-[50px] mx-auto md:p-5 relative max-w-[1233px]">
                <Img
                  src="images/img_shutterstock_2046698978.png"
                  alt="shutterstock"
                  className="justify-center h-[500px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex md:flex-col items-center w-[66%] h-full left-0 bottom-0 top-0 my-auto absolute">
                  <Img src="images/img_vector_red_a700_396x729.svg" alt="vector" className="h-[500px] md:w-full" />
                  <Text size="5xl" as="p" className="flex self-end w-[69%] md:w-full !text-white-A700">
                    <span className="text-white-A700 font-light">
                      <>
                        Our commitment to the environment <br />
                        is{" "}
                      </>
                    </span>
                    <span className="text-white-A700 font-bold">deeply rooted in our Mission.</span>
                  </Text>
                </div>
                <Img
                  src="images/img_vector_red_a700.png"
                  alt="vector_nineteen"
                  className="h-[500px] w-[12%] right-0 bottom-0 top-0 my-auto object-cover absolute"
                />
              </div>
              <Text size="lg" as="p" className="w-[86%] md:w-full mt-12 !leading-[30px]">
                <>
                  By championing a healthy planet that sustains human health and natural resources, we can build a
                  brighter future for generations to come. Through our culture of continuous improvement, we manage
                  risks, minimize adverse impacts and unlock opportunities through collaborations that help our
                  customers achieve their environmental sustainability goals.
                  <br />
                  <br />
                  We recognize the urgency of addressing our changing climate and understand the power of innovation to
                  create a better world. We innovate to provide our customers with the solutions to develop greener
                  technologies, ensure safe air and water quality, and advance climate research.
                </>
              </Text>
              <div className="flex md:flex-col justify-center w-full mt-12 mx-auto md:p-5 max-w-[1240px]">
                <div className="h-[310px] w-[34%] relative">
                  <Img
                    src="images/img_greener_future_carousel.png"
                    alt="greenerfuture"
                    className="justify-center h-[310px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start justify-center w-full h-full gap-[150px] left-0 bottom-0 right-0 top-0 p-[43px] m-auto md:p-5 bg-red-A700 absolute">
                    <Heading size="md" as="h3" className="ml-1">
                      Climate
                    </Heading>
                    <a href="#" className="mb-[17px] ml-1">
                      <Text as="p" className="!text-white-A700 tracking-[0.64px]">
                        READ MORE
                      </Text>
                    </a>
                  </div>
                </div>
                <Img
                  src="images/img_csr_overview_page_image.png"
                  alt="csroverview_one"
                  className="w-[34%] md:w-full object-cover"
                />
                <Img src="images/img_image_04_1.png" alt="image04one_one" className="w-[32%] md:w-full object-cover" />
              </div>
              <div className="w-full mt-[77px] mx-auto md:p-5 max-w-[1240px]">
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex flex-col w-[48%] md:w-full gap-[50px]">
                    <Heading size="s" as="h6" className="ml-1 !text-teal-700 tracking-[1.80px] uppercase">
                      CORPORATE GOVERNANCE
                    </Heading>
                    <Img
                      src="images/img_shutterstock_2276096075.png"
                      alt="shutterstock"
                      className="h-[320px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col w-[44%] md:w-full gap-6">
                    <Heading size="lg" as="h1" className="!text-gray-900 leading-[56px]">
                      <>
                        Public policy engagement and <br />
                        executive compensation
                      </>
                    </Heading>
                    <Text size="lg" as="p" className="flex !leading-[30px]">
                      <span className="text-gray-900">
                        For policies on our public policy engagement and political participation, as well as ESG-related
                        elements in executive compensation, please refer to our latest{" "}
                      </span>
                      <span className="text-red-A700">proxy statement</span>
                      <span className="text-gray-900">on the </span>
                      <span className="text-red-A700">SEC filings website</span>
                      <span className="text-red-A700">.</span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full mt-12 gap-6 mx-auto md:p-5 max-w-[1240px]">
                <Text size="lg" as="p" className="!font-medium !leading-7">
                  We have long believed that good corporate governance is important to ensure that Thermo Fisher is
                  managed for the long-term benefit of our shareholders and other stakeholders. The company’s success
                  requires a robust corporate governance framework, highlights of which include:
                </Text>
                <Text size="lg" as="p" className="!leading-[30px]">
                  <>
                    Board refreshment, with a focus on building diversity of background and skills
                    <br />
                    Proxy access by shareholders
                    <br />
                    Annual director elections
                    <br />
                    Majority voting policy in uncontested elections, with mandatory resignation policy
                    <br />
                    Board committee oversight of risks associated with corporate responsibility and sustainability
                    efforts
                    <br />
                    Shareholder right to act by written consent
                    <br />
                    Active and robust engagement with shareholders on topics such as our business and financial
                    performance, governance and executive compensation programs, and environmental and social matters
                  </>
                </Text>
              </div>
              <a href="#" className="self-start mt-[31px]">
                <Text as="p" className="!text-red-A700 tracking-[0.64px]">
                  READ MORE
                </Text>
              </a>
            </div>
          </div>
        </div>
        <footer className="pt-9 sm:pt-5 bg-gray-800">
          <div className="w-full">
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
                    Thermo Fisher Scientific Inc. (NYSE: TMO) is the world leader in serving science, with annual
                    revenue over $40 billion. Our Mission is to enable our customers to make the world healthier,
                    cleaner and safer. Whether our customers are accelerating life sciences research, solving complex
                    analytical challenges, increasing productivity in their laboratories, improving patient health
                    through diagnostics or the development and manufacture of life-changing therapies, we are here to
                    support them. Our global team delivers an unrivaled combination of innovative technologies,
                    purchasing convenience and pharmaceutical services through our industry-leading brands, including
                    Thermo Scientific, Applied Biosystems, Invitrogen, Fisher Scientific, Unity Lab Services, Patheon
                    and PPD.
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
            <div className="mt-[42px] pb-8 px-8 sm:pb-5 sm:px-5 border-gray-500 border-t border-solid bg-gray-800">
              <div className="flex md:flex-col self-start justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1114px]">
                <Img src="images/img_logo_gray_200.svg" alt="logo_three" className="self-end h-[32px] md:w-full" />
                <div className="flex md:flex-col justify-between items-center w-[78%] md:w-full mb-2 gap-5">
                  <Text size="xs" as="p" className="self-end !text-gray-200">
                    © Copyright 2006-2023 Thermo Fisher Scientific Inc. All rights reserved.
                  </Text>
                  <ul className="flex flex-col items-start">
                    <li>
                      <a href="#" className="ml-3">
                        <Heading as="h6">Company</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="self-center mt-[37px]">
                        <Heading as="h6">Sustainability</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[37px] ml-3">
                        <Heading as="h6">Investors</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[37px] ml-3">
                        <Heading as="h6">Newsroom</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[37px] ml-3">
                        <Heading as="h6">Careers</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[37px] ml-3">
                        <Heading as="h6">About</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[37px] ml-3">
                        <Heading as="h6">Contact Us</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[182px]">
                        <Text size="xs" as="p" className="!text-gray-200">
                          Terms & Conditions
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start">
                    <li>
                      <a href="#">
                        <Heading as="h6">Brands</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-9">
                        <Heading as="h6">Thermo Scientific</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-9">
                        <Heading as="h6">Applied Biosystems</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-9">
                        <Heading as="h6">Invitrogen</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-9">
                        <Heading as="h6">Fisher Scientific</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-9">
                        <Heading as="h6">Unity Labs Services</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-9">
                        <Heading as="h6">Patheon</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-9">
                        <Heading as="h6">PPD</Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[151px]">
                        <Text size="xs" as="p" className="!text-gray-200">
                          Privacy Information Center
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
