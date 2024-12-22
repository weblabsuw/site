"use client";

import type { EventItem } from "@/lib/events";
import {
  UpcomingEventsGrid,
  UpcomingEventsGridItem,
  PastEventsGrid,
  PastEventsGridItem,
} from "@/components/events/events-grid";

export default function Events({ events }: { events: EventItem[] }) {
  const upcomingEvents = events.filter((event) =>
    !event.date || isNaN(new Date(event.date).getTime()) // events that have no/invalid date
    || new Date(event.date) >= new Date() // events that haven't happened yet
  );

  const pastEvents = events.filter((event) =>
    !!event.date && new Date(event.date) < new Date() // events that have happened
  );

  return (
    <section className="container max-w-6xl px-8 py-16 leading-relaxed">
      <div className="px-8 md:px-12 py-8 text-onPrimary bg-primary rounded-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Events
        </h1>
        <p className="mt-1">
          We host events roughly every week. Come hang out with us!
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold">
        Upcoming events
      </h2>
      
      {upcomingEvents.length > 0 ?
        <UpcomingEventsGrid className="mt-4">
          {upcomingEvents.map((event) => (
            <UpcomingEventsGridItem
              key={event.slug}
              slug={event.slug}

              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
            />
          ))}
        </UpcomingEventsGrid>
      :
        <p className="mt-1 text-sm text-onSurface/50">
          No announced events yet, but we're planning some cool stuff. Check back soon!
        </p>
      }
      
      <h2 className="mt-12 text-2xl font-bold">
        Past events
      </h2>
      
      {pastEvents.length > 0 ?
        <PastEventsGrid className="mt-4">
          {pastEvents.map((event) => (
            <PastEventsGridItem
              key={event.slug}
              slug={event.slug}
              
              title={event.title}
              date={event.date}
              description={event.description}
              attendance={event.attendance}
            />
          ))}
        </PastEventsGrid>
      :
        <p className="mt-1 text-sm text-onSurface/50">
          No past events yet.
        </p>
      }
    </section>
  );
}
