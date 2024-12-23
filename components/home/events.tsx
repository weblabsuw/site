import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Events() {
  return (
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
          <Button className="px-4 py-2 font-bold text-onPrimary bg-primary rounded-lg">
            View all events →
          </Button>
        </Link>
      </div>
    </section>
  );
}
