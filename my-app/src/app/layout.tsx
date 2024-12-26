"use client";

import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "jotai";
import Header from "@/components/layout/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="ja">
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