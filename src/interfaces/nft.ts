export type NftItemType = {
  owner: string;
  metadata: {
    name: string;
    description: string;
    image: string;
    external_url: string;
    background_color: string;
    id: string | number;
    uri: string;
    customImage: string;
    customAnimationUrl: string;
  };
  type: string;
  supply: string;
  likes: string;
};

export type collectionType = {
  imageUrl: string;
  bannerImageUrl: string;
  volumeTraded: number;
  createdBy: string;
  contractAddress: string;
  creator: string;
  title: string;
  floorPrice: number;
  allOwners: Array<any>;
  description: string;
};

export type EventItemType = {
  price: number;
  from: string;
  to: string;
  date: string;
};
