import { IoMdSnow } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";

const NFTImage = ({ image }: { image: string | null | undefined }) => {
  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <IoMdSnow />
          <div className={styles.likesCounter}>
            <AiOutlineHeart />
            2.3K
          </div>
        </div>
      </div>
      <div>
        {image && (
          <Image src={image} width={320} height={320} alt="nft image" />
        )}
      </div>
    </div>
  );
};

const styles = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
};

export default NFTImage;
