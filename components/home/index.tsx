import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { Slideshow } from "./slideshow";
import { Events } from "./events";

export function HomePage() {
  return (<>
    <Navbar active="home"/>

    <Hero/>

    <Slideshow/>

    <Events/>

    <Footer/>
  </>);
}
