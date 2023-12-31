import { NftItemType } from "@/interfaces/nft";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";

type NftCardProps = {
  nftItem: NftItemType;
  title?: string;
  isListed: boolean;
  price: string | null;
  contractAddress: string;
};

const NftCard = ({
  nftItem,
  title,
  isListed,
  price,
  contractAddress,
}: NftCardProps) => {
  const router = useRouter();

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        router.push(`/nft/${contractAddress}/${nftItem.metadata.id}`);
      }}
    >
      <div className={styles.imgContainer}>
        {nftItem.metadata.image && (
          <Image
            src={nftItem.metadata.image}
            alt="nft image"
            width={320}
            height={320}
          />
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          <div className={styles.collectionName}>{title}</div>
          <div className={styles.assetName}>{nftItem.metadata.name}</div>
        </div>
        {isListed && (
          <div className={styles.infoRight}>
            <div className={styles.priceTag}>Price</div>
            <div className={styles.priceValue}>
              <Image
                src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/ethereum-eth-icon.png"
                alt="eth"
                width={20}
                height={20}
                className={styles.ethLogo}
              />
              {price}
            </div>
          </div>
        )}
      </div>
      <div className={styles.likes}>
        <span className={styles.likeIcon}>
          <BiHeart />
        </span>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
  imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  nftImg: `w-full object-cover`,
  details: `p-3`,
  info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
  infoLeft: `flex-0.6 flex-wrap`,
  collectionName: `font-semibold text-sm text-[#8a939b]`,
  assetName: `font-bold text-lg mt-2`,
  infoRight: `flex-0.4 text-right`,
  priceTag: `font-semibold text-sm text-[#8a939b]`,
  priceValue: `flex items-center text-xl font-bold mt-2`,
  ethLogo: `h-5 mr-2`,
  likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3`,
  likeIcon: `text-xl mr-2`,
};

export default NftCard;
