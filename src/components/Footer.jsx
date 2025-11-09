export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} NeonCorp — All rights reserved.</p>
        <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Privacy</a>
          <span aria-hidden>•</span>
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Terms</a>
          <span aria-hidden>•</span>
          <a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">Support</a>
        </div>
      </div>
    </footer>
  );
}
