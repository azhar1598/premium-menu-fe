import { Image, Text } from "@mantine/core";
import { IconCurrencyRupee } from "@tabler/icons-react";

interface CategoryProduct {
  categoryName: string;
  categoryImages: string[];
  categoryType: string;
  products: any[];
}

export const MenuCard = ({
  storeDetail,
  categories,
}: {
  storeDetail: any;
  // categories: CategoryProduct[];
  categories: any;
}) => {
  return (
    <div className="min-h-full bg-zinc/30 backdrop-blur-sm py-3 mx-1  px-1 text-white rounded-sm menu-bg2 overflow-auto">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">OUR MENU</h1>
        </div>

        {categories.map((category: any, categoryIndex: number) => {
          // Determine if we should show only one image based on product count
          const showSingleImage = category.products?.length < 14;
          const imagesToShow = showSingleImage
            ? [category.images[0]]
            : category.images;

          return (
            <div
              key={`${category.categoryName}-${categoryIndex}`}
              className="mb-12 "
            >
              <div
                className={`flex justify-between flex-start ${
                  categoryIndex % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-64 ${
                    categoryIndex % 2 === 1 ? "pl-4" : "pr-4"
                  }`}
                >
                  {category.isContinuation ? (
                    <div className="text-md mb-4 italic text-gray-300 ">
                      {category.categoryName} continues...
                    </div>
                  ) : (
                    <div
                      className="text-md inline-block mx-3 py-2 rounded-md mb-4 px-3"
                      style={{
                        backgroundColor: storeDetail?.websiteTheme.primaryColor,
                      }}
                    >
                      <Text
                        c="white"
                        size="14px"
                        fw={600}
                        className="text-black font-bold"
                      >
                        {category.name.toUpperCase()}
                      </Text>
                    </div>
                  )}
                  <div className="space-y-2 px-3">
                    {category.products.map(
                      (product: any, productIndex: number) => (
                        <MenuItem
                          key={`${product.name}-${productIndex}`}
                          name={product.name}
                          price={product.price}
                        />
                      )
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {imagesToShow.map((image: any, imageIndex: number) => (
                    <div
                      key={imageIndex}
                      className={`relative mt-4 h-[180px] ${
                        showSingleImage ? "w-[130px]" : "w-[130px]"
                      }`}
                    >
                      {showSingleImage && (
                        <div
                          className="absolute inset-0 -top-2 left-2 right-2 h-32 rounded-lg"
                          style={{
                            backgroundColor:
                              storeDetail?.websiteTheme.primaryColor,
                          }}
                        />
                      )}

                      {!showSingleImage && (
                        <div
                          className="absolute inset-0 -top-2 left-2 right-2 h-32 rounded-lg"
                          style={{
                            backgroundColor:
                              storeDetail?.websiteTheme.primaryColor,
                          }}
                        />
                      )}
                      <Image
                        src={image}
                        alt={`${category.categoryName} ${imageIndex + 1}`}
                        className={`absolute ${
                          categoryIndex % 2 === 0 ? "pr-4" : "pl-4"
                        } rounded-lg object-cover ${
                          showSingleImage
                            ? "h-36 inset-0 "
                            : "h-36 -  rounded-full"
                        }`}
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MenuItem = ({ name, price }: { name: string; price: string }) => (
  <div className="flex justify-between items-center ">
    <Text size="14px" className="text-white" mb={6} mt={2}>
      {name}
    </Text>
    <div className="flex items-center">
      <Text size="14px" className="flex text-white">
        <IconCurrencyRupee stroke={1} size={16} />
        <span className="mt-[2px]">{price}</span>
      </Text>
    </div>
  </div>
);

export default MenuCard;
