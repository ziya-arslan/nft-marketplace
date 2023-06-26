import React from "react";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";
import NftCard from "@/components/elements/NftCard";
import { collectionType, NftItemType } from "@/interfaces/nft";
import Image from "next/image";

interface pageProps {
  params: { collectionId: string };
}

const CollectionsPage: React.FC<pageProps> = async ({ params }) => {
  const { collectionId } = params;

  return (
    <div className="overflow-hidden">
      <div className={styles.bannerImageContainer}>
        <div className={styles.bannerImage}>
          {/* <Image
            fill={true}
            style={{ objectFit: "contain" }}
            src={collectionData.bannerImageUrl}
            alt="banner"
          /> */}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.midRow}>
          {/* <Image
            width={160}
            height={160}
            className={styles.profileImg}
            src={collectionData.imageUrl}
            alt="profile image"
          /> */}
        </div>
        <div className={styles.endRow}>
          <div className={styles.socialIconsContainer}>
            <div className={styles.socialIconsWrapper}>
              <div className={styles.socialIconsContent}>
                <div className={styles.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={styles.divider} />
                <div className={styles.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={styles.divider} />
                <div className={styles.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={styles.divider} />
                <div className={styles.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.midRow}>
          {/* <div className={styles.title}>{collectionData.title}</div> */}
        </div>
        <div className={styles.midRow}>
          <div className={styles.createdBy}>
            Created By{" "}
            {/* <span className="text-[#2081e2]">{collectionData.creator}</span> */}
          </div>
        </div>
        <div className={styles.midRow}>
          <div className={styles.statsContainer}>
            <div className={styles.collectionStat}>
              {/* <div className={styles.statValue}>{data?.length}</div> */}
              <div className={styles.statName}>items</div>
            </div>
            <div className={styles.collectionStat}>
              {/* <div className={styles.statValue}>
                {collectionData.allOwners
                  ? collectionData.allOwners.length
                  : ""}
              </div> */}
              <div className={styles.statName}>owners</div>
            </div>
            <div className={styles.collectionStat}>
              <div className={styles.statValue}>
                <Image
                  width={20}
                  height={20}
                  src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/ethereum-eth-icon.png"
                  alt="eth"
                  className={styles.ethLogo}
                />
                {/* {collectionData.floorPrice} */}
              </div>
              <div className={styles.statName}>floor price</div>
            </div>
            <div className={styles.collectionStat}>
              <div className={styles.statValue}>
                <Image
                  src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/ethereum-eth-icon.png"
                  alt="eth"
                  width={20}
                  height={20}
                  className={styles.ethLogo}
                />
                {/* {collectionData.volumeTraded}.5K */}
              </div>
              <div className={styles.statName}>volume traded</div>
            </div>
          </div>
        </div>
        <div className={styles.midRow}>
          {/* <div className={styles.description}>{collectionData.description}</div> */}
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* {data?.map((nftItem, id) => (
          <NftCard
            key={id}
            nftItem={nftItem}
            title={collectionData.title}
            isListed={Boolean(isListed(nftItem.metadata.id))}
            price={isListed(nftItem.metadata.id)}
            contractAddress={contractAddress}
          />
        ))} */}
      </div>
    </div>
  );
};

const styles = {
  bannerImageContainer: `h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full h-full relative`,
  infoContainer: `w-screen px-4`,
  midRow: `w-full flex justify-center text-white relative`,
  endRow: `w-full flex justify-end text-white`,
  profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-5xl font-bold mb-4`,
  createdBy: `text-lg mb-4`,
  statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
  collectionStat: `w-1/4`,
  statValue: `text-3xl font-bold w-full flex items-center justify-center`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full text-center mt-1`,
  description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
};

export default CollectionsPage;
