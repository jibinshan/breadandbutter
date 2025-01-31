import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="h-full w-full">
      <div>
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-3 py-28 lg:py-48"
          style={{
            backgroundImage: "url('/images/follow/cup.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-center font-oswald text-5xl font-[400] uppercase text-[#fff] lg:text-8xl lg:leading-[105px]">
              Follow us
            </h1>
            <Image
              src={"/images/quality/w-underline.svg"}
              width={507}
              height={12}
              alt="underline"
              className="h-2 w-[150px] object-cover lg:w-[300px]"
            />
          </div>
          <Link
            href={"https://www.instagram.com/breadandbuttercafe/?hl=en"}
            target="_blank"
          >
            <p className="text-center font-oswald text-xl font-[400] uppercase text-[#fff] lg:text-3xl">
              @bread&butter
            </p>
          </Link>
        </div>
        <div>
          <Image
            src={"/images/follow/image.png"}
            width={1920}
            height={345}
            alt="open"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Follow;
