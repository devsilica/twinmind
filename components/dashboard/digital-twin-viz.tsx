"use client";

import { Activity, Maximize2, ZoomIn } from "lucide-react";
import { useTwinContext } from "@/context/TwinProvider";
import { HumanBody } from "@/components/anatomy/HumanBody";

export function DigitalTwinViz() {
  const { data, loading, error } = useTwinContext();

  if (loading) {
    return (
      <div className="flex h-[650px] items-center justify-center rounded-3xl border border-white/10 bg-slate-950 text-slate-300">
        Loading Digital Twin...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8 text-red-300">
        {error}
      </div>
    );
  }

  const systems = data?.patient?.systems ?? [];

  const diagnosis =
    data?.latestDiagnosis?.title ??
    "No Active Diagnosis";

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">

      {/* HEADER */}

      <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Digital Twin Visualization
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Live Ontomorph Patient Twin
          </p>
        </div>

        <div className="flex items-center gap-3">

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">

            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              LIVE
            </span>

          </div>

          <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10">
            <ZoomIn size={18} />
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10">
            <Maximize2 size={18} />
          </button>

        </div>

      </div>

      {/* CANVAS */}

      <div className="relative h-[620px] overflow-hidden">

        {/* Gradient */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#164e63_0%,#020617_70%)]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Scanner Rings */}

        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 animate-[spin_40s_linear_infinite]" />

        <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20 animate-pulse" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        {/* HUMAN */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          <div className="animate-[float_6s_ease-in-out_infinite]">

            <HumanBody systems={systems} />

          </div>

        </div>

        {/* STATUS */}

        <div className="absolute left-8 top-8 w-80 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <div className="mb-5 flex items-center gap-3">

            <div className="rounded-xl bg-cyan-500/15 p-3">

              <Activity
                size={18}
                className="text-cyan-300"
              />

            </div>

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Twin Status
              </p>

              <h3 className="font-semibold text-white">
                Operational
              </h3>

            </div>

          </div>

          <div className="space-y-5">

            <div>

              <p className="text-xs uppercase tracking-wide text-slate-500">
                Diagnosis
              </p>

              <p className="mt-1 font-medium text-white">
                {diagnosis}
              </p>

            </div>

            <div>

              <p className="text-xs uppercase tracking-wide text-slate-500">
                Active Systems
              </p>

              <div className="mt-3 flex flex-wrap gap-2">

                {systems.map((system) => (
                  <span
                    key={system}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium capitalize text-cyan-300"
                  >
                    {system.replace(/_/g, " ")}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* METRICS */}

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-5">

          {[
            ["Systems", systems.length],
            ["Events", data?.recentEvents?.length ?? 0],
            ["Diagnosis", diagnosis !== "No Active Diagnosis" ? 1 : 0],
            ["Status", "Live"],
          ].map(([title, value]) => (

            <div
              key={title}
              className="min-w-[130px] rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-xl"
            >

              <p className="text-xs uppercase tracking-wider text-slate-500">
                {title}
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                {value}
              </h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}