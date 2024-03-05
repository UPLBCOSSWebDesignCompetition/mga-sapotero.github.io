import React from "react";
import { Helmet } from "react-helmet";
import { Input, Text, Heading, Img } from "../../components";

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>SDG Web Design Landing Page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full py-5 bg-black-900">
          <div className="flex flex-col items-center justify-start w-full mb-[148px] gap-[156px]">
            <header className="flex flex-row justify-between items-center w-[98%]">
              <div className="flex flex-row justify-center items-center w-[22%]">
                <Img src="images/img_headericon_1.png" alt="headericonone" className="w-[35%] object-cover" />
                <Heading size="s" as="h6" className="w-[66%] uppercase !font-extrabold">
                  SUSTAINABLE <br />
                  DEVELOPMENT GOALS
                </Heading>
              </div>
              <div className="flex flex-row justify-between items-center w-auto">
                <Heading size="s" as="h6" className="uppercase">
                  OVERVIEW
                </Heading>
                <Heading size="s" as="h6" className="uppercase">
                  MISSION
                </Heading>
                <Heading size="s" as="h6" className="uppercase">
                  ACTION
                </Heading>
                <Img src="images/img_icon.svg" alt="icon_one" className="h-[24px] w-[24px]" />
              </div>
            </header>
            <div className="h-[1371px] w-full relative">
              <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Img
                  src="images/img_untitled_design.png"
                  alt="untitleddesign"
                  className="w-[47%] mr-[46px] z-[1] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-full mt-[-61px]">
                  <div className="flex flex-col items-center justify-start w-[14%] ml-[494px] gap-[413px]">
                    <Heading size="xs" as="h1" className="!text-black-900 text-center">
                      Subscribe to Newsletter
                    </Heading>
                    <div className="h-[60px] w-full bg-teal-A400 rounded-[5px]" />
                  </div>
                  <div className="flex flex-row justify-center w-full mt-[-335px] px-14 py-[71px] bg-black-900">
                    <div className="flex flex-col items-center justify-start w-[94%] mb-[109px] gap-[89px]">
                      <Heading as="h2" className="capitalize text-center text-shadow-ts">
                        OVERVIEW
                      </Heading>
                      <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col items-center justify-start w-[45%] gap-[51px] py-[25px] bg-gray-900">
                          <Heading as="h3" className="capitalize text-center !font-bold text-shadow-ts">
                            IMPORTANCE
                          </Heading>
                          <Text as="p" className="w-[87%] mb-[41px]">
                            {`The SDGs are integral to addressing the world's most pressing issues and creating a more sustainable and equitable future for all. By addressing interconnected challenges such as poverty, inequality, and environmental degradation, the SDGs aim to build a world where no one is left behind.`}
                            <br />
                            These goals are not only crucial for improving the quality of life for current generations
                            but also for safeguarding the well-being of future generations. They provide a framework for
                            governments, businesses, civil society, and individuals to work together towards common
                            objectives, fostering collaboration and partnership on a global scale.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[45%] gap-10 py-[25px] bg-gray-900">
                          <Heading as="h4" className="capitalize text-center !font-bold text-shadow-ts">
                            hISTORY
                          </Heading>
                          <Text as="p" className="w-[87%] mb-[30px]">
                            The roots of the SDGs can be traced back to the Millennium Development Goals (MDGs), which
                            were adopted in 2000 with a focus on eradicating poverty and improving social indicators by
                            2015. While the MDGs made significant progress in many areas, they also highlighted the need
                            for a more comprehensive and inclusive approach to sustainable development.
                            <br />
                            In 2012, the United Nations launched a process to develop a new set of goals to succeed the
                            MDGs, engaging stakeholders from governments, civil society, and the private sector in a
                            consultative process. After extensive negotiations and consultations, the 17 SDGs were
                            officially adopted by world leaders at the United Nations Sustainable Development Summit in
                            September 2015.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[42%] gap-[29px] left-[7%] top-[1%] m-auto absolute">
                <Heading as="h5" className="capitalize text-shadow-ts">
                  Exploring the 17 sustainable <br />
                  Development Goals (SDGs)
                </Heading>
                <Text size="xs" as="p" className="text-shadow-ts">
                  The Sustainable Development Goals (SDGs) are a set of 17 interconnected global goals adopted by all
                  United Nations Member States in 2015 as part of the 2030 Agenda for Sustainable Development. They
                  serve as a universal call to action to end poverty, protect the planet, and ensure that all people
                  enjoy peace and prosperity by 2030.
                </Text>
              </div>
              <div className="flex flex-row justify-start w-[26%] bottom-[41%] left-[7%] m-auto absolute">
                <Input type="email" name="email" placeholder="Enter your e-mail" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
