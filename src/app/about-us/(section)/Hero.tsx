import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-[#0D0D0D] lg:text-6xl">
                Welcome to
                <br /> Bread and Butter - Where
                <br /> Every Bite is an
                <br /> Art Form
              </h1>
              <p className="font-manrope font-normal text-[#000]">
                Experience the perfect blend of flavor and craftsmanship at
                Bread & Butter. From our carefully curated ingredients to our
                expertly crafted dishes, every bite is a celebration of taste.
                Whether you`re here for a hearty meal or a delightful treat, we
                promise an unforgettable dining experience where quality meets
                passion.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/hero.jpg"
              width={951}
              height={975}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
