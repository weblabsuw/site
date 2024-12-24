import Link from "next/link";
import Image from "next/image";
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
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8", className)} {...rest}>
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
      {imageSrc ?
        <Image
          src={imageSrc}
          width={512}
          height={512}
          alt={name}
          className="size-28 object-center object-cover rounded-full bg-primary z-10"
        />
      :
        <div className="size-28 rounded-full flex items-center justify-center bg-surface border-2 border-primary/10 overflow-hidden z-10">
          <span className="font-black text-primary/10 text-5xl pointer-events-none">404</span>
        </div>
      }
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
