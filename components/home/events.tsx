import Link from "next/link";

import { Button } from "@/components/ui/button";

export async function Events() {
  return (
    <section className="px-4 py-24 container max-w-5xl">
      <div className="px-8 md:px-12 py-8 text-onPrimary bg-primary rounded-3xl">
        <h2 className="text-3xl font-extrabold">What we do</h2>

        <p className="">Learn how to build websites with us!</p>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="px-6 py-4 border-2 border-primary/10 rounded-xl">
          <h3 className="font-bold underline underline-offset-2">Workshops</h3>
          <p className="mt-1 text-xs">
            Hands-on project building sessions, happening every other week.
          </p>
        </div>

        <div className="px-6 py-4 border-2 border-primary/10 rounded-xl">
          <h3 className="font-bold underline underline-offset-2">
            Industry projects
          </h3>
          <p className="mt-1 text-xs">
            Work in teams for real-world clients or on creative ideas.
          </p>
        </div>

        <div className="px-6 py-4 border-2 border-primary/10 rounded-xl">
          <h3 className="font-bold underline underline-offset-2">Community</h3>
          <p className="mt-1 text-xs">
            We're designers, coders, engineers, founders, learners, and makers.
          </p>
        </div>
      </div>

      {/* <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div> */}

      <div className="mt-8 flex justify-end">
        <Link href="/about">
          <Button className="px-4 py-2 font-bold text-onPrimary bg-primary rounded-lg">
            Learn more →
          </Button>
        </Link>
      </div>
    </section>
  );
}
