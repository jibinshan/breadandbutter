"use client";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
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

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        <Button className="font-oswald rounded-none bg-black px-6 py-9 text-center text-lg font-[400] leading-[25px] tracking-[1px] text-[#ffffff] lg:py-[44px]">
          Book <br /> Table
        </Button>
      </div>

      {/* {isScrolled && (
        <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
          <ViewMenu />
        </div>
      )} */}
    </main>
  );
}
