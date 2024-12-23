import { getAllEvents } from "@/lib/events";

import { EventsPage } from "@/components/events";

export default function Page() {
  const events = getAllEvents();

  return (<EventsPage events={events}/>);
}
