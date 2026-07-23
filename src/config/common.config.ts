export const appConfig = {
  name: "Portfolio",
  description:
    "Welcome to Rajesh Ranjan's portfolio! This project showcases Rajesh Ranjan's work, skills, and experience as a Full Stack Developer, designer, or any other creative role. You’ll find a collection of Rajesh Ranjan's best projects, along with a brief overview of who he is and what he does.",
};

export const themeConfig = {
  dark: "dark",
  light: "light",
} as const;

export const staticImagesConfig = {
  notFoundError: {
    src: "/assets/error/404-error.webp",
    alt: "not-found",
    width: 400,
    height: 400,
    loading: "eager",
  },
  unexpectedError: {
    src: "/assets/error/something-went-wrong-error.webp",
    alt: "unexpected-error",
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
