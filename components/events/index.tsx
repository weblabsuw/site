import type { EventItem } from "@/lib/events";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { EventsList } from "./events-list";

interface EventsPageProps {
  events: EventItem[];
}

export function EventsPage({ events }: EventsPageProps) {
  return (<>
    <Navbar active="events"/>

    <header className="text-onPrimary bg-primary">
      <div className="container max-w-6xl px-4 pt-12 pb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Events
        </h1>
        <p className="mt-1">
          We host events roughly every week. Come hang out with us!
        </p>
      </div>
    </header>

    <EventsList events={events}/>
    
    <Footer/>
  </>);
}
