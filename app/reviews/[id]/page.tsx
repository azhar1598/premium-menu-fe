import ReviewMiddleware from "./ReviewMiddleware";
import StoreMenuComponent from "./StoreMenuComponent";

export default async function StorePage({ params }: any) {
  const { id } = await params;
  const reviewDetail = await getReviewDetail(id);

  return <ReviewMiddleware reviewDetail={reviewDetail?.data} />;
}

async function getReviewDetail(id: string) {
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
