import { NextPage } from "next";

import Footer from "@/app/components/layouts/Footer";
import { Header } from "@/app/components/layouts/Header";

export const DefaultLayout: NextPage<any> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gray-100">{children}</main>
      <Footer />
    </>
  );
};
