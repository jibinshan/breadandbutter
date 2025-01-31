"use client";
import Image from "next/image";
import Link from "next/link";

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
            href={"/"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            About
          </Link>
          <Link
            href={"/menu"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Menu
          </Link>
          <Link
            href={"/table-booking"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Reservation
          </Link>
          <Link
            href={"/menu"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Order Online
          </Link>
          <Link
            href={"/contact"}
            className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
          >
            Contact Us
          </Link>
        </div>
        <div className="w-full border-t-2 border-[rgba(255,246,235,0.13)] lg:pb-14"></div>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-36 lg:pb-20 2xl:gap-56">
          <div className="flex flex-col gap-6">
            <h1 className="text-center font-oswald text-xl font-[400] uppercase tracking-[1px] text-[#FFF6EB] lg:text-4xl">
              Contact
            </h1>
            <Link href={"https://g.co/kgs/1gWhtT5"} target="_blank">
              <p className="text-center font-inter text-sm font-[500] uppercase leading-[24px] text-[#989898]">
                7 Enfield Rd, London N1 5EN,
                <br /> United Kingdom
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-center font-oswald text-xl font-[400] uppercase tracking-[1px] text-[#FFF6EB] lg:text-4xl">
              Opening HOURS
            </h1>
            <p className="text-center font-inter text-sm font-[500] uppercase leading-[28px] text-[#989898]">
              Mon - Fri : 7am-6pm
              <br />
              Sat - Sun : 8am-6pm <br />
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-center font-oswald text-xl font-[400] uppercase tracking-[1px] text-[#FFF6EB] lg:text-4xl">
              Social
            </h1>
            <Link
              href={"https://www.instagram.com/breadandbuttercafe/?hl=en"}
              target="_blank"
            >
              <p className="text-center font-inter text-sm font-[500] uppercase leading-[28px] text-[#989898]">
                INSTAGRAM
              </p>
            </Link>
            <Link
              href={"https://www.facebook.com/Breadandbuttercafe/"}
              target="_blank"
            >
              <p className="text-center font-inter text-sm font-[500] uppercase leading-[28px] text-[#989898]">
                Facebook
              </p>
            </Link>
            <Link
              href={
                "https://www.tripadvisor.in/Restaurant_Review-g186338-d5816512-Reviews-Bread_Butter-London_England.html"
              }
              target="_blank"
            >
              <p className="text-center font-inter text-sm font-[500] uppercase leading-[28px] text-[#989898]">
                Tripadvisor
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full border-t-2 border-[rgba(255,246,235,0.13)]"></div>
      </div>
      <div className="flex flex-row items-center justify-between py-8">
        <p className="text-center font-oswald text-xs font-[400] uppercase leading-[25px] tracking-[1px] text-[#FFF6EB]">
          © 2024 bread & butter
        </p>
        <Link href={"https://foodo.ai"} target="_blank">
          <p className="text-center font-oswald text-xs font-[400] uppercase leading-[25px] tracking-[1px] text-[#FFF6EB]">
            Foodo
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
