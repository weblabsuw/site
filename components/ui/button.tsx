import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className="group bg-primary/25 rounded-lg">
      <div
        className={cn(
          "rounded-lg -translate-y-1 group-hover:translate-y-0 transition-transform ease-in-out",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    </button>
  );
}
