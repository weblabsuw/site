import { Ticker } from "@/components/ui/ticker";

export function Slideshow() {
  return (
    <section className="py-12">
      <Ticker speed={60} direction="left" allowDrag>
        <div className="w-[20rem] aspect-[4/3] rounded-xl bg-primary/10" />
        <div className="w-[20rem] aspect-[4/3] rounded-xl bg-primary/10" />
        <div className="w-[20rem] aspect-[4/3] rounded-xl bg-primary/10" />
        <div className="w-[20rem] aspect-[4/3] rounded-xl bg-primary/10" />
      </Ticker>
    </section>
  );
}
