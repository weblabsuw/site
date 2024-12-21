import Link from "next/link";
import { cn } from "@/lib/utils";

import { HiMiniLink, HiEnvelope } from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa6";

interface TeamGridProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TeamGrid({ children, className, ...rest }: TeamGridProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-x-12 gap-y-8", className)} {...rest}>
      {children}
    </div>
  );
}

interface TeamGridItemProps {
  name: string;
  role: string;
  imageSrc: string|undefined;
  linkedin?: string;
  email?: string;
  website?: string;
}

export function TeamGridItem({ name, role, imageSrc, linkedin, email, website }: TeamGridItemProps) {
  return (
    <div className="flex items-center">
      <img
        src={imageSrc}
        alt={name}
        className="h-28 aspect-square object-center object-cover rounded-full bg-primary z-10"
      />
      <div className="-ml-[10%] flex-1 pl-[calc(10%+1rem)] pr-4 py-3 rounded-r-2xl bg-primary/10">
        <h3 className="text-base leading-tight font-bold">
          {name}
        </h3>
        <p className="mt-1 text-xs">
          {role}
        </p>

        <div className="mt-3 flex gap-2.5 items-center text-xs font-medium">
          {linkedin &&
            <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 text-primary font-medium transition-opacity">
              <FaLinkedin size={16}/>
            </Link>
          }
          
          {email &&
            <Link href={email} target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 text-primary font-medium transition-opacity">
              <HiEnvelope size={16}/>
            </Link>
          }

          {website &&
            <Link href={website} target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 text-primary font-medium transition-opacity">
              <HiMiniLink size={16}/>
            </Link>
          }
        </div>
      </div>
    </div>
  );
}
