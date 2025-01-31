import Contact from "@/app/contact/(section)/Contact";
import Footer from "@/components/Footer";
import NavbarS from "@/components/NavbarS";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#fff5e5]">
        <NavbarS position="absolute" />
        <div className="h-[15vh] w-full bg-[#fff5e5]" id="hero"></div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default page;
