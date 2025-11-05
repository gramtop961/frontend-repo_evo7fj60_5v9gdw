import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} ATMCo Franchising. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#benefits" className="hover:text-white">Benefits</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400" />
            <span className="text-white font-semibold">ATMCo</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400">Get Started</a>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
