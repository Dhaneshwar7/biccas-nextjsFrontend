"use client";
import React from "react";
import styles from "./page.module.css";
import Nav from "@/components/Nav";
import LandingPage from "@/components/Landing";

const Page = () => {
  return (
    <main className={styles.main}>
        <Nav />
        <LandingPage />
    </main>
  );
};

export default Page;