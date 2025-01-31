import Menu from "@/app/menu/Menu";
import MenuMobile from "./MenuMobile";
import NavbarS from "@/components/NavbarS";

export default function MenuPage() {
  return (
    <section className="flex w-full flex-col items-center justify-start bg-[#FFF6EB]">
      <div className="hidden w-full justify-center md:flex">
        <NavbarS position="static" />
      </div>
      <div className="hidden w-full items-center justify-center md:mt-12 md:flex">
        <Menu />
      </div>
      <div className="flex w-full items-center justify-center md:hidden">
        <MenuMobile />
      </div>
    </section>
  );
}
