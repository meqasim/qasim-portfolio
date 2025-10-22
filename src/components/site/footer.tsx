import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="font-semibold mb-3">Social</p>
          <ul className="space-y-2 opacity-80">
            <li><a href="https://github.com/meqasim" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://youtube.com/" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 opacity-80">
            <li><Link href="/en/projects">Projects</Link></li>
            <li><Link href="/en/services">Services</Link></li>
            <li><Link href="/en/testimonials">Testimonials</Link></li>
            <li><Link href="/en/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">Contact</p>
          <ul className="space-y-2 opacity-80">
            <li>Rawalpindi, Punjab, Pakistan</li>
            <li><a href="mailto:mq@yourdomain.dev">mq@yourdomain.dev</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3">More</p>
          <ul className="space-y-2 opacity-80">
            <li><Link href="/en/resume">Resume</Link></li>
            <li><Link href="/en/about">About</Link></li>
          </ul>
        </div>
      </div>

      <div className="py-6 text-xs opacity-60 text-center">
        © 2025 Muhammad Qasim — All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;