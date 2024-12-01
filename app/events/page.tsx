import Link from 'next/link';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function EventsPage() {
  return (<>
    <Navbar active="events"/>

    <section className="container max-w-6xl px-8 py-16 leading-relaxed">
      <div className="px-12 py-8 text-onPrimary bg-primary rounded-3xl">
        <h1 className="text-4xl font-extrabold">
          Events
        </h1>
        <p className="mt-1">
          We host events roughly every week. Come hang out with us!
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold">
        Upcoming events
      </h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="px-6 py-6 rounded-3xl border-2 border-primary">
          <h3 className="text-base leading-tight font-bold">
            Personal Website Workshop
          </h3>
          <div className="mt-1.5 flex items-center gap-2 text-xs font-medium">
            <span className="px-1.5 text-primary border-2 border-primary">MM/DD</span>
            <span className="px-1.5 text-onPrimary bg-primary">Design</span>
            <span className="px-1.5 text-onPrimary bg-primary">Dev</span>
          </div>
          <p className="mt-3 text-xs">
            Building a personal portfolio website to showcase your projects and skills.
          </p>
        </div>

        <div className="px-6 py-6 rounded-3xl border-2 border-primary">
          <h3 className="text-base leading-tight font-bold">
            TODO-list Galore Workshop
          </h3>
          <div className="mt-1.5 flex items-center gap-2 text-xs font-medium">
            <span className="px-1.5 text-primary border-2 border-primary">MM/DD</span>
            <span className="px-1.5 text-onPrimary bg-primary">Dev</span>
          </div>
          <p className="mt-3 text-xs">
            Building todo-list apps from scratch with vanilla JavaScript, React, and Svelte.
          </p>
        </div>

        <div className="px-6 py-6 rounded-3xl border-2 border-primary">
          <h3 className="text-base leading-tight font-bold">
            Prototyping in Figma
          </h3>
          <div className="mt-1.5 flex items-center gap-2 text-xs font-medium">
            <span className="px-1.5 text-primary border-2 border-primary">MM/DD</span>
            <span className="px-1.5 text-onPrimary bg-primary">Design</span>
          </div>
          <p className="mt-3 text-xs">
            Creating interactive prototypes for websites and apps using Figma.
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold">
        Past events
      </h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-primary/10 rounded-3xl overflow-hidden">
          <img
            className="hidden sm:block w-full aspect-video object-cover object-center bg-primary/10"
          />

          <div className="px-6 md:pt-4 py-6">
            <h3 className="text-base leading-tight font-bold">
              Personal Website Workshop
            </h3>
            <div className="mt-1.5 flex gap-2 items-center text-xs font-medium">
              <span className="px-1.5 text-primary border-2 border-primary">MM/DD/YYYY</span>
              <span className="px-1.5 text-onPrimary bg-primary">Design</span>
              <span className="px-1.5 text-onPrimary bg-primary">Dev</span>
            </div>
            <p className="mt-3 text-xs">
              Building a personal portfolio website to showcase your projects and skills.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 rounded-3xl overflow-hidden">
          <img
            className="hidden sm:block w-full aspect-video object-cover object-center bg-primary/10"
          />

          <div className="px-6 md:pt-4 py-6">
            <h3 className="text-base leading-tight font-bold">
              TODO-list Galore Workshop
            </h3>
            <div className="mt-1.5 flex gap-2 items-center text-xs font-medium">
              <span className="px-1.5 text-primary border-2 border-primary">MM/DD/YYYY</span>
              <span className="px-1.5 text-onPrimary bg-primary">Dev</span>
            </div>
            <p className="mt-3 text-xs">
              Building todo-list apps from scratch with vanilla JavaScript, React, and Svelte.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 rounded-3xl overflow-hidden">
          <img
            className="hidden sm:block w-full aspect-video object-cover object-center bg-primary/10"
          />

          <div className="px-6 md:pt-4 py-6">
            <h3 className="text-base leading-tight font-bold">
              Prototyping in Figma
            </h3>
            <div className="mt-1.5 flex gap-2 items-center text-xs font-medium">
              <span className="px-1.5 text-primary border-2 border-primary">MM/DD/YYYY</span>
              <span className="px-1.5 text-onPrimary bg-primary">Design</span>
            </div>
            <p className="mt-3 text-xs">
              Creating interactive prototypes for websites and apps using Figma.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </>);
}
