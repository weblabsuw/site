import Link from 'next/link';

import Navbar from "@/components/navbar";

export default function AboutPage() {
  return (<>
    <Navbar active="about"/>

    <section className="container max-w-4xl px-8 py-16 leading-relaxed">
      <h1 className="text-4xl font-extrabold">
        About WebLabs
      </h1>
    </section>
  </>);
}
