import { useEffect, useState } from 'react';
import { Moon, Sun, Rocket } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-cyan-400/40 blur-md" />
            <div className="relative flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-fuchsia-500 p-[2px]">
              <div className="rounded-[10px] bg-white dark:bg-zinc-950 px-3 py-1.5 flex items-center gap-2">
                <Rocket className="h-4 w-4 text-cyan-500" />
                <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">NeonCorp</span>
              </div>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="h-4 w-4 text-amber-400" />
              <span>Light</span>
            </>
          ) : (
            <>
              <Moon className="h-4 w-4 text-indigo-500" />
              <span>Dark</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
