import { Event, dateConfig, timeConfig } from "@/content/events";

export function EventCard({ event }: { event: Event; }) {
  const hasLink = event.status === "past" && event.link;

  const content = (
    <div className={`group bg-primary/10 rounded-3xl overflow-hidden h-full flex flex-col px-6 md:py-4 py-6 transition ${hasLink ? "hover:shadow-md hover:-rotate-1 hover:bg-primary/15" : ""}`}>
      <h3 className="text-base leading-tight font-bold">{event.title}</h3>
      <div className="mt-1.5 flex gap-2 items-center text-xs font-medium">
        <span className={`px-1.5 border-2 ${event.status === "past"
            ? "bg-primary text-onPrimary border-primary"
            : "text-primary border-primary"}`}>
          {event.status}
        </span>
      </div>
      <p className="mt-3 text-xs">{event.description}</p>
      <div className="flex-grow" />
      {hasLink && (
        <p className="mt-2 text-xs text-primary underline font-medium">
          Slides link
        </p>
      )}
      <p className="mt-2 text-xs italic text-primary/80">
        {typeof event.date === "string"
          ? event.date
          : event.date.toLocaleDateString("en-US", {
            ...dateConfig,
            // don't display time if it's midnight (default)
            ...(event.date instanceof Date &&
              event.date.getHours() !== 0
              ? timeConfig
              : {}),
          } as Intl.DateTimeFormatOptions)}
      </p>
    </div>
  );

  if (event.status === "past" && event.link) {
    return (
      <a key={event.title} href={event.link} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <div key={event.title}>{content}</div>;
}
