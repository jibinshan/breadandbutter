import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Find: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#241111] px-4 py-12 lg:px-24 lg:py-24">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-40">
        <div className="w-full lg:w-1/2">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.0897861404314!2d-0.40293702352054145!3d51.65819247184798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac1b7fb7d5b%3A0xc1a37871c6ea6f29!2s72-74%20The%20Parade%2C%20High%20St%2C%20Watford%20WD17%201AW%2C%20UK!5e0!3m2!1sen!2sin!4v1737193493022!5m2!1sen!2sin"
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
          <p className="font-oswald text-base font-[400] uppercase leading-[30px] tracking-[1px] text-[#fff]">
            72-74 Parade Watford <br /> Hertfordshire WD17 1AW
          </p>
          <div>
            <Button className="font-oswald rounded-none bg-[#AE945A] px-7 py-6 text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#fff]">
              Get Direction
            </Button>
          </div>
          <p className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#AE945A]">
            Hours of Operation
          </p>
          <p className="font-oswald text-base font-[400] uppercase leading-[32px] tracking-[1px] text-[#fff]">
            Mon - friday : 12pm-10pm <br />
            sat - SUN : 12pm-10pm <br />
            Monday - closed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Find;
