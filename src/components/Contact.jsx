import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Get the Franchise Kit</h2>
            <p className="mt-3 text-white/70">Fill the form and our franchise specialist will call you within 24 hours.</p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-white/80"><Phone className="h-4 w-4" /> +91 98765 43210</div>
              <div className="flex items-center gap-2 text-white/80"><Mail className="h-4 w-4" /> franchise@atmco.in</div>
              <div className="flex items-center gap-2 text-white/80"><MapPin className="h-4 w-4" /> PAN India</div>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Full Name</label>
                <input type="text" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="John Doe" />
              </div>
              <div>
                <label className="text-sm text-white/70">Phone</label>
                <input type="tel" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="+91 9xxxxxxxxx" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Preferred City</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="e.g., Pune" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-cyan-400" placeholder="Tell us about your location or query" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
              Request Call Back
            </button>
            <p className="mt-3 text-center text-xs text-white/60">By submitting, you agree to be contacted by our franchise team.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
