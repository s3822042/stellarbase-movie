import { NextPage } from "next";

import Footer from "@/app/components/layouts/Footer";
import Header from "@/app/components/layouts/Header";

export const DefaultLayout: NextPage<any> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow bg-gray-100">{children}</main>
      <Footer />
    </div>
  );
};
