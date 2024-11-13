import StoreMenuComponent from "./StoreMenuComponent";

export default async function StorePage({ params }: any) {
  const { id } = await params;
  const storeDetail = await getStoreDetail(id);

  return <StoreMenuComponent storeDetail={storeDetail?.data} />;
}

async function getStoreDetail(id: string) {
  const response = await fetch(
    `https://digi-be.sourcestation.net/v1/public/stores/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch store");
  }
  return response.json();
}
