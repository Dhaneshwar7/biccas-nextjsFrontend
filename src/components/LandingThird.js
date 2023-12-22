import React from "react";
import Image from "next/image";
import firstImg from "../../public/images/LandingThird/Cloud.png";
import secondImg from "../../public/images/LandingThird/Collab.png";
import thirdImg from "../../public/images/LandingThird/dailyanalysis.png";

const LandingThird = () => {
  return (
    <div className="flex h-fit w-screen flex-col items-center justify-center gap-7  px-6 py-12 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:py-12 md:py-20  md:max-lg:px-16 lg:max-xl:px-20 xl:px-28">
      <div className="grid h-fit w-full  max-sm:h-fit max-sm:w-fit">
        <div className="flex w-full items-center justify-between max-sm:flex-col">
          <h1 className="w-1/3 text-5xl font-semibold max-sm:w-full max-sm:text-center max-sm:text-4xl md:max-lg:text-4xl">
            Our Features you cab get
          </h1>
          <p className="w-1/3 text-lg max-sm:w-full max-sm:py-5 max-sm:text-center max-sm:text-base md:max-lg:w-2/4 md:max-lg:text-base">
            We offer a variety of interesting features that you can help
            increase yor productivity at work and manage your projrct esaly
          </p>
          <button className="h-fit w-fit flex-shrink-0 rounded-full bg-emerald-400 px-5 py-3 text-lg md:max-lg:py-2 md:max-lg:text-base">
            Get Started
          </button>
        </div>
        <div className="flex w-full items-center justify-between py-10 max-sm:flex-col">
          <div className="flex flex-col items-start justify-start max-sm:mb-8 max-sm:w-full max-sm:items-center max-sm:justify-center md:max-xl:w-[30%] xl:max-2xl:w-1/3">
            <Image
              src={firstImg}
              width={650}
              height={360}
              priority
              alt="landingThirdImages"
              className="h-96 w-auto max-sm:h-64 md:max-lg:h-72"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <h2 className="py-3 text-3xl max-sm:text-2xl font-semibold max-sm:py-1 md:max-lg:py-2 md:max-lg:text-2xl">
              Collboration Teams{" "}
            </h2>
            <p className="w-4/5 text-lg max-sm:text-center md:max-lg:text-base">
              Here you can handle projects together with team virtually
            </p>
          </div>
          <div className="flex flex-col items-start justify-start max-sm:mb-8 max-sm:w-full max-sm:items-center max-sm:justify-center md:max-xl:w-[30%] xl:max-2xl:w-1/3">
            <Image
              src={secondImg}
              width={650}
              height={360}
              priority
              alt="landingThirdImages"
              className="h-96 w-auto max-sm:h-64 md:max-lg:h-72"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <h2 className="py-3 text-3xl font-semibold max-sm:py-1 max-sm:text-2xl md:max-lg:py-2 md:max-lg:text-2xl">
              Cloud Storage
            </h2>
            <p className="w-4/5 text-lg max-sm:text-center md:max-xl:w-full  md:max-lg:text-base">
              No nedd to worry about storage because we provide storage up to 2
              TB
            </p>
          </div>
          <div className="flex flex-col items-start justify-start max-sm:mb-8 max-sm:w-full max-sm:items-center max-sm:justify-center md:max-xl:w-[30%] xl:max-2xl:w-1/3">
            <Image
              src={thirdImg}
              width={650}
              height={360}
              priority
              alt="landingThirdImages"
              className="h-96 w-auto max-sm:h-64 md:max-lg:h-72 "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            ></Image>
            <h2 className="py-3 text-3xl max-sm:text-2xl font-semibold max-sm:py-1 md:max-lg:py-2 md:max-lg:text-2xl">
              Daily Analytics
            </h2>
            <p className="w-4/5 text-lg max-sm:text-center md:max-lg:w-full md:max-lg:text-base">
              We always provide useful informatin to make it easier for you
              every day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingThird;
