import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Feel: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#FFF6EB] px-4 pb-12 lg:px-[70px] lg:pb-[550px] xl:px-[120px] 2xl:px-[160px]">
      <div className="absolute bottom-4 left-0 right-0 hidden items-center justify-between px-36 lg:flex">
        <div className="flex-shrink-0">
          <Image
            src={"/images/feel/ice.png"}
            width={288}
            height={359}
            alt="underline"
            className="w-[220px] object-cover"
          />
        </div>

        <div className="mb-16 flex-shrink-0">
          <Image
            src={"/images/feel/cup.png"}
            width={291}
            height={359}
            alt="underline"
            className="w-[220px] object-cover"
          />
        </div>

        <div className="mb-56 flex-shrink-0">
          <Image
            src={"/images/feel/chair.png"}
            width={414}
            height={263}
            alt="underline"
            className="w-[300px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-oswald text-center text-5xl font-[400] uppercase text-[#0D0D0D] lg:text-8xl lg:leading-[110px]">
            Feel Our Flavors
          </h1>
          <Image
            src={"/images/quality/b-underline.svg"}
            width={507}
            height={12}
            alt="underline"
            className="w-[200px] object-cover"
          />
        </div>
        <div>
          <Button className="font-oswald rounded-none bg-[#AE945A] px-7 py-6 text-center text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#fff]">
            View menu
          </Button>
        </div>
      </div>
      <div className="block pt-12 lg:hidden">
        <div className="flex flex-col gap-5">
          <Image
            src={"/images/feel/ice.png"}
            width={288}
            height={359}
            alt="underline"
            className="h-[280px] w-full object-contain"
          />
          <Image
            src={"/images/feel/cup.png"}
            width={414}
            height={263}
            alt="cup"
            className="h-[280px] w-full object-contain"
          />
          <Image
            src={"/images/feel/chair.png"}
            width={414}
            height={263}
            alt="chair"
            className="h-[280px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Feel;
