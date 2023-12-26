"use client";
import React from "react";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import LandingPage from "@/components/Landing";
import LandingTwo from "@/components/LandingTwo";
import LandingThird from "@/components/LandingThird";
import LandingFour from "@/components/LandingFour";
import LandingFive from "@/components/LandingFive";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <main className={styles.main}>
      <Nav></Nav>
      <LandingPage />
      <LandingTwo />
      <LandingThird />
      <LandingFour />
      <LandingFive />
      <Footer/>
    </main>
  );
};

export default Page;