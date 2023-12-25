"use client";
import Spline from "@splinetool/react-spline";

const LandingFive = () => {
  return (
    <>
      <div className="landingfive flex h-fit w-screen flex-col  px-6 py-20 max-sm:flex max-sm:flex-col max-sm:px-6 max-sm:py-6 md:py-16 md:max-lg:px-16 lg:max-xl:px-20 xl:px-28">
        <div className="flex w-full flex-col items-center justify-center ">
          <h1 className="text-center text-4xl font-bold leading-tight">
            Choose Plan <br /> That’s Right For You
          </h1>
          <p className="mt-4 text-xl font-semibold text-stone-500">
            Choose plan that works best for you, feel free to contact us
          </p>
          <div className="planBtns mt-10 flex gap-2 rounded-md bg-slate-100 px-3 py-2">
            <button className="rounded-md px-6 py-2 text-black">
              Bill Monthly
            </button>
            <button className="rounded-md bg-[#54BD95] px-6 py-2 text-white hover:bg-[#3c8b6d]">
              Bill Yearly
            </button>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-row items-center justify-between py-10 max-md:flex-col max-md:gap-4">
          <div className="cards w-[30%] rounded-2xl bg-slate-100 p-6 text-center shadow-2xl max-md:w-full md:max-lg:w-[31%] md:max-lg:p-3">
            <h2 className="text-4xl font-bold max-md:text-3xl">Free</h2>
            <p className="mb-5 mt-2 px-8 text-lg text-slate-500 max-md:mb-2 max-md:text-base md:max-xl:mb-3 md:max-xl:px-1 md:max-lg:text-base">
              Have a go and test your superpowers
            </p>
            <span className="text-5xl before:content-['$'] max-md:text-3xl md:max-lg:text-4xl">
              16
            </span>
            <div className="c mt-6 flex flex-col gap-5 rounded-xl bg-slate-200 p-8 max-md:mt-2  max-md:grid-cols-3  max-md:gap-1 max-md:p-4 max-sm:gap-2 sm:max-md:grid md:max-lg:mt-4 md:max-lg:gap-3 md:max-lg:p-4 lg:max-xl:p-5">
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">2 Users</p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">2 Files</p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">
                  Public Share & Comments
                </p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">
                  Chat Support
                </p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">
                  New income apps
                </p>
              </div>
              <button className="mt-3 rounded-2xl bg-slate-50 px-3 py-3 max-md:col-span-3">
                Signup for free
              </button>
            </div>
          </div>
          <div className="cards flex w-[30%] flex-col items-center rounded-2xl bg-[#54BD95] p-6 text-center shadow-2xl max-md:w-full md:max-lg:w-[31%] md:max-lg:p-3">
            <h2 className="text-4xl font-bold text-white max-md:text-3xl">
              Pro
            </h2>
            <p className="mb-5 mt-2 px-8 text-lg text-slate-100 max-md:mb-2 max-md:text-base md:max-xl:mb-3 md:max-xl:px-1 md:max-lg:text-base">
              Experiment the power of infinite possibilities
            </p>
            <span className="text-5xl text-white before:content-['$'] max-md:text-3xl md:max-lg:text-4xl">
              8
            </span>
            <button className="mt-3 w-fit rounded bg-green-300 px-3 py-2 text-center">
              Save $50 a year
            </button>
            <div className="c mt-6 flex flex-col gap-5 rounded-xl  bg-slate-200 p-8 max-md:mt-2 max-md:grid-cols-3 max-md:gap-1 max-md:p-4 max-sm:gap-2 sm:max-md:grid md:max-lg:mt-4 md:max-lg:gap-3 md:max-lg:p-4 lg:max-xl:p-5 ">
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">4 Users</p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">All apps</p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">
                  Unlimited editable exports
                </p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">
                  Folders and collaboration{" "}
                </p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">
                  All incoming apps
                </p>
              </div>
              <button className="mt-3 rounded-2xl bg-green-400 px-3 py-3 font-semibold text-white max-md:col-span-3">
                Go to pro
              </button>
            </div>
          </div>
          <div className="cards w-[30%] rounded-2xl bg-slate-100 p-6 text-center shadow-2xl max-md:w-full md:max-lg:w-[31%] md:max-lg:p-3">
            <h2 className="text-4xl font-bold max-md:text-3xl">Free</h2>
            <p className="mb-5 mt-2 px-8 text-lg text-slate-500 max-md:mb-2 max-md:text-base md:max-xl:mb-3 md:max-xl:px-1 md:max-lg:text-base">
              Have a go and test your superpowers
            </p>
            <span className="text-5xl before:content-['$'] max-md:text-3xl md:max-lg:text-4xl">
              16
            </span>
            <div className="c mt-6 flex flex-col gap-5 rounded-xl bg-slate-200 p-8 max-md:mt-2 max-md:grid-cols-3 max-md:gap-1 max-md:p-4 max-sm:flex-col max-sm:gap-2 sm:max-md:grid md:max-lg:mt-4 md:max-lg:gap-3 md:max-lg:p-4 lg:max-xl:p-5">
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">2 Users</p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">2 Files</p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">
                  Public Share & Comments
                </p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">
                  Chat Support
                </p>
              </div>
              <div className="flex">
                <i className="ri-arrow-right-s-fill h-fit rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2 text-start md:max-xl:text-sm">
                  New income apps
                </p>
              </div>
              <button className="mt-3 rounded-2xl bg-slate-50 px-3 py-3 max-md:col-span-3">
                Signup for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFive;
