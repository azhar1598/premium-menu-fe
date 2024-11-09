// app/stores/[id]/page.tsx
import HomeComponent from "./HomeComponent";

export default async function StorePage({ params }: any) {
  const { id } = await params;
  const storeDetail = await getStoreDetail(id);

  return (
    <div>
      <HomeComponent storeDetail={storeDetail?.data} />
    </div>
  );
}

async function getStoreDetail(id: string) {
  const response = await fetch(`http://localhost:3001/v1/public/stores/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch store");
  }
  return response.json();
}

{
  /* <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 text-center mt-6 mb-4 ">
<h2 className="text-lg font-medium">Annapurna Mess</h2>
<p className="text-sm text-gray-400">Tastes Better</p>
<button
  className="bg-orange-500 text-white w-72 py-2 mt-6 px-4 rounded-lg hover:bg-orange-600 transition-colors"
  onClick={() => setShowCarousel(true)}
>
  View Menu
</button>
</div> */
}

// <div className=" ">
// <h2 className="text-lg text-white font-medium">Annapurna Mess</h2>
// <p className="text-sm text-gray-400">Tastes Better</p>
// <button
//   className="bg-orange-500 text-white w-72 py-2 mt-6 px-4 rounded-lg hover:bg-orange-600 transition-colors"
//   onClick={() => setShowCarousel(true)}
// >
//   View Menu
// </button>
// </div>
