import { getAllEvents } from "@/lib/events";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Events from "./Events";

export default function EventsPage() {
  const events = getAllEvents();

  return (<>
    <Navbar active="events"/>

    <Events events={events}/>
    
    <Footer/>
  </>);
}
