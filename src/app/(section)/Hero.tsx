import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full">
      <div className="absolute left-4 right-4 top-4 z-20 hidden lg:block">
        <Image
          src={"/images/hero/frame.png"}
          width={1865}
          height={943}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="relative flex h-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="font-oswald text-5xl font-[400] uppercase text-[#ffffff] lg:text-8xl lg:leading-[130px]">
          bread & butter
        </h1>
        <Image
          src={"/images/quality/w-underline.svg"}
          width={507}
          height={12}
          alt="underline"
          className="w-[300px] object-cover lg:w-[600px]"
        />
        <h4 className="text-center font-oswald text-lg font-[400] uppercase leading-[44px] tracking-[12px] lg:text-xl lg:tracking-[20px]">
          fARMHOUSE CAFE
        </h4>
        <Link href={"/menu"}>
          <Button className="relative z-40 rounded-none bg-white px-7 py-6 font-oswald text-lg font-[400] leading-[25px] tracking-[1px] text-[#000000] lg:mt-4">
            View Menu
          </Button>
        </Link>
      </div>

      <div className="z-5 absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"></div>
    </section>
  );
};

export default Hero;
