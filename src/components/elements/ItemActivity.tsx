"use client";
import { CgArrowsExchangeV } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
import { dummyEvents } from "../../static/dummyEvents";
import EventItem from "./EventItem";

const ItemActivity = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title} onClick={() => setToggle(!toggle)}>
        <div className={styles.titleLeft}>
          <span className={styles.titleIcon}>
            <CgArrowsExchangeV />
          </span>
          Item Activity
        </div>
        <div className={styles.titleRight}>
          {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      {toggle && (
        <div className={styles.activityTable}>
          <div className={styles.filter}>
            <div className={styles.filterTitle}>Filter</div>
            <div className={styles.filterIcon}>
              {" "}
              <AiOutlineDown />{" "}
            </div>
          </div>
          <div className={styles.tableHeader}>
            <div className={`${styles.tableHeaderElement} flex-[2]`}>Event</div>
            <div className={`${styles.tableHeaderElement} flex-[2]`}>Price</div>
            <div className={`${styles.tableHeaderElement} flex-[3]`}>From</div>
            <div className={`${styles.tableHeaderElement} flex-[3]`}>To</div>
            <div className={`${styles.tableHeaderElement} flex-[2]`}>Date</div>
          </div>
          {dummyEvents.map((event, id) => (
            <EventItem key={id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: `w-full mt-8 border border-[#151b22] rounded-xl bg-[#303339] overflow-hidden`,
  title: `bg-[#262b2f] px-6 py-4 flex items-center`,
  titleLeft: `flex-1 flex items-center text-xl font-bold`,
  titleIcon: `text-3xl mr-2`,
  titleRight: `text-xl`,
  filter: `flex items-center border border-[#151b22] mx-4 my-6 px-3 py-4 rounded-xl bg-[#363840]`,
  filterIcon: "",
  filterTitle: `flex-1`,
  tableHeader: `flex w-full bg-[#262b2f] border-y border-[#151b22] mt-8 px-4 py-1`,
  tableHeaderElement: "",
  eventItem: `flex px-4`,
  ethLogo: `h-5 mr-2`,
  accent: `text-[#2081e2]`,
  activityTable: "",
};

export default ItemActivity;
