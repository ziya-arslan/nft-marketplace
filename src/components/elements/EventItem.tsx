import { EventItemType } from "@/interfaces/nft";
import Image from "next/image";
import { BsFillCartFill } from "react-icons/bs";

type EventItemProps = {
  event: EventItemType;
};

const EventItem = ({ event }: EventItemProps) => {
  return (
    <div className={styles.eventItem}>
      <div className={`${styles.event} flex-[2]`}>
        <div className={styles.eventIcon}>
          <BsFillCartFill />
        </div>
        <div className={styles.eventName}>Sale</div>
      </div>
      <div className={`${styles.eventPrice} flex-[2]`}>
        <Image
          src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/ethereum-eth-icon.png"
          alt="eth"
          width={20}
          height={20}
          className={styles.ethLogo}
        />
        <div className={styles.eventPriceValue}>{event.price}</div>
      </div>
      <div className={`${styles.accent} flex-[3]`}>{event.from}</div>
      <div className={`${styles.accent} flex-[3]`}>{event.to}</div>
      <div className={`${styles.accent} flex-[2]`}>{event.date}</div>
    </div>
  );
};

const styles = {
  eventItem: `flex px-4 py-5 font-medium`,
  event: `flex items-center`,
  eventIcon: `mr-2 text-xl`,
  eventName: `text-lg font-semibold`,
  eventPrice: `flex items-center`,
  eventPriceValue: `text-lg`,
  ethLogo: `h-5 mr-2`,
  accent: `text-[#2081e2]`,
};

export default EventItem;
