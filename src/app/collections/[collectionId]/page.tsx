import React from "react";

interface pageProps {
  params: { collectionId: string };
}

const CollectionsPage: React.FC<pageProps> = ({ params }) => {
  return <div>collections: {params.collectionId}</div>;
};

export default CollectionsPage;
