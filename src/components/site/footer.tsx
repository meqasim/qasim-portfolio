export function Footer() {
  return (
    <footer className="container-page py-10 text-sm opacity-90">
      <div className="grid gap-6 sm:grid-cols-2 items-start">
        <div>
          <div className="font-medium">Muhammad Qasim</div>
          <div className="opacity-80">Full-Stack Web Developer & Blogger</div>
          <div className="opacity-60 mt-2">
            Yousuf House, St # 2, Islamabad View Colony, Rawalpindi, Punjab, Pakistan
          </div>
          <div className="opacity-60 mt-2">© 2025 · Built with Next.js</div>
        </div>
        <nav className="justify-self-end flex gap-4">
          <a href="https://github.com/meqasim" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/meqasim" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/meqasim95" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.youtube.com/@meqasim" target="_blank" rel="noreferrer">YouTube</a>
        </nav>
      </div>
    </footer>
  );
}