"use client";
import Image from "next/image";
import headingh1 from "../../public/images/landingPage/landingh1.svg";
import mainpic from "../../public/images/landingPage/landingleftmainpic.png";
import landingComment from "../../public/images/landingPage/landingcomment.svg";
import landingCredit from "../../public/images/landingPage/landingcredit.svg";
import landingDatabase from "../../public/images/landingPage/landingdatabase.svg";
import landingIncome from "../../public/images/landingPage/landingincome.svg";
import landingRight from "../../public/images/landingPage/landingright.svg";
import landingAmount from "../../public/images/landingPage/landingamount.svg";

const LandingPage = () => {
  return (
    <>
      <div className="flex h-fit w-screen  px-6 py-24 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:py-6 md:py-16 md:max-lg:px-16  lg:max-xl:px-20 xl:px-28">
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
          <p className="pr-24 text-xl max-sm:my-6 max-sm:pr-2 max-sm:text-base md:max-lg:pr-12 md:max-lg:text-base lg:max-xl:text-lg">
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
              className="absolute -right-28 bottom-8 h-48 w-auto max-sm:-right-16 max-sm:bottom-4 max-sm:h-28 md:max-xl:-right-16 md:max-xl:h-40"
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
      <div className="flex h-fit w-screen flex-col gap-7  px-6 py-24 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:py-12 md:py-16  md:max-lg:px-16 lg:max-xl:px-20 xl:px-28">
        <h1 className="md:max-lg:text-4xl text-center max-sm:text-3xl text-5xl font-bold">
          More than 25,000 teams use Collabs
        </h1>
        <div className="flex flex-wrap max-sm:flex-1 max-sm:gap-3 gap-8  items-center justify-evenly">
          <span className="flex gap-2 text-[#A6A6A6]">
            <svg
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="11" width="12" height="9" fill="#A6A6A6" />
              <rect y="23" width="34" height="9" fill="#A6A6A6" />
              <rect x="24" y="14" width="10" height="18" fill="#A6A6A6" />
              <rect y="14" width="10" height="18" fill="#A6A6A6" />
            </svg>
            <p className="text-3xl max-sm:text-2xl font-semibold">Unsplash</p>
          </span>
          <span className="flex gap-2 text-[#A6A6A6]">
            <svg
              width="38"
              height="35"
              viewBox="0 0 38 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3878 13.4545V28H26.044L19.1903 18.0923H19.0696V28H16.4347V13.4545H18.7926L25.6392 23.3693H25.767V13.4545H28.3878Z"
                fill="#A6A6A6"
              />
              <rect
                x="9"
                y="8"
                width="28"
                height="26"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M2.66145 1L8.37574 6H35.3386L29.6243 1H2.66145Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path d="M8 7L0 0V28L8 35V7Z" fill="#A6A6A6" />
            </svg>

            <p className="text-3xl max-sm:text-2xl font-semibold">Notion</p>
          </span>
          <span className="flex gap-2 text-[#A6A6A6]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="3" fill="#A6A6A6" />
              <rect x="4" y="7" width="2" height="12" fill="white" />
              <rect x="9" y="4" width="2" height="18" fill="white" />
              <rect x="14" y="4" width="2" height="18" fill="white" />
              <rect x="19" y="4" width="2" height="18" fill="white" />
              <path
                d="M5 24C7.83333 26.2639 16 29.4333 26 24"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect x="24" y="7" width="2" height="12" fill="white" />
            </svg>

            <p className="text-3xl max-sm:text-2xl font-semibold">INTERCOM</p>
          </span>
          <span className="flex gap-2 text-[#A6A6A6]">
            <svg
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.0711 1.41723C18.9464 2.32466 20 3.5554 20 4.83871H10L0 4.83871C0 3.5554 1.05357 2.32466 2.92893 1.41722C4.8043 0.509791 7.34784 0 10 0C12.6522 0 15.1957 0.509791 17.0711 1.41723ZM2.92893 28.5828C1.05357 27.6753 0 26.4446 0 25.1613H10L20 25.1613C20 26.4446 18.9464 27.6753 17.0711 28.5828C15.1957 29.4902 12.6522 30 10 30C7.34783 30 4.8043 29.4902 2.92893 28.5828ZM23 17.4194V21.2903H17V17.4194H23ZM6 8.70968H0V12.5806H6V8.70968ZM11 8.70968H23V12.5806H11V8.70968ZM12 17.4194H0V21.2903H12V17.4194Z"
                fill="#A6A6A6"
              />
            </svg>
            <p className="text-3xl max-sm:text-2xl font-semibold">descript</p>
          </span>
          <span className="flex gap-2 text-[#A6A6A6]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#A6A6A6" />
              <path
                d="M21 15C21 18.866 17.866 22 14 22C10.134 22 7 18.866 7 15C7 11.134 10.134 8 14 8C15.9587 8 17.7295 8.80447 19 10.101"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M17 17L21 15L23.5 18.5"
                stroke="white"
                strokeWidth="2"
              />
            </svg>

            <p className="text-3xl max-sm:text-2xl font-semibold">Grammerly</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
