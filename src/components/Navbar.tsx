"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { BetaMenuActive } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav
      className={`${position} top-5 z-50 h-[10vh] w-full px-4 pt-0 lg:px-20 lg:pt-6`}
    >
      {/*big screen */}
      <div className="hidden lg:block">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col gap-3">
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
          <Link href={"#"}>
            <Image
              src={"/images/hero/logo.svg"}
              width={281}
              height={74}
              alt="logo"
              className="h-[64px] w-[230px]"
            />
          </Link>
          <Button className="font-oswald rounded-none border border-white bg-transparent px-4 py-6 text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]">
            Book Table
          </Button>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block lg:hidden">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"#"}>
              <Image
                src={"/images/hero/logo.svg"}
                width={281}
                height={74}
                alt="logo"
                className="h-[40px] w-[100px]"
              />
            </Link>
          </div>
          <div>
            <button onClick={toggleMenu}>
              <EqualizerIcon />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`fixed right-0 top-0 h-full w-64 transform bg-black shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-40`}
        >
          <button
            className="absolute right-4 top-4 text-2xl text-white"
            onClick={toggleMenu}
          >
            ✕
          </button>

          <ul className="mt-16 flex flex-col items-start gap-6 px-6 text-white">
            <li>
              <Link
                href={"#"}
                className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
              >
                Order Online
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#ffffff]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
