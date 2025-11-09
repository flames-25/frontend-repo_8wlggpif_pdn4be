import { Shield, CreditCard, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'End-to-end encrypted infrastructure with zero-trust access and real-time anomaly detection.',
    glow: 'from-cyan-500 to-blue-500',
  },
  {
    icon: CreditCard,
    title: 'Fintech Ready',
    desc: 'Modern rails for identity, onboarding, and payments seamlessly integrated into your stack.',
    glow: 'from-fuchsia-500 to-purple-500',
  },
  {
    icon: Sparkles,
    title: 'Holographic Identity',
    desc: 'Iridescent profiles with verifiable badges to elevate trust and brand recognition.',
    glow: 'from-emerald-400 to-cyan-400',
  },
];

export default function NeonCards() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity bg-gradient-to-br ${f.glow}`} />
              <div className="relative rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/30 dark:bg-zinc-900/40 backdrop-blur p-6 h-full">
                <div className="inline-flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 p-3 border border-zinc-200 dark:border-zinc-700">
                  <f.icon className="h-6 w-6 text-zinc-900 dark:text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
