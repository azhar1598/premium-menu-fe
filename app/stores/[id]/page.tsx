import { BASE_URL } from "@/lib/constants";
import StoreMenuComponent from "./StoreMenuComponent";

export default async function StorePage({ params }: any) {
  const { id } = await params;
  const storeDetail = await getStoreDetail(id);
  // const categories = await getCategories(id);

  console.log("categories", BASE_URL);

  return <StoreMenuComponent storeDetail={storeDetail?.data} />;
}

async function getStoreDetail(id: string) {
  const response = await fetch(`${BASE_URL}/v1/public/stores/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch store");
  }
  return response.json();
}

// async function getCategories(id: string) {
//   const response = await fetch(
//     `${BASE_URL}/v1/public/stores/${id}/categories`,
//     {
//       next: {
//         revalidate: 60, // ISR for 60 seconds
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch initial categories");
//   }
//   return response.json();
// }
