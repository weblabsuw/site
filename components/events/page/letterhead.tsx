import { EventMetadata } from "@/lib/events";

import { HiUser, HiClock, HiMapPin } from "react-icons/hi2";

export function Letterhead({ metadata }: { metadata: EventMetadata }) {
  return (
    <header>
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
    </header>
  );
}

function isValidDate(dateString: string) {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}