"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Passion: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        x: 500,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
    gsap.to(imageRef.current, {
      x: -500,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="h-full w-full bg-[#FFF6EB] pb-4 pt-12 lg:pb-8 lg:pt-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-center font-oswald text-5xl font-[400] uppercase text-[#0D0D0D] lg:text-8xl lg:leading-[115px]">
            Flavor Passion
          </h1>
          <Image
            src={"/images/quality/b-underline.svg"}
            width={507}
            height={12}
            alt="underline"
            className="w-[300px] object-cover"
          />
        </div>
        <div className="h-full w-full pt-8">
          <Image
            ref={imageRef}
            src={"/images/passion/frame.png"}
            width={1920}
            height={357}
            alt="underline"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4 pt-4">
          <p className="w-full max-w-[400px] text-center font-cormorant text-base font-[500] uppercase leading-[110%] text-[#000]">
            Bread & Butter is a brand new café situated in Haggerston. Whether
            taking away or eating in, our dedication to quality and variety is
            likely to impress!
          </p>
          <div>
            <Link href={"/table-booking"}>
              <Button className="rounded-none bg-[#AE945A] px-7 py-6 text-center font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#fff]">
                Book Table
              </Button>
            </Link>
          </div>
        </div>
        <div className="pt-12 lg:pt-24">
          <p className="pt- w-full overflow-hidden text-ellipsis whitespace-nowrap bg-black object-cover py-2 font-oswald text-sm font-[400] uppercase tracking-[3px] text-[#fff6eb] lg:text-base">
            FARMHOUSE CAFE / bread & butter / FARMHOUSE CAFE / FARMHOUSE CAFE /
            bread & butter / FARMHOUSE CAFE / FARMHOUSE CAFE / bread & butter /
            FARMHOUSE CAFE / FARMHOUSE CAFE / bread & butter / FARMHOUSE CAFE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Passion;
