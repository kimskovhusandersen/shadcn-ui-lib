import { Filters } from "@/components/ui/filters";
import { Newsletter } from "@/components/ui/newsletter";
import { Layout } from "./layout";

export function Category() {
  return (
    <Layout>
      <Filters />
      <Newsletter />
    </Layout>
  );
}
