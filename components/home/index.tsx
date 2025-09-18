import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { Web } from "@/components/web";
// import { Slideshow } from "./slideshow";
import { Events } from "./events";

export function HomePage() {
  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Web className="text-primary/5 absolute scale-150 -bottom-[300px] -left-[250px] rotate-[210deg]" />
        <Web className="hidden md:block text-primary/5 absolute scale-150 -bottom-[250px] -right-[290px] rotate-[100deg]" />
      </div>

      <Navbar active="home" />

      <Hero />

      {/* <Slideshow/> */}

      <Events />

      <Footer />
    </>
  );
}
