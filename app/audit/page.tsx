"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { calculateSavings } from "@/lib/auditEngine";
import { supabase } from "@/utils/supabase";
import { toast } from "sonner";
export default function AuditPage() {
  const router = useRouter();

  const [teamSize, setTeamSize] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!email || !teamSize) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const results = calculateSavings(Number(teamSize));

      localStorage.setItem("auditResults", JSON.stringify(results));

      const { data: existingLead } = await supabase
        .from("leads")
        .select("*")
        .eq("email", email)
        .single();

      if (!existingLead) {
        const { error } = await supabase.from("leads").insert([
          {
            email,
            team_size: Number(teamSize),
          },
        ]);

        if (error) {
          console.error(error);
          toast.error("Failed to save lead");
          setLoading(false);
          return;
        }
      }


      setLoading(false);
      toast.success("Audit generated successfully");
      router.push("/results");
    } catch (err) {
      console.error(err);

      toast.error("Something went wrong");

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}

        <div className="mb-14">
          <div className="inline-flex items-center gap-3 border border-green-500/20 bg-green-500/10 px-5 py-2 rounded-full text-green-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Free AI Spend Audit
          </div>

          <h1 className="text-7xl font-bold leading-tight max-w-4xl">
            Analyze Your AI Stack
          </h1>

          <p className="text-zinc-400 text-xl mt-8 leading-9 max-w-3xl">
            Enter your AI tool spending details and instantly uncover
            optimization opportunities.
          </p>
        </div>

        {/* Form Container */}

        <div className="bg-zinc-950 border border-zinc-800 rounded-[36px] p-10">
          <div className="space-y-10">
            <div>
              <label className="block mb-3 text-zinc-400">Work Email</label>

              <input
                type="email"
                placeholder="founder@startup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-5 rounded-2xl bg-black border border-zinc-800 outline-none focus:border-green-500 transition"
              />
            </div>

            {/* Team Size */}

            <div>
              <label className="block mb-3 text-zinc-400">Team Size</label>

              <input
                type="number"
                placeholder="5"
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="w-full p-5 rounded-2xl bg-black border border-zinc-800 outline-none focus:border-green-500 transition"
              />
            </div>

            {/* Use Case */}

            <div>
              <label className="block mb-3 text-zinc-400">
                Primary Use Case
              </label>

              <select className="w-full p-5 rounded-2xl bg-black border border-zinc-800 outline-none focus:border-green-500 transition">
                <option>Coding</option>
                <option>Writing</option>
                <option>Research</option>
                <option>Data Analysis</option>
                <option>Mixed</option>
              </select>
            </div>

            {/* ChatGPT */}

            <div className="border border-zinc-800 rounded-3xl p-8 bg-black">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">ChatGPT</h2>

                <span className="text-green-400 bg-green-500/10 px-4 py-2 rounded-full text-sm">
                  OpenAI
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Current Plan"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />

                <input
                  type="number"
                  placeholder="Monthly Spend ($)"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />

                <input
                  type="number"
                  placeholder="Seats"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />
              </div>
            </div>

            {/* Claude */}

            <div className="border border-zinc-800 rounded-3xl p-8 bg-black">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Claude</h2>

                <span className="text-green-400 bg-green-500/10 px-4 py-2 rounded-full text-sm">
                  Anthropic
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Current Plan"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />

                <input
                  type="number"
                  placeholder="Monthly Spend ($)"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />

                <input
                  type="number"
                  placeholder="Seats"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />
              </div>
            </div>

            {/* Cursor */}

            <div className="border border-zinc-800 rounded-3xl p-8 bg-black">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Cursor</h2>

                <span className="text-green-400 bg-green-500/10 px-4 py-2 rounded-full text-sm">
                  AI Coding
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Current Plan"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />

                <input
                  type="number"
                  placeholder="Monthly Spend ($)"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />

                <input
                  type="number"
                  placeholder="Seats"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />
              </div>
            </div>

            {/* GitHub Copilot */}

            <div className="border border-zinc-800 rounded-3xl p-8 bg-black">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">GitHub Copilot</h2>

                <span className="text-green-400 bg-green-500/10 px-4 py-2 rounded-full text-sm">
                  GitHub
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Current Plan"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />

                <input
                  type="number"
                  placeholder="Monthly Spend ($)"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />

                <input
                  type="number"
                  placeholder="Seats"
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 focus:border-green-500 outline-none transition"
                />
              </div>
            </div>

            {/* CTA */}

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-white text-black py-5 rounded-2xl text-xl font-semibold hover:bg-zinc-200 transition duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Generating..." : "Generate AI Savings Report"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
