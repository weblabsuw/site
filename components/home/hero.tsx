import { FaDiscord, FaInstagram } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container max-w-5xl px-8 py-16 leading-relaxed">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        WebLabs
      </h1>
      
      <p className="mt-6">
        We are a student org <span className="font-medium text-onPrimary bg-primary px-1 rounded-md">@ UW-Madison</span> dedicated to building websites together.
        We build real projects together and learn from each other along the way. <span className="text-primary/75">(↓ scroll to learn more!)</span>
      </p>

      <p className="mt-6">
        Whether you&apos;re a self-described (or aspiring) designer, programmer, engineer, founder, or just someone who wants to learn more about the web, we welcome you to join us.
      </p>

      <p className="mt-6 pl-4 border-l-[3px] border-onSurface/10 font-medium">
        We&apos;re kicking off in Spring 2025. Stay tuned!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 text-sm font-bold mt-8">
        <Button className="px-4 py-2 flex items-center justify-center gap-1.5 text-onPrimary bg-primary rounded-lg">
          Join our community <FaDiscord size={20}/>
        </Button>

        <Button className="px-4 py-2 flex items-center justify-center gap-1.5 text-primary bg-surface border-2 border-primary rounded-lg">
          Follow us <FaInstagram size={20}/>
        </Button>
      </div>
    </section>
  );
}
