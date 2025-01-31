import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#FFF6EB]">
        <h2 className="text-center font-oswald text-8xl text-[#0D0D0D] md:left-[15%] md:text-8xl">
          The Istanbul
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#FFF6EB] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-oswald text-6xl text-[#0D0D0D] sm:text-7xl md:text-start">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#000] md:text-start">
              What started as a simple vision—to redefine the steak
              experience—has grown into a haven for food lovers. In 2015, the
              founders of Bread & Butter set out with one goal: to craft the
              ultimate steak, where every bite is a masterpiece. From a small
              kitchen to a renowned destination, we`ve stayed true to our
              commitment to quality, flavor, and hospitality.
              <br />
              <br />
              Every cut is hand-selected, every dish is prepared with precision,
              and every meal tells a story of passion and expertise. As we
              continue to grow, our mission remains unchanged—to serve not just
              steak, but an unforgettable experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
