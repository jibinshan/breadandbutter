import Hero from "@/app/table-booking/(section)/Hero";
import TableBooking from "@/app/table-booking/(section)/TableBooking";
import Footer from "@/components/Footer";
import NavbarS from "@/components/NavbarS";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-transparent">
        <NavbarS position="absolute" />
        <Hero />
        <TableBooking />
        <Footer />
      </div>
    </main>
  );
}
