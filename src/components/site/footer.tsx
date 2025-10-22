import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-3 py-10 sm:px-4 md:grid-cols-4">
        <div>
          <div className="text-sm font-semibold">Social</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li><a href="https://github.com/meqasim" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
            <li><a href="https://www.youtube.com/" target="_blank">YouTube</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
            <li><Link href="/en/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>Rawalpindi, Punjab, Pakistan</li>
            <li><a href="mailto:mq@yourdomain.dev">mq@yourdomain.dev</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">More</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li><Link href="/en/resume">Resume</Link></li>
            <li><Link href="/en/about">About</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/10 px-3 py-6 text-xs text-neutral-400 sm:px-4">
        © {new Date().getFullYear()} Muhammad Qasim — All rights reserved.
      </div>
    </footer>
  );
}
