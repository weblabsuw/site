"use client";

import type { EventItem } from "@/lib/events";
import {
  UpcomingEventsGrid,
  UpcomingEventsGridItem,
  PastEventsGrid,
  PastEventsGridItem,
} from "@/components/events/events-grid";

export function EventsList({ events }: { events: EventItem[] }) {
  const sortEvents = (a: EventItem, b: EventItem) => { // ascending order
    if (!a.date || !b.date) return 0;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  }

  const upcomingEvents = events.filter((event) => !event.archived).sort(sortEvents); // earlier dates first
  const pastEvents = events.filter((event) => event.archived).sort(sortEvents).reverse(); // later dates first

  return (
    <section className="container max-w-6xl px-8 pt-12 pb-16 leading-relaxed">
      <h2 className="text-2xl font-bold">
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
