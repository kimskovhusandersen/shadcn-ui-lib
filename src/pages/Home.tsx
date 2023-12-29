import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProductCard } from "@/components/ui/card.story";
import { Newsletter } from "@/components/ui/newsletter";
import { Layout } from "./layout";

export function Home() {
  return (
    <Layout>
      <AspectRatio className="border" ratio={16 / 8}>
        <img
          alt=""
          className="h-full w-full object-cover"
          src="https://dummyimage.com/1920x806/fff/aaa"
        />
      </AspectRatio>
      <div className="sm:grid-cols- grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {[...Array(6)].map((_, i) => (
          <AspectRatio className="border" ratio={1 / 1}>
            <img
              alt=""
              className="h-full w-full object-cover"
              src="https://dummyimage.com/200x200/fff/aaa"
            />
          </AspectRatio>
        ))}
      </div>
      <div className="flex">
        {[...Array(2)].map((_, i) => (
          <AspectRatio className="border" ratio={16 / 8}>
            <img
              alt=""
              className="h-full w-full object-cover"
              src="https://dummyimage.com/960x403/fff/aaa"
            />
          </AspectRatio>
        ))}
      </div>
      <AspectRatio className="border" ratio={16 / 8}>
        <img
          alt=""
          className="h-full w-full object-cover"
          src="https://dummyimage.com/1920x806/fff/aaa"
        />
      </AspectRatio>
      <h2 className="mt-12 text-xl font-bold tracking-tight text-gray-900">
        Shop The Latest
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
          <ProductCard />
        ))}
      </div>
      <Newsletter />
    </Layout>
  );
}
