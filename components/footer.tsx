import Link from 'next/link';

export function Footer() {
  return (
    <footer className="px-4 pt-4 pb-8 container max-w-5xl flex flex-col sm:flex-row justify-between gap-4 items-center md:items-end border-t-2 border-onSurface/10">
      <div className="flex gap-4 text-sm sm:text-xs">
        <Link href="/about" className="opacity-75 hover:opacity-100 text-primary font-medium transition-opacity">
          About
        </Link>

        <Link href="/events" className="opacity-75 hover:opacity-100 text-primary font-medium transition-opacity">
          Events
        </Link>
        
        <Link href="/" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 text-primary font-medium transition-opacity">
          Discord ↗
        </Link>

        <Link href="/" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 text-primary font-medium transition-opacity">
          Insta ↗
        </Link>
      </div>

      <div className="group text-sm sm:text-xs">
        Built with ❤️ and <span className="group-hover:hidden">🧀</span><span className="hidden group-hover:inline">🍺</span> by WebLabs
      </div>
    </footer>
  );
}
