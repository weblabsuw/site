import fs from "fs";
import path from "path";

export interface EventMetadata {
  title?: string;
  date?: string; // ISO 8601 date string
  location?: string;
  description?: string;
  attendance?: number; // number of people who attended the event
  archived?: boolean; // whether or not to show this event in the past events list, defaults to false
}

export interface EventItem extends EventMetadata {
  slug: string;
}

const eventsDir = path.join(process.cwd(), "content/events");

export function getEventSlugs() {
  return fs.readdirSync(eventsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllEvents() {
  return getEventSlugs().map((slug) => {
    const { metadata } = require(`@/content/events/${slug}.mdx`);
    return { slug, ...metadata } as EventItem;
  });
}
export async function getEvent(slug: string) {
  const eventModule = await import(`@/content/events/${slug}.mdx`);
  return {
    metadata: eventModule.metadata as EventMetadata,
    Content: eventModule.default,
  };
}