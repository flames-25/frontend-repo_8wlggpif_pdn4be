import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 bg-cyan-500/30 blur-3xl rounded-full" />
        <div className="absolute top-20 -right-20 h-96 w-96 bg-fuchsia-500/20 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white via-cyan-100 to-cyan-300 dark:from-cyan-200 dark:via-white dark:to-fuchsia-300 bg-clip-text text-transparent"
          >
            A futuristic company profile for the new era
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl"
          >
            Showcase your brand with holographic identity, neon accents, and a sleek dual theme. Built for technology leaders and digital natives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#features" className="inline-flex items-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-500 px-5 py-2.5 text-white shadow-lg shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.99] transition-transform">
              Explore Features
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
              Contact Us
            </a>
          </motion.div>
        </div>

        <div className="h-[420px] sm:h-[520px] md:h-[560px] rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-black/30 overflow-hidden">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
