import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      
      <Navbar />

      {/* Hero Section */}

      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-32">

        {/* Background Glow */}

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-5xl">

          <div className="inline-flex items-center gap-3 border border-green-500/20 bg-green-500/10 px-5 py-2 rounded-full text-green-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            AI Spend Optimization Platform
          </div>

          <h1 className="text-7xl md:text-8xl font-bold leading-tight tracking-tight">
            Stop Burning Money on AI Tools
          </h1>

          <p className="text-zinc-400 text-xl leading-9 mt-8 max-w-3xl">
            Instantly audit ChatGPT, Claude, Cursor, Copilot,
            Gemini, and API spending to uncover hidden savings
            opportunities for your startup.
          </p>

          <div className="flex gap-5 mt-12 flex-wrap">

            <Link href="/audit">
              <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-zinc-200 transition duration-300 hover:scale-105">
                Start Free Audit
              </button>
            </Link>

            <Link href="/results">
              <button className="border border-zinc-700 px-8 py-4 rounded-2xl text-lg hover:bg-zinc-900 transition duration-300">
                View Demo Report
              </button>
            </Link>

          </div>

          {/* Trust Indicators */}

          <div className="flex flex-wrap gap-8 mt-16 text-zinc-500 text-sm">
            <p>✓ No signup required</p>
            <p>✓ Instant savings analysis</p>
            <p>✓ AI-generated recommendations</p>
          </div>

        </div>
      </section>

      {/* Stats */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-green-500/30 transition duration-300 hover:-translate-y-1">

            <h2 className="text-5xl font-bold text-green-400">
              35%
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Average AI cost reduction
            </p>

          </div>

          <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-green-500/30 transition duration-300 hover:-translate-y-1">

            <h2 className="text-5xl font-bold text-green-400">
              $6k+
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Typical yearly savings
            </p>

          </div>

          <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 hover:border-green-500/30 transition duration-300 hover:-translate-y-1">

            <h2 className="text-5xl font-bold text-green-400">
              8+
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              AI platforms analyzed
            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="mb-16">

          <p className="text-green-400 mb-4">
            Features
          </p>

          <h2 className="text-5xl font-bold max-w-4xl leading-tight">
            Everything You Need to Optimize AI Spend
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-green-500/30 transition duration-300 hover:-translate-y-1">

            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-2xl mb-6">
              $
            </div>

            <h3 className="text-2xl font-bold mb-5">
              AI Spend Analysis
            </h3>

            <p className="text-zinc-400 leading-8">
              Analyze ChatGPT, Claude, Cursor, Copilot,
              Gemini, and API expenses in seconds.
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-green-500/30 transition duration-300 hover:-translate-y-1">

            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-2xl mb-6">
              ⚡
            </div>

            <h3 className="text-2xl font-bold mb-5">
              Smart Recommendations
            </h3>

            <p className="text-zinc-400 leading-8">
              Get actionable recommendations based on
              team size, usage patterns, and pricing tiers.
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-green-500/30 transition duration-300 hover:-translate-y-1">

            <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-2xl mb-6">
              📊
            </div>

            <h3 className="text-2xl font-bold mb-5">
              Instant Savings Reports
            </h3>

            <p className="text-zinc-400 leading-8">
              Generate detailed savings reports with
              personalized AI-generated insights.
            </p>

          </div>

        </div>

      </section>

      {/* CTA Section */}

      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-[40px] p-14 text-black">

          <h2 className="text-6xl font-bold max-w-4xl leading-tight">
            Start Optimizing Your AI Costs Today
          </h2>

          <p className="text-xl mt-6 max-w-2xl">
            Discover how much your team can save with smarter AI infrastructure decisions.
          </p>

          <Link href="/audit">
            <button className="mt-10 bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-zinc-900 transition">
              Generate Free Audit
            </button>
          </Link>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-zinc-900 py-10 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">

          <div>

            <h3 className="text-2xl font-bold">
              StackSave AI
            </h3>

            <p className="text-zinc-500 mt-3 max-w-md">
              AI spend optimization platform for startups and engineering teams.
            </p>

          </div>

          <div className="text-zinc-500">
            © 2026 StackSave AI. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}