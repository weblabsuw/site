import Image from "next/image";
import { FaDiscord, FaInstagram } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { MailingListForm } from "@/components/mailing-list-form";

export function Hero() {
  return (
    <section className="container max-w-6xl px-8 py-16 flex flex-col lg:flex-row lg:items-end gap-24 lg:gap-16 leading-relaxed">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          WebLabs
        </h1>
        
        <p className="mt-6">
          We are a student org <span className="font-medium text-onPrimary bg-primary px-1 rounded-md">@ UW-Madison</span> dedicated to building websites together.
          We build real projects together and learn from each other along the way.
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
      </div>

      <div className="lg:max-w-[20rem]">
        <div className="flex items-end gap-4">
          <Image
            src="/images/mailbox.png"
            alt="Mailbox"
            width={80}
            height={80}
          />

          <div className="py-2">
            <h2 className="text-lg font-bold italic">
              Join our mailing list!
            </h2>
            <p className="text-xs leading-tight opacity-30">
              Stay updated on our latest events.
            </p>
          </div>
        </div>
        
        <div className="px-8 py-6 bg-primary/5 rounded-3xl shadow-inner">
          <MailingListForm/>
        </div>
      </div>
    </section>
  );
}