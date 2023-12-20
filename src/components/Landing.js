"use client";
import Image from "next/image";
import headingh1 from "../../public/images/landingh1.svg";
import mainpic from "../../public/images/landingleftmainpic.png";
import landingComment from "../../public/images/landingcomment.svg";
import landingCredit from "../../public/images/landingcredit.svg";
import landingDatabase from "../../public/images/landingdatabase.svg";
import landingIncome from "../../public/images/landingincome.svg";
import landingRight from "../../public/images/landingright.svg";
import landingAmount from "../../public/images/landingamount.svg";

const LandingPage = () => {
  return (
    <>
      <div className="flex h-fit w-screen  px-6 py-24 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:py-6 md:py-16 md:max-lg:px-16 max-sm:bg-orange-400 lg:max-xl:px-20 xl:px-28">
        <div className="flex h-[60vh] max-h-[60vh] w-2/4 flex-col items-start justify-between overflow-hidden pr-7 max-sm:max-h-fit  max-sm:w-full max-sm:pr-0 md:max-lg:max-h-[55vh]">
          <div className="">
            <h1 className="text-[80px] font-bold leading-none max-sm:text-5xl md:max-lg:text-5xl lg:max-xl:text-6xl">
              We're here to Increase your Productivity
            </h1>
            <Image
              priority
              width={450}
              height={100}
              className="h-auto w-auto py-3"
              src={headingh1}
              alt="one line below h1"
            ></Image>
          </div>
          <p className="pr-24 text-xl max-sm:pr-2 max-sm:text-base max-sm:my-6 md:max-lg:pr-12 md:max-lg:text-base lg:max-xl:text-lg">
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.
          </p>
          <div className="landing-page-btns">
            <button className=" rounded-full bg-lime-700 px-5 py-3 text-base text-white hover:bg-lime-200 hover:text-gray-800 max-sm:px-4 max-sm:py-2 md:max-lg:px-3 md:max-lg:py-2">
              Try free Trial
            </button>
            <button className="ml-10 rounded-full px-5 py-3 text-center text-base text-black hover:bg-gray-200 max-sm:px-3 max-sm:py-1 md:max-lg:px-3 md:max-lg:py-2">
              <i className="ri-play-line mr-2 rounded-full p-[2px] text-end text-xl outline max-sm:text-xs md:max-lg:p-0 md:max-lg:text-sm"></i>
              View Demo
            </button>
          </div>
        </div>
        <div className="first-line h-60vh relative flex max-h-[60vh] w-2/4 items-center  justify-center max-sm:mt-8  max-sm:max-h-fit max-sm:w-full ">
          <div className="relative flex h-full w-fit items-center justify-center">
            <Image
              width={650}
              height={360}
              priority
              alt="landingPageImages"
              className="h-full w-auto max-sm:h-72"
              src={mainpic}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <Image
              width={300}
              height={400}
              priority
              alt="landingPageImages"
              className="3 absolute -left-28 top-6  h-14 w-auto max-sm:-left-14 max-sm:h-8 md:max-lg:-left-12 md:max-lg:h-10 lg:max-lg:h-12"
              src={landingAmount}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <Image
              width={650}
              height={360}
              priority
              alt="landingPageImages"
              className="absolute -left-20  bottom-6 h-14 w-auto max-sm:-left-12 max-sm:h-8  md:max-lg:-left-16 md:max-lg:h-10 lg:max-xl:h-12"
              src={landingIncome}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <Image
              width={650}
              height={360}
              priority
              alt="landingPageImages"
              className="absolute -left-16 top-32 h-10 w-auto max-sm:-left-12"
              src={landingRight}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <Image
              width={650}
              height={360}
              priority
              alt="landingPageImages"
              className="absolute -right-28 bottom-8 h-48 w-auto max-sm:-right-16 max-sm:h-28 max-sm:bottom-4 md:max-xl:-right-16 md:max-xl:h-40"
              src={landingCredit}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <Image
              width={650}
              height={360}
              priority
              alt="landingPageImages"
              className="absolute -bottom-6 right-10 h-10 w-auto"
              src={landingComment}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <Image
              width={300}
              height={400}
              priority
              alt="landingPageImages"
              className="3 absolute -right-6 top-4 h-12 w-auto lg:max-xl:h-10"
              src={landingDatabase}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          </div>
        </div>
      </div>
      <div className="flex max-h-screen min-h-screen w-screen px-6 sm:px-12 md:px-20 xl:px-28"></div>
    </>
  );
};

export default LandingPage;
