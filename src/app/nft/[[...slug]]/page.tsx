import GeneralDetails from "@/components/elements/GeneralDetails";
import ItemActivity from "@/components/elements/ItemActivity";
import React from "react";

interface pageProps {
  params: { slug: Array<string> };
}

const nftId: React.FC<pageProps> = ({ params }) => {
  const { slug } = params;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <div className={styles.nftImgContainer}>
            {/* <NFTImage image={data?.metadata.image} /> */}
          </div>
          <div className={styles.detailsContainer}>
            {/* <GeneralDetails selectedNft={data} /> */}
            {/* <Purchase
              isListed={router.query.isListed}
              selectedNft={selectedNft}
              listings={listings}
              marketPlaceModule={marketPlaceModule}
            /> */}
          </div>
        </div>
        <ItemActivity />
      </div>
    </div>
  );
};

const styles = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
};

export default nftId;
