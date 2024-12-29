
import Link from "next/link";
import { EventMetadata } from "@/lib/events";

import { Navbar } from "@/components/navbar";
import { Letterhead } from "./letterhead";

interface EventPageProps {
  Content: React.ComponentType;
  metadata: EventMetadata;
}

export function EventPage({ Content, metadata }: EventPageProps) {
  return (<>
    <Navbar active="events"/>

    <article className="container max-w-3xl px-4 pt-8 pb-16">
      <Link href="/events" className="opacity-75 hover:opacity-100 text-primary font-medium transition-opacity">
        ← Back to events
      </Link>

      <Letterhead metadata={metadata}/>

      <hr className="my-8 border-[1px] border-onSurface/10"/>
      
      <div className="max-w-none prose prose-sm prose-neutral prose-p:my-2 prose-h2:mb-2 prose-code:text-sm prose-code:font-medium">
        <Content/>
      </div>
    </article>
  </>);
}