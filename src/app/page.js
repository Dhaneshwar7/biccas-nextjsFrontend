"use client";
import React from "react";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import LandingPage from "@/components/Landing";
import LandingTwo from "@/components/LandingTwo";
import LandingThird from "@/components/LandingThird";
import LandingFour from "@/components/LandingFour";

const Page = () => {
  return (
    <main className={styles.main}>
      <Nav />
      <LandingPage />
      <LandingTwo />
      <LandingThird />
      <LandingFour />
    </main>
  );
};

export default Page;