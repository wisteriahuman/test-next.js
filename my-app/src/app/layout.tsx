"use client";

import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "jotai";
import Header from "@/components/layout/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="ja">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>チャットアプリ</title>
        </head>
        <body>
          <Header />
          <main
            style={{ background: "#f1f3f7", width: "100%", height: "100vh"}}
          >
            <Provider>{children}</Provider>
          </main>
        </body>
      </html>
    </>
  );
}