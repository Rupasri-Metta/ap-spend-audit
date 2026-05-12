import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
      
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}

        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight cursor-pointer">
            StackSave AI
          </h1>
        </Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-10 text-zinc-400">

          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            Docs
          </a>

        </div>

        {/* CTA Button */}

        <Link href="/audit">
          <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-zinc-200 transition">
            Start Audit
          </button>
        </Link>

      </div>

    </header>
  );
}