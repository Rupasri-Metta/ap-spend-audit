"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import SavingsChart from "@/components/SavingsChart";

export default function ResultsPage() {
  const [results, setResults] = useState({
    monthlySavings: 0,
    yearlySavings: 0,
    optimizationScore: 0,
  });

  useEffect(() => {
    const storedResults = localStorage.getItem("auditResults");

    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      window.location.href = "/audit";
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}

        <div className="mb-14">
          <div className="inline-flex items-center gap-3 border border-green-500/20 bg-green-500/10 px-5 py-2 rounded-full text-green-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            AI Savings Report Generated
          </div>

          <h1 className="text-7xl font-bold leading-tight max-w-5xl">
            Your Team Could Save Thousands on AI Spend
          </h1>

          <p className="text-zinc-400 text-xl leading-9 mt-8 max-w-3xl">
            We analyzed your current AI infrastructure and identified multiple
            optimization opportunities.
          </p>
        </div>

        {/* Savings Hero */}

        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[36px] p-12 mb-12">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <p className="text-zinc-400 mb-4">Monthly Savings</p>

              <h2 className="text-7xl font-bold text-green-400">
                ${results.monthlySavings}
              </h2>
            </div>

            <div>
              <p className="text-zinc-400 mb-4">Annual Savings</p>

              <h2 className="text-7xl font-bold text-green-400">
                ${results.yearlySavings}
              </h2>
            </div>

            <div>
              <p className="text-zinc-400 mb-4">Optimization Score</p>

              <h2 className="text-7xl font-bold text-green-400">
                {results.optimizationScore}%
              </h2>
            </div>
          </div>
        </div>

        {/* Recommendations */}

        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-10">Recommendations</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ChatGPT */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-green-500/30 transition duration-300">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">ChatGPT</h3>

                <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm">
                  Recommended
                </span>
              </div>

              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  Current Plan:
                  <span className="text-white ml-2">Team Plan</span>
                </p>

                <p>
                  Suggested:
                  <span className="text-white ml-2">Plus Plan</span>
                </p>

                <p>
                  Your current team size does not justify collaborative pricing.
                </p>
              </div>

              <div className="mt-10 text-4xl font-bold text-green-400">
                Save $120/mo
              </div>
            </div>

            {/* Claude */}

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-green-500/30 transition duration-300">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">Claude API</h3>

                <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm">
                  High Savings
                </span>
              </div>

              <div className="space-y-5 text-zinc-400 leading-8">
                <p>
                  Current Spend:
                  <span className="text-white ml-2">$1200/month</span>
                </p>

                <p>
                  Suggested:
                  <span className="text-white ml-2">
                    Discounted API Credits
                  </span>
                </p>

                <p>
                  Credex infrastructure credits can significantly reduce direct
                  API costs.
                </p>
              </div>

              <div className="mt-10 text-4xl font-bold text-green-400">
                Save $420/mo
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[36px] p-12 mb-14">
          <h2 className="text-4xl font-bold mb-8">Benchmark Analysis</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-zinc-400 mb-3">Your AI Spend Per Developer</p>

              <h3 className="text-6xl font-bold text-red-400">$240</h3>
            </div>

            <div>
              <p className="text-zinc-400 mb-3">Industry Average</p>

              <h3 className="text-6xl font-bold text-green-400">$155</h3>
            </div>
          </div>
        </div>

        {/* Spend Comparison Chart */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[36px] p-12 mb-14">
          <h2 className="text-4xl font-bold mb-10">Spend Comparison</h2>

          <p className="text-zinc-400 text-lg mb-10">
            Compare your current AI infrastructure costs with optimized spending
            recommendations.
          </p>

          <SavingsChart />
        </div>

        {/* AI Summary */}

        <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[36px] p-12 mb-14">
          <h2 className="text-4xl font-bold mb-8">AI-Generated Summary</h2>

          <p className="text-zinc-300 text-xl leading-10 max-w-4xl">
            Your organization is currently overpaying for collaborative AI
            subscriptions relative to your team size and usage patterns. Most of
            the unnecessary spend comes from enterprise-tier plans and direct
            API pricing. By switching to optimized plans and leveraging
            infrastructure credits, your company could reduce annual AI costs
            significantly while maintaining similar productivity.
          </p>
        </div>

        {/* CTA */}

        <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-[40px] p-14 text-black">
          <h2 className="text-6xl font-bold max-w-4xl leading-tight">
            Unlock Even Bigger Savings with Credex
          </h2>

          <p className="text-xl mt-6 max-w-3xl">
            Teams with high AI infrastructure spend can reduce costs
            significantly using discounted enterprise AI credits.
          </p>

          <button className="mt-10 bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-zinc-900 transition">
            Book Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
