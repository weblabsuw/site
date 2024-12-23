import { getAllEvents } from "@/lib/events";

import { EventsPage } from "@/components/events";

export default async function Page() {
  const events = await getAllEvents();

  return (<EventsPage events={events}/>);
}
