"use client";
import { Providers } from "./provider";
import HomeContent from "./components/HomeContent";


export default function Home() {
  return (
    <Providers>
      <HomeContent />
    </Providers>
  );
}
