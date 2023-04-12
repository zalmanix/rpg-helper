import React, { ReactNode } from "react";
import Head from "next/head";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { title, description } from "../../constants/header";

export const Layout = ({ children }: { children?: ReactNode }) => (
  <div className="bg-background text-textHighEmphasis">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
    </Head>

    <Header />

    <div className="h-[72px]" />

    <div className="container min-h-[85vh]">{children}</div>

    <Footer />
  </div>
);
