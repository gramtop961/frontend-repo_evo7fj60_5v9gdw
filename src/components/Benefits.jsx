import { DollarSign, TrendingUp, MapPin, Clock } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Low Investment, High ROI',
    desc: 'Transparent pricing with quick breakeven. Earn surcharge plus interchange income.',
  },
  {
    icon: TrendingUp,
    title: 'Recurring Cash Flow',
    desc: 'Steady daily transactions with automated settlements and reports.',
  },
  {
    icon: MapPin,
    title: 'Prime Location Onboarding',
    desc: 'We help secure high-footfall sites and handle bank partnerships and compliance.',
  },
  {
    icon: Clock,
    title: '24/7 Monitoring & Support',
    desc: 'Remote health checks, cash management, and on-ground service teams.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why Partner With Us</h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Everything you need to launch and scale your own ATM franchise, handled end-to-end.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
