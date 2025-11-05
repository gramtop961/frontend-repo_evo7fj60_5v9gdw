import { CheckCircle, Building2, FileText, Wrench } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Apply & Get Approved',
    desc: 'Submit a quick form. We review your profile and location preference.',
  },
  {
    icon: Building2,
    title: 'Site Finalization',
    desc: 'We help verify footfall and compliance, and set up bank tie-ups.',
  },
  {
    icon: Wrench,
    title: 'Installation & Go-Live',
    desc: 'Kiosk setup, branding, and cash loading. Uptime monitoring begins.',
  },
  {
    icon: CheckCircle,
    title: 'Earn & Scale',
    desc: 'Track performance in real-time and add more locations as you grow.',
  },
];

export default function Process() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">How It Works</h2>
            <p className="mt-3 text-white/70">
              From paperwork to payouts — we streamline every step so you can start earning faster.
            </p>

            <div className="mt-10 space-y-5">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="mt-0.5 inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-white/70">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 p-6">
            <div className="aspect-[4/3] w-full rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.15),transparent_40%)]"></div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
