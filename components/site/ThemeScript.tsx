export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light")}else{document.documentElement.classList.add("dark");document.documentElement.classList.remove("light")}}catch(e){document.documentElement.classList.add("dark")}})();`;
  return <script dangerouslySetInnerHTML={{__html: code}} />;
}