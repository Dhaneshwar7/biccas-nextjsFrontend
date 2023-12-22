"use client";
import React from "react";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import LandingPage from "@/components/Landing";
import LandingTwo from "@/components/LandingTwo";
import LandingThird from "@/components/LandingThird";

const Page = () => {
  return (
    <main className={styles.main}>
        <Nav />
        <LandingPage />
        <LandingTwo/>
        <LandingThird/>
    </main>
  );
};

export default Page;