import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar({ active }: { active?: string }) {
  return (
    <nav className="sticky top-0 container max-w-7xl px-8 py-3 flex justify-between items-end gap-4 text-onSurface bg-surface border-b-2 border-primary/10">
      <Link href="/">
        <div>
          <p className="text-2xl leading-none font-bold">
            <span className="text-transparent stroke">ww</span>
            <span className="text-primary">weblabs</span>
          </p>

          {/* <p className="text-xl leading-none font-bold pl-2.5 pr-4 py-1 border border-onSurface/25 bg-onSurface/5 rounded-full">
            <span>🔍 </span>
            <span className="text-transparent stroke">ww</span>
            <span className="text-primary">weblabs</span>
          </p> */}
        </div>
      </Link>

      <div className="hidden sm:flex gap-8 text-sm font-medium">
        <Link
          href="/about"
          className={cn(active === "about" ? "border-b-2 border-onSurface" : "opacity-60 hover:opacity-100 transition-opacity")}
        >
          About
        </Link>

        <Link
          href="/events"
          className={cn(active === "events" ? "border-b-2 border-onSurface" : "opacity-60 hover:opacity-100 transition-opacity")}
        >
          Events
        </Link>

        <Link href="/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
          Discord ↗
        </Link>
      </div>
    </nav>
  );
}
