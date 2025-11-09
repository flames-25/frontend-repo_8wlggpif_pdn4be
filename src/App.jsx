import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NeonCards from './components/NeonCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100 selection:bg-cyan-500/30 selection:text-zinc-900 dark:selection:text-white">
      <div className="fixed inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_0%_0%,rgba(56,189,248,0.08),transparent),radial-gradient(50rem_50rem_at_100%_0%,rgba(168,85,247,0.06),transparent),radial-gradient(60rem_60rem_at_50%_100%,rgba(99,102,241,0.06),transparent)]" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <NeonCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
