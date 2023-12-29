import { Newsletter } from "@/components/ui/newsletter";
import { ProductOverview } from "@/components/ui/product-overview";
import { Layout } from "./layout";

export const Product = () => {
  return (
    <Layout>
      <ProductOverview />
      <Newsletter />
    </Layout>
  );
};
