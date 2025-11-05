import { Rocket, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            RBI-compliant, bank-grade security
          </span>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
            Start Your ATM Franchise with Confidence
          </h1>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            Launch and scale your ATM business with our turnkey solutions, real-time analytics,
            and nationwide support. Low investment, recurring cash flow.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Rocket className="h-4 w-4" />
              Get Franchise Kit
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Active ATMs', value: '2,500+' },
              { label: 'Uptime', value: '99.5%' },
              { label: 'Avg. Transactions/Day', value: '120+' },
              { label: 'Cities Covered', value: '150+' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-semibold text-white">{item.value}</div>
                <div className="text-xs text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
