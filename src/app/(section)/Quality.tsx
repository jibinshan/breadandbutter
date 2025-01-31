import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Quality: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#FFF6EB] px-4 py-12 lg:px-[70px] lg:pb-[580px] lg:pt-24 xl:px-[120px] 2xl:px-[160px]">
      <div className="absolute bottom-4 left-0 right-0 hidden items-center justify-between px-36 lg:flex">
        <div className="mb-36 flex-shrink-0">
          <Image
            src={"/images/quality/open.png"}
            width={539}
            height={344}
            alt="open"
            className="w-[350px] object-cover"
          />
        </div>

        <div className="flex-shrink-0">
          <Image
            src={"/images/quality/cake.png"}
            width={496}
            height={358}
            alt="cake"
            className="w-[350px] object-cover"
          />
        </div>

        <div className="mb-36 flex-shrink-0">
          <Image
            src={"/images/quality/food.png"}
            width={320}
            height={344}
            alt="food"
            className="w-[230px] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="flex flex-col items-start gap-2 lg:gap-4">
              <h1 className="font-os font-oswald text-5xl font-[400] uppercase text-[#0D0D0D] lg:text-8xl lg:leading-[110px]">
                passion <br /> for quality
              </h1>
              <Image
                src={"/images/quality/b-underline.svg"}
                width={507}
                height={12}
                alt="underline"
                className="w-[150px] object-cover lg:w-[300px]"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 pt-6 lg:flex-row lg:gap-0 lg:pr-20 lg:pt-14">
              <h6 className="font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#000]">
                About Us
              </h6>
              <div className="flex flex-col gap-6">
                <p className="w-full max-w-[320px] font-cormorant text-sm font-[500] uppercase leading-[130%] text-[#000]">
                  At Bread & Butter, we believe great food starts with the
                  finest ingredients. Born from a passion for quality and
                  community, our café serves as a haven for Haggerston locals
                  and visitors alike. From freshly brewed coffee to handcrafted
                  sandwiches, every item on our menu is a labor of love. Step in
                  and savor the charm of a neighborhood café that truly cares.
                </p>
                <div>
                  <Link href={"/menu"}>
                    <Button className="rounded-none bg-[#AE945A] px-7 py-6 text-center font-oswald text-base font-[400] uppercase leading-[25px] tracking-[1px] text-[#fff]">
                      View Menu
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={"/images/quality/cup.png"}
              width={507}
              height={12}
              alt="underline"
              className="h-[200px] w-full object-cover lg:h-[460px] lg:w-[460px] lg:object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
