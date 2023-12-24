"use client";
import Image from "next/image";
import landingFourMain from "../../public/images/LandingFour/benefitMain.png";
import landingFourSmallPic from "../../public/images/LandingFour/benefitSmallimage.svg";
import landingFourMoney from "../../public/images/LandingFour/benefitMoney.svg";
import landingFourIncome from "../../public/images/LandingFour/benefitIncome.svg";
import landingFourProifle from "../../public/images/LandingFour/benefitProfile.svg";

const LandingFour = () => {
  return (
    <>
      <div className="flex h-fit w-screen  px-6 py-20 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:py-6 md:py-16 md:max-lg:px-16  lg:max-xl:px-20 xl:px-28">
        <div className="flex h-fit w-2/4 flex-col items-start justify-start overflow-hidden pr-7 max-sm:max-h-fit  max-sm:w-full max-sm:pr-0 md:max-lg:max-h-[55vh]">
          <div className="">
            <h1 className="text-7xl max-sm:text-center max-sm:text-4xl font-bold leading-none md:max-lg:text-5xl lg:max-xl:text-6xl">
              What Benifit Will You Get
            </h1>
          </div>
          <ul className="mt-8">
            <li className="mb-2 flex items-center">
              <i className="ri-arrow-right-s-fill h-fit w-fit rounded-full bg-[#6DD130] p-1 text-white"></i>
              <h3 className="ml-5">
                Free Consulting With Experet Saving Money
              </h3>
            </li>
            <li className="mb-2 flex items-center">
              <i className="ri-arrow-right-s-fill h-fit w-fit rounded-full bg-[#6DD130] p-1 text-white"></i>
              <h3 className="ml-5">Online Banking</h3>
            </li>
            <li className="mb-2 flex items-center">
              <i className="ri-arrow-right-s-fill h-fit w-fit rounded-full bg-[#6DD130] p-1 text-white"></i>
              <h3 className="ml-5">Investment Report Every Month</h3>
            </li>
            <li className="mb-2 flex items-center">
              <i className="ri-arrow-right-s-fill h-fit w-fit rounded-full bg-[#6DD130] p-1 text-white"></i>
              <h3 className="ml-5">Saving Money For The Future</h3>
            </li>
            <li className="mb-2 flex items-center">
              <i className="ri-arrow-right-s-fill h-fit w-fit rounded-full bg-[#6DD130] p-1 text-white"></i>
              <h3 className="ml-5">Online Transaction</h3>
            </li>
          </ul>
        </div>
        <div className="first-line h-60vh relative flex max-h-[60vh] w-2/4 items-center  justify-center max-sm:mt-8  max-sm:max-h-fit max-sm:w-full ">
          <div className="relative flex h-full w-fit items-center justify-center">
            {/* Landing Four Page --- Main Image */}
            <Image
              width={650}
              height={360}
              priority
              alt="landingPageImages"
              className="h-full w-auto max-sm:h-72"
              src={landingFourMain}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <Image
              width={300}
              height={400}
              priority
              alt="landingPageImages"
              className="3 absolute -left-28 top-6 h-20 w-auto max-sm:-left-14 max-sm:h-8 md:max-lg:-left-12 md:max-lg:h-10 lg:max-lg:h-12"
              src={landingFourProifle}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <Image
              width={650}
              height={360}
              priority
              alt="landingPageImages"
              className="absolute -left-16 top-72 h-10 w-auto max-sm:-left-12 max-sm:top-36"
              src={landingFourSmallPic}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <Image
              width={650}
              height={360}
              priority
              alt="landingPageImages"
              className="absolute -left-20  bottom-0 h-20 w-auto max-sm:-left-12 max-sm:h-12  md:max-lg:-left-16 md:max-lg:h-10 lg:max-xl:h-12"
              src={landingFourMoney}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>

            <Image
              width={300}
              height={400}
              priority
              alt="landingPageImages"
              className="3 absolute -right-12 top-24 h-16 w-auto max-sm:h-12 lg:max-xl:h-10"
              src={landingFourIncome}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFour;
