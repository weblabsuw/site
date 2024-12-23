import { getEventSlugs, getEvent } from "@/lib/events";

import { EventPage } from "@/components/events/page";

export function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { Content, metadata } = await getEvent(slug);

  return (<EventPage Content={Content} metadata={metadata}/>);
}