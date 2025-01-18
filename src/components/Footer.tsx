"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { Button } from "./ui/button";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#0B0B0B] px-4 pt-12 lg:px-24 lg:pt-24">
      <div className="flex flex-col items-center justify-center gap-8">
        <div>
          <Image
            src={"/images/hero/logo.svg"}
            width={281}
            height={74}
            alt="logo"
            className="h-[64px] w-[230px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 lg:flex-row lg:gap-16 lg:pb-6 lg:pt-10">
          <Link
            href={"#"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Home
          </Link>
          <Link
            href={"#"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            About
          </Link>
          <Link
            href={"#"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Menu
          </Link>
          <Link
            href={"#"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Reservation
          </Link>
          <Link
            href={"#"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Order Online
          </Link>
          <Link
            href={"#"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Contact Us
          </Link>
        </div>
        <div className="w-full border-t-2 border-[rgba(255,246,235,0.13)] lg:pb-14"></div>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-36 lg:pb-20 2xl:gap-56">
          <div className="flex flex-col gap-6">
            <h1 className="font-oswald text-center text-xl font-[400] uppercase tracking-[1px] text-[#FFF6EB] lg:text-4xl">
              Contact
            </h1>
            <p className="text-center font-inter text-sm font-[500] uppercase leading-[24px] text-[#989898]">
              72-74 Parade Watford <br /> Hertfordshire WD17 1AW <br /> +08
              097845666 <br />
              jardin@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-oswald text-center text-xl font-[400] uppercase tracking-[1px] text-[#FFF6EB] lg:text-4xl">
              Opening HOURS
            </h1>
            <p className="text-center font-inter text-sm font-[500] uppercase leading-[28px] text-[#989898]">
              Mon - friday : 12pm-10pm
              <br />
              sat - SUN : 12pm-10pm <br /> Monday - closed
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-oswald text-center text-xl font-[400] uppercase tracking-[1px] text-[#FFF6EB] lg:text-4xl">
              Social
            </h1>
            <p className="text-center font-inter text-sm font-[500] uppercase leading-[28px] text-[#989898]">
              INSTAGRAM <br /> Facebook
              <br /> Pinterest
            </p>
          </div>
        </div>
        <div className="w-full border-t-2 border-[rgba(255,246,235,0.13)]"></div>
      </div>
      <div className="flex flex-row items-center justify-between py-8">
        <p className="font-oswald text-center text-xs font-[400] uppercase leading-[25px] tracking-[1px] text-[#FFF6EB]">
          © 2024 bread & butter
        </p>
        <p className="font-oswald text-center text-xs font-[400] uppercase leading-[25px] tracking-[1px] text-[#FFF6EB]">
          Powered By Foodo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
