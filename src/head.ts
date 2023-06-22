const changeDarkMode = (matchedDark: boolean) =>
    localStorage.theme === "dark" ||
        (!("theme" in localStorage) && matchedDark)
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
const matchColorSchemeDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
)
changeDarkMode(matchColorSchemeDark.matches)
matchColorSchemeDark.addEventListener("change", (event) =>
    changeDarkMode(event.matches)
)