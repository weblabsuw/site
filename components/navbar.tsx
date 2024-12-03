"use client";
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { HiBars2, HiXMark } from "react-icons/hi2";

export default function Navbar({ active, className, ...rest }: { active?: string, className?: string, [key: string]: any }) {
  return (
    <>
      <Desktop active={active} className={cn("hidden sm:flex sticky top-0 z-20", className)} {...rest} />
      <Mobile active={active} className={cn("sm:hidden sticky top-0 z-20", className)} {...rest} />
    </>
  );
}

function Desktop({ active, className, ...rest }: { active?: string, className?: string, [key: string]: any }) {
  return (
    <nav
      className={cn("container max-w-7xl px-8 py-3 flex justify-between items-end gap-4 text-onSurface bg-surface border-b-2 border-primary/10", className)}
      {...rest}  
    >
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

      <div className="flex gap-8 text-sm font-medium">
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

function Mobile({ active, className, ...rest }: { active?: string, className?: string, [key: string]: any }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={cn("container max-w-7xl px-8 py-3 text-onSurface bg-surface border-b-2 border-primary/10", className)}
      {...rest}
    >
      <div className="flex justify-between items-center gap-4">
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

        <div className="flex gap-8">
          <button
            onClick={() => setOpen(!open)}
          >
            {open ?
              <HiXMark size={24} strokeWidth={1}/>
              : <HiBars2 size={24} strokeWidth={1}/>
            }
          </button>
        </div>
      </div>
      
      <div className={cn("mt-8 flex-col gap-4 text-xl font-medium", open ? "flex" : "hidden")}>
        <Link
          href="/about"
          className={cn(active === "about" ? "underline decoration-2 underline-offset-4" : "opacity-60 hover:opacity-100 transition-opacity")}
        >
          About
        </Link>

        <Link
          href="/events"
          className={cn(active === "events" ? "underline decoration-2 underline-offset-4" : "opacity-60 hover:opacity-100 transition-opacity")}
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