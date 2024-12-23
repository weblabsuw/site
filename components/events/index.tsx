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

    <EventsList events={events}/>
    
    <Footer/>
  </>);
}
