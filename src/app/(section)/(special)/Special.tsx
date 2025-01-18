"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#200F0F] py-12">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div
        className="absolute left-0 top-0 h-full w-full overflow-hidden"
        style={{
          backgroundImage: "url('/images/home/frame.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className="font-oswald text-5xl font-[400] uppercase text-[#FFF6EB] lg:text-8xl lg:leading-[110px]">
              our <br /> special
            </h3>
            <Image
              src={"/images/quality/w-underline.svg"}
              width={507}
              height={12}
              alt="underline"
              className="h-3 w-[150px] object-cover lg:w-[300px]"
            />
          </div>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
