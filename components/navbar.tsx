"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/content/config";
import { HiBars2, HiXMark } from "react-icons/hi2";

export function Navbar({
  active,
  className,
  ...rest
}: {
  active?: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <>
      <Desktop
        active={active}
        className={cn("hidden sm:flex sticky top-0 z-20", className)}
        {...rest}
      />
      <Mobile
        active={active}
        className={cn("sm:hidden sticky top-0 z-20", className)}
        {...rest}
      />
    </>
  );
}

function Desktop({
  active,
  className,
  ...rest
}: {
  active?: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <nav
      className={cn(
        "px-8 py-3 flex justify-between items-end gap-4 text-onSurface bg-surface border-b-2 border-primary/10",
        className
      )}
      {...rest}
    >
      <Link href="/">
        <p className="text-2xl leading-none font-black">
          <span className="text-primary">weblabs</span>
          <span className="">.club</span>
        </p>
      </Link>

      <div className="flex gap-8 text-sm font-medium">
        <Link
          href="/about"
          className={cn(
            active === "about"
              ? "border-b-2 border-onSurface"
              : "opacity-60 hover:opacity-100 transition-opacity"
          )}
        >
          About
        </Link>

        {config.socials.discord && (
          <Link
            href={config.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            Discord ↗
          </Link>
        )}
      </div>
    </nav>
  );
}

function Mobile({
  active,
  className,
  ...rest
}: {
  active?: string;
  className?: string;
  [key: string]: any;
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={cn(
        "text-onSurface bg-surface border-b-2 border-primary/10",
        className
      )}
      {...rest}
    >
      <div
        className="px-4 py-3 flex justify-between items-center gap-4"
        onClick={() => setOpen(!open)}
      >
        <p className="text-2xl leading-none font-black">
          <span className="text-primary">weblabs</span>
          <span className="">.club</span>
        </p>

        <div className="flex gap-8">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <HiXMark size={24} strokeWidth={1} />
            ) : (
              <HiBars2 size={24} strokeWidth={1} />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "px-4 py-6 flex-col gap-4 text-xl font-medium bg-primary/10",
          open ? "flex" : "hidden"
        )}
      >
        <Link
          href="/"
          className={cn(
            active === "home"
              ? "underline decoration-2 underline-offset-4"
              : "opacity-60 hover:opacity-100 transition-opacity"
          )}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={cn(
            active === "about"
              ? "underline decoration-2 underline-offset-4"
              : "opacity-60 hover:opacity-100 transition-opacity"
          )}
        >
          About
        </Link>

        {config.socials.discord && (
          <Link
            href={config.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            Discord ↗
          </Link>
        )}
      </div>
    </nav>
  );
}
