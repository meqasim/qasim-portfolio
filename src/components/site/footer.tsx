export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container-page py-8 text-sm">
        <div className="flex flex-col gap-2 opacity-80">
          <div className="flex flex-wrap gap-4">
            <a className="underline-offset-4 hover:underline" href="https://github.com/meqasim">GitHub</a>
            <a className="underline-offset-4 hover:underline" href="https://www.linkedin.com/in/meqasim">LinkedIn</a>
            <a className="underline-offset-4 hover:underline" href="https://facebook.com">Facebook</a>
            <a className="underline-offset-4 hover:underline" href="https://youtube.com">YouTube</a>
          </div>
          <div>© Muhammad Qasim — All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}