"use client";
import React from "react";
import { motion } from "framer-motion";

import EarthCanvas from "./elements/EarthCanvas";
import { slideIn } from "@/utils/motion";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.copyContainer}>
            <div className={styles.title}>
              Discover, collect, and sell extraordinary NFTS
            </div>
            <div className={styles.description}>
              NFt Marketplace is a showcase project made by Ziya Arslan
            </div>
            <div className={styles.ctaContainer}>
              <button className={styles.accentedButton}>Explore</button>
              <button className={styles.button}>Create</button>
            </div>
          </div>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className={styles.globeContainer}
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `relative`,
  container: `bg-black`,
  contentWrapper: `flex md:h-screen h-auto relative justify-center flex-wrap-reverse items-center container mx-auto`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  globeContainer: `xl:flex-1 md:w-1/2 xl:h-full flex-1 md:h-[550px] h-[350px]`,
};

export default Hero;
