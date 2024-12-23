import { getEventSlugs, getEvent } from "@/lib/events";

import { EventPage } from "@/components/events/page";

export function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function Page(props: Promise<{ params: { slug: string } }>) {
  const { slug } = (await props).params;
  const { Content, metadata } = await getEvent(slug);

  return (<EventPage Content={Content} metadata={metadata}/>);
}