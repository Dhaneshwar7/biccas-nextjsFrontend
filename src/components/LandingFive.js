"use client";

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
        <div className="mt-10 flex w-full flex-row items-center justify-between py-10">
          <div className="cards w-[30%] rounded-2xl bg-slate-100 p-6 text-center shadow-2xl">
            <h2 className="text-4xl font-bold">Free</h2>
            <p className="mb-5 mt-2 px-8 text-lg text-slate-500">
              Have a go and test your superpowers
            </p>
            <span className="text-5xl before:content-['$']">16</span>
            <div className="c mt-6 flex flex-col gap-5 rounded-xl bg-slate-200 p-8">
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">2 Users</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">2 Files</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">Public Share & Comments</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">Chat Support</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">New income apps</p>
              </div>
              <button className="mt-3 rounded-2xl bg-slate-50 px-3 py-3">
                Signup for free
              </button>
            </div>
          </div>
          <div className="cards flex w-[30%] flex-col items-center rounded-2xl bg-[#54BD95] p-6 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white">Pro</h2>
            <p className="mb-5 mt-2 px-8 text-lg text-slate-100">
              Experiment the power of infinite possibilities
            </p>
            <span className="text-5xl text-white before:content-['$']">8</span>
            <button className="mt-3 w-fit rounded bg-green-300 px-3 py-2 text-center">
              Save $50 a year
            </button>
            <div className="c mt-6 flex flex-col gap-5 rounded-xl bg-slate-200 p-8">
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">4 Users</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">All apps</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">Unlimited editable exports</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">Folders and collaboration </p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">All incoming apps</p>
              </div>
              <button className="mt-3 rounded-2xl text-white font-semibold bg-green-400 px-3 py-3">
                Go to pro
              </button>
            </div>
          </div>
          <div className="cards w-[30%] rounded-2xl bg-slate-100 p-6 text-center shadow-2xl">
            <h2 className="text-4xl font-bold">Free</h2>
            <p className="mb-5 mt-2 px-8 text-lg text-slate-500">
              Have a go and test your superpowers
            </p>
            <span className="text-5xl before:content-['$']">16</span>
            <div className="c mt-6 flex flex-col gap-5 rounded-xl bg-slate-200 p-8">
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">2 Users</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">2 Files</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">Public Share & Comments</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">Chat Support</p>
              </div>
              <div className="flex">
                <i class="ri-arrow-right-s-fill rounded-full bg-green-400 text-slate-50"></i>
                <p className="ml-2">New income apps</p>
              </div>
              <button className="mt-3 rounded-2xl bg-slate-50 px-3 py-3">
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
