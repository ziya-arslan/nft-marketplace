import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const Header = () => {
  return (
    <nav className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={logo} height={40} width={40} alt="logo" />
          <div className={styles.logoText}>NFt Market</div>
        </div>
      </Link>
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className={styles.headerItems}>
        <div className={styles.headerItem}>
          <Link href="/collections/0x18Dd179d7E627003C7c7E6960e3eA511970d096f">
            Collections
          </Link>
        </div>
        <div className={styles.headerItem}>Stats</div>
        <div className={styles.headerItem}>Resource</div>
        <div className={styles.headerItem}>Create</div>
        <div className={styles.headerIcon}>
          <CgProfile />
        </div>
        <div className={styles.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </nav>
  );
};

const styles = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

export default Header;
