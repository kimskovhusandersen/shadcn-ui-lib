import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
