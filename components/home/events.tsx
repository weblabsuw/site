import Link from "next/link";

import { Button } from "@/components/ui/button";
import { events, calendarLink } from "@/content/events";
import { FaCalendarPlus } from "react-icons/fa6";

export async function Events() {
  return (
    <section className="px-4 py-24 container max-w-5xl md:bg-onPrimary/50 md:backdrop-blur-sm">
      <div className="px-8 md:px-12 py-8 text-onPrimary bg-primary rounded-3xl">
        <h2 className="text-3xl font-extrabold">What we do</h2>

        <p className="">
          We host competition-style events to connect with others, refresh
          skills, and learn about web development tools!
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="px-6 py-4 border-2 border-primary/10 rounded-xl">
          <h3 className="font-bold">WebFest</h3>
          <p className="mt-1 text-xs">
            A series of ~2 hour long themed webdev events that foster a
            collaborative and gamified experience around learning and mastering
            web development topics.
          </p>
        </div>

        {/* <div className="px-6 py-4 border-2 border-primary/10 rounded-xl">
          <h3 className="font-bold underline underline-offset-2">
            Industry projects
          </h3>
          <p className="mt-1 text-xs">
            Work in teams for real-world clients or on creative ideas.
          </p>
        </div> */}

        <div className="px-6 py-4 border-2 border-primary/10 rounded-xl">
          <h3 className="font-bold">Community</h3>
          <p className="mt-1 text-xs">
            We're designers, coders, engineers, founders, learners, and makers.
            Join us to collaborate, share knowledge, and grow together.
          </p>
        </div>
      </div>

      <h3 className="font-bold text-3xl text-center mt-8 mb-2">Events</h3>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-6 bg-onPrimary/20">
        {events.map((event) => (
          <div
            key={event.title}
            className="group bg-primary/10 rounded-3xl overflow-hidden h-full flex flex-col px-6 md:py-4 py-6 hover:shadow-md hover:-rotate-1 hover:bg-primary/15 transition"
          >
            <h3 className="text-base leading-tight font-bold">{event.title}</h3>
            <div className="mt-1.5 flex gap-2 items-center text-xs font-medium">
              <span className="px-1.5 text-primary border-2 border-primary">
                {event.status}
              </span>
            </div>
            <p className="mt-3 text-xs">{event.description}</p>
            <div className="flex-grow" />
            <p className="mt-2 text-xs italic text-primary/80">
              {typeof event.date === "string"
                ? event.date
                : event.date.toLocaleDateString("en-US", {
                    timeZone: "UTC",
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between gap-8">
        <a
          href={calendarLink}
          target="_blank"
          rel="noreferrer"
        >
          <Button className="group px-4 py-2 text-primary bg-surface border-2 border-primary rounded-lg">
            <FaCalendarPlus className="inline mb-1 mr-2 group-hover:-rotate-6 transition" />
            Follow on Google Calendar
          </Button>
        </a>
        <Link href="/about">
          <Button className="group px-4 py-2 font-bold text-onPrimary bg-primary rounded-lg">
            Learn more
            <span className="ml-2 group-hover:translate-x-1 transition inline-block">
              →
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
