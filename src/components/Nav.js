"use client";
import React, { useEffect } from "react";
import { inter, roboto_mono } from "../app/font";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="flex w-screen items-center justify-between max-sm:py-5 px-6 py-3 sm:px-12 md:px-20 xl:px-28 ">
        <div>
          <h1 style={inter.style} className="w-fit text-4xl font-semibold">
            Biccas
          </h1>
        </div>
        <div className="sm:flex md:hidden">
          <i className="ri-menu-line text-2xl"></i>
        </div>
        <div className="flex items-center xs:hidden md:flex md:gap-4 lg:gap-32 ">
          <ul className="flex items-center gap-9  text-gray-500 sm:gap-2">
            <li className="block  cursor-pointer px-1 py-1  text-base font-medium text-slate-600 hover:border-b-2 hover:border-zinc-950 hover:text-slate-950">
              <Link href="/Home">Home</Link>
            </li>
            <li className="block  cursor-pointer px-1 py-1  text-base font-medium text-slate-600 hover:border-b-2 hover:border-zinc-950 hover:text-slate-950">
              <Link href="/Product">Product</Link>
            </li>
            <li className="block  cursor-pointer px-1 py-1  text-base font-medium text-slate-600 hover:border-b-2 hover:border-zinc-950 hover:text-slate-950">
              <Link href="/FAQ">FAQ</Link>
            </li>
            <li className="block  cursor-pointer px-1 py-1  text-base font-medium text-slate-600 hover:border-b-2 hover:border-zinc-950 hover:text-slate-950">
              <Link href="/Blog">Blog</Link>
            </li>
            <li className="block  cursor-pointer px-1 py-1  text-base font-medium text-slate-600 hover:border-b-2 hover:border-zinc-950 hover:text-slate-950">
              <Link href="/About">About Us</Link>
            </li>
          </ul>
          <ul className="flex items-center gap-x-3">
            <li>
              <Link
                href="/"
                className="rounded-md p-2 font-medium text-slate-700  hover:bg-white hover:text-slate-900"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="rounded-md bg-emerald-500 p-2 font-medium text-slate-50 hover:bg-emerald-800 hover:text-white"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
