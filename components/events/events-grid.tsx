import Link from "next/link";
import { cn } from "@/lib/utils";

import { HiUser, HiClock, HiMapPin } from "react-icons/hi2";

interface UpcomingEventsGridProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function UpcomingEventsGrid({ children, className, ...rest }: UpcomingEventsGridProps) {
  return (
    <ul className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", className)} {...rest}>
      {children}
    </ul>
  );
}

interface UpcomingEventsGridItemProps {
  slug: string;
  title?: string;
  date?: string;
  location?: string;
  description?: string;
}

export function UpcomingEventsGridItem({ slug, title, date, location, description }: UpcomingEventsGridItemProps) {
  return (
    <Link href={`/events/${slug}`} className="group hover:scale-[1.01] transition-transform ease-in-out">
      <li className="px-6 py-6 rounded-3xl border-2 border-primary">
        <h3 className="text-base leading-tight font-bold group-hover:underline">
          {title ?? "Untitled Event"}
        </h3>

        <div className="mt-1.5 flex items-center gap-2 text-xs font-medium">
          <span className="pl-1 pr-1.5 py-0.5 flex items-center gap-0.5 text-primary border-2 border-primary">
            <HiClock size={12}/>
            {date ?
              (isValidDate(date) ? new Date(date).toLocaleDateString(
                "en-US",
                { weekday: "short", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", hour12: true }
              ) : date)
            : "Undated"}
          </span>
          
          <span className="pl-1 pr-1.5 py-0.5 flex items-center gap-0.5 text-onPrimary bg-primary">
            <HiMapPin size={12}/> {location ?? "TBD"}
          </span>
        </div>

        {description &&
          <p className="mt-3 text-xs">
            {description}
          </p>
        }
      </li>
    </Link>
  );
}

interface PastEventsGridProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}


export function PastEventsGrid({ children, className, ...rest }: PastEventsGridProps) {
  return (
    <ul className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", className)} {...rest}>
      {children}
    </ul>
  );
}

interface PastEventsGridItemProps {
  slug: string;
  title?: string;
  date?: string;
  description?: string;
  attendance?: number;
}

export function PastEventsGridItem({ slug, title, date, description, attendance }: PastEventsGridItemProps) {
  return (
    <Link href={`/events/${slug}`} className="group hover:scale-[1.01] transition-transform ease-in-out">
      <li className="px-6 py-6 bg-primary/10 rounded-3xl overflow-hidden">
        <h3 className="text-base leading-tight font-bold group-hover:underline">
          {title ?? "Untitled Event"}
        </h3>
        <div className="mt-1.5 flex gap-2 items-center text-xs font-medium">
          <span className="pl-1 pr-1.5 py-0.5 flex items-center gap-0.5 text-primary border-2 border-primary">
            <HiClock size={12}/>
            {date ?
              (isValidDate(date) ? new Date(date).toLocaleDateString(
                "en-US",
                { year: "2-digit", month: "numeric", day: "numeric" }
              ) : date)
            :
              "Undated"
            }
          </span>

          {attendance &&
            <span className="pl-1 pr-1.5 py-0.5 flex items-center gap-0.5 text-onPrimary bg-primary">
              <HiUser size={12}/> {attendance}
            </span>
          }
        </div>
        {description &&
          <p className="mt-3 text-xs">
            {description}
          </p>
        }
      </li>
    </Link>
  );
}

function isValidDate(dateString: string) {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}