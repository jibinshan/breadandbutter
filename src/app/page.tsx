"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Hero from "./(section)/Hero";
import { Button } from "@/components/ui/button";
import Passion from "./(section)/Passion";
import Quality from "./(section)/Quality";
import Feel from "./(section)/Feel";
import Special from "./(section)/(special)/Special";
import Open from "./(section)/Open";
import Reviews from "./(section)/Review";
import Find from "./(section)/Find";
import Follow from "./(section)/Follow";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Passion />
        <Quality />
        <Feel />
        <Special />
        <Open />
        <Reviews />
        <Find />
        <Follow />
        <Footer />
      </div>
      <div className="fixed bottom-8 right-8 z-20">
        <Link href={"/table-booking"}>
          <Button className="rounded-none bg-black px-6 py-9 text-center font-oswald text-lg font-[400] leading-[25px] tracking-[1px] text-[#ffffff] lg:py-[44px]">
            Book <br /> Table
          </Button>
        </Link>
      </div>
    </main>
  );
}
