export const appConfig = {
  name: "Portfolio",
  description:
    "Welcome to Rajesh Ranjan's portfolio! This project showcases Rajesh Ranjan's work, skills, and experience as a Full Stack Developer, designer, or any other creative role. You’ll find a collection of Rajesh Ranjan's best projects, along with a brief overview of who he is and what he does.",
};

export const themeConfig = {
  dark: "dark",
  light: "light",
} as const;

export const THEME_STORAGE_KEY = "portfolio-storage";

export const MAIN_CONTENT_ID = "main-content";

// How long the intro splash stays up, in ms, counted from first paint. The
// greetings name scramble and the hero rectangles (greetings.module.css)
// start when it ends — keep them in sync when changing this.
export const SPLASH_DURATION = 2000;

// Appended to accessible names of links that open a new tab.
export const NEW_TAB_HINT = " (opens in new tab)";

// Runs before paint: a saved explicit choice wins, otherwise follow the OS
// (dark when the OS states no preference).
export const themeInitScript = `(function(){try{var s=JSON.parse(localStorage.getItem("${THEME_STORAGE_KEY}")||"null");var st=s&&s.state;var t;if(st&&(st.themeChosen||st.activeTheme==="${themeConfig.light}")&&(st.activeTheme==="${themeConfig.light}"||st.activeTheme==="${themeConfig.dark}")){t=st.activeTheme;}else{t=window.matchMedia("(prefers-color-scheme: light)").matches?"${themeConfig.light}":"${themeConfig.dark}";}var r=document.documentElement;r.setAttribute("data-theme",t);r.classList.add(t);}catch(e){}})();`;

export const staticImagesConfig = {
  notFoundError: {
    src: "/assets/error/404-error.webp",
    alt: "",
    width: 400,
    height: 400,
    loading: "eager",
  },
  unexpectedError: {
    src: "/assets/error/something-went-wrong-error.webp",
    alt: "",
    width: 400,
    height: 400,
    loading: "eager",
  },
} as const;

export const propertyConstraintsConfig = {
  minNameLength: 2,
  maxNameLength: 100,
  minSubjectLength: 2,
  maxSubjectLength: 100,
  minMessageLength: 2,
  maxMessageLength: 500,
  phoneLength: 10,
};
