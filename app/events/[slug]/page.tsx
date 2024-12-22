import Link from "next/link";
import { getEventSlugs, getEvent } from "@/lib/events";
import { HiUser, HiClock, HiMapPin } from "react-icons/hi2";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function EventPage({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  const { Content, metadata } = await getEvent(slug);

  return (<>
    <Navbar active="events"/>

    <article className="container max-w-5xl px-8 py-8">
      <Link href="/events" className="opacity-75 hover:opacity-100 text-primary font-medium transition-opacity">
        ← Back to events
      </Link>

      <h1 className="mt-4 text-2xl md:text-3xl font-extrabold">
        {metadata.title ?? "Untitled Event"}
      </h1>

      <div className="mt-1.5 flex gap-2.5 items-center text-sm font-medium">
        <span className="pl-1 pr-1.5 py-0.5 flex items-center gap-0.5 text-primary border-2 border-primary">
          <HiClock size={12}/>
          {metadata.date ?
            (isValidDate(metadata.date) ? new Date(metadata.date).toLocaleDateString(
              "en-US",
              { weekday: "short", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", hour12: true }
            ) : metadata.date)
          :
            "Undated"
          }
        </span>

        {metadata.location &&
          <span className="pl-1 pr-1.5 py-0.5 flex items-center gap-0.5 text-onPrimary bg-primary">
            <HiMapPin size={12}/> {metadata.location}
          </span>
        }

        {metadata.attendance &&
          <span className="pl-1 pr-1.5 py-0.5 flex items-center gap-0.5 text-onPrimary bg-primary">
            <HiUser size={12}/> {metadata.attendance}
          </span>
        }
      </div>

      <hr className="my-8 border-[1px] border-onSurface/10"/>
      
      <div className="prose prose-sm prose-neutral prose-p:my-2 prose-h2:mb-2">
        <Content/>
      </div>
    </article>

    <Footer/>
  </>);
}

function isValidDate(dateString: string) {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}