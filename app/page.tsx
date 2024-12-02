import Link from 'next/link';

import { Ticker } from "@/components/ui/ticker";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function HomePage() {
  return (<>
    <Navbar/>

    <section className="container max-w-5xl px-8 pt-24 pb-16 leading-relaxed">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        WebLabs
      </h1>
      
      <p className="mt-6">
        We are a student org <span className="font-medium text-onPrimary bg-primary px-1 rounded-md">@ UW-Madison</span> dedicated to building websites together.
        We build real projects together and learn from each other along the way. <span className="text-primary/75">(↓ scroll to learn more!)</span>
      </p>

      <p className="mt-6">
        Whether you&apos;re a self-described (or aspiring ◡̈) designer, programmer, engineer, founder, or just someone who wants to learn more about the web, we welcome you to join us.
      </p>

      <p className="mt-6 pl-4 border-l-[3px] border-onSurface/10 font-medium">
        We&apos;re kicking off in Spring 2025. Stay tuned!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button className="px-4 py-2 font-bold text-onPrimary bg-primary rounded-lg">
          Join Discord
        </button>

        <div className="px-4 py-4 sm:py-2 text-primary bg-primary/10 rounded-lg">
          <p className="text-base sm:text-sm font-medium">
            Join our mailing list
          </p>
          <div className="mt-1 sm:mt-0.5 flex gap-1">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-48 px-2.5 py-0.5 text-sm sm:text-xs text-onSurface bg-surface border border-primary rounded-full focus:outline-none"
            />
            <button className="px-3 py-0.5 text-sm sm:text-xs font-bold text-onPrimary bg-primary rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12">
      <Ticker
        speed={100}
        direction="left"
        allowDrag
      >
        <div className="w-[20rem] aspect-[4/3] rounded-xl bg-primary/10"/>
        <div className="w-[20rem] aspect-[4/3] rounded-xl bg-primary/10"/>
        <div className="w-[20rem] aspect-[4/3] rounded-xl bg-primary/10"/>
        <div className="w-[20rem] aspect-[4/3] rounded-xl bg-primary/10"/>
      </Ticker>
    </section>

    <section className="px-4 py-24 container max-w-5xl">
      <div className="px-12 py-8 text-onPrimary bg-primary rounded-3xl">
        <h2 className="text-3xl font-extrabold">
          Events
        </h2>

        <p className="">
          Learn how to build websites with us!
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="px-6 py-4 border-2 border-primary/10 rounded-xl">
          <h3 className="font-bold underline underline-offset-2">
            Workshops
          </h3>
          <p className="mt-1 text-xs">
            Hands-on project building sessions, happening every other week.
          </p>
        </div>

        <div className="px-6 py-4 border-2 border-primary/10 rounded-xl">
          <h3 className="font-bold underline underline-offset-2">
            Social events
          </h3>
          <p className="mt-1 text-xs">
            Games &amp; challenges, share your projects, and hang out with us!
          </p>
        </div>

        <div className="px-6 py-4 border-2 border-primary/10 rounded-xl">
          <h3 className="font-bold underline underline-offset-2">
            Speaker events
          </h3>
          <p className="mt-1 text-xs">
            Meet pros in the field, opportunities to network.
          </p>
        </div>
      </div>

      <hr className="mt-8 border-onSurface/10"/>

      <div className="mt-8 flex items-center gap-1.5">
        <div className="size-2.5 rounded-full bg-green-400 animate-pulse"/>
        <p className="text-xs">
          Live from the <Link href="/events" className="underline font-medium">Events page</Link>
        </p>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        <h3 className="sr-only">Latest events</h3>

        <div className="bg-primary/10 rounded-3xl overflow-hidden">
          <img
            className="hidden md:block w-full aspect-video object-cover object-center bg-primary/10"
          />

          <div className="px-6 md:pt-4 py-6">
            <h3 className="text-base leading-tight font-bold">
              Personal Website Workshop
            </h3>
            <div className="mt-1.5 flex gap-2 items-center text-xs font-medium">
              <span className="px-1.5 text-primary border-2 border-primary">Planned</span>
            </div>
            <p className="mt-3 text-xs">
              Building a personal portfolio website to showcase your projects and skills.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 rounded-3xl overflow-hidden">
          <img
            className="hidden md:block w-full aspect-video object-cover object-center bg-primary/10"
          />

          <div className="px-6 md:pt-4 py-6">
            <h3 className="text-base leading-tight font-bold">
              TODO-list Galore Workshop
            </h3>
            <div className="mt-1.5 flex gap-2 items-center text-xs font-medium">
              <span className="px-1.5 text-primary border-2 border-primary">Planned</span>
            </div>
            <p className="mt-3 text-xs">
              Building todo-list apps from scratch with vanilla JavaScript, React, and Svelte.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 rounded-3xl overflow-hidden">
          <img
            className="hidden md:block w-full aspect-video object-cover object-center bg-primary/10"
          />

          <div className="px-6 md:pt-4 py-6">
            <h3 className="text-base leading-tight font-bold">
              Prototyping in Figma
            </h3>
            <div className="mt-1.5 flex gap-2 items-center text-xs font-medium">
              <span className="px-1.5 text-primary border-2 border-primary">Planned</span>
            </div>
            <p className="mt-3 text-xs">
              Creating interactive prototypes for websites and apps using Figma.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Link href="/events">
          <button className="px-4 py-2 font-bold text-onPrimary bg-primary rounded-lg">
            View all events →
          </button>
        </Link>
      </div>
    </section>

    <Footer/>
  </>);
}
