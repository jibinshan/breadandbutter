import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Find: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#241111] px-4 py-12 lg:px-24 lg:py-24">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
        <div className="w-full lg:w-1/2">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.566045590807!2d-0.07974512352809203!3d51.53951877182055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c969a1bb7b5%3A0x356f71aa3b6d926e!2sBread%20%26%20Butter!5e0!3m2!1sen!2sin!4v1738337167514!5m2!1sen!2sin"
            width="600"
            height="450"
          ></iframe>
        </div>
        <div className="flex w-full flex-col gap-6 lg:w-1/2 lg:gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-oswald text-5xl font-[400] uppercase text-[#fff] lg:text-8xl lg:leading-[115px]">
              Find US
            </h1>
            <Image
              src={"/images/quality/w-underline.svg"}
              width={507}
              height={12}
              alt="underline"
              className="w-[140px] object-cover lg:w-[290px]"
            />
          </div>
          <Link href={"https://g.co/kgs/riVRJDR"} target="_blank">
            <p className="font-oswald text-base font-[400] uppercase leading-[30px] tracking-[1px] text-[#fff]">
              7 Enfield Rd, London N1 5EN,
              <br /> United Kingdom
            </p>
          </Link>
          <div>
            <Link href={"https://g.co/kgs/riVRJDR"} target="_blank">
              <Button className="rounded-none bg-[#AE945A] px-7 py-6 font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#fff]">
                Get Direction
              </Button>
            </Link>
          </div>
          <p className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#AE945A]">
            Hours of Operation
          </p>
          <p className="font-oswald text-base font-[400] uppercase leading-[32px] tracking-[1px] text-[#fff]">
            Mon - Fri : 7am-6pm <br />
            Sat - Sun : 8am-6pm <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Find;
