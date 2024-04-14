export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Wattio Dashboard",
  description:
    "Wattio Dashboard is a web application that allows users to monitor their energy consumption and production.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Sign Up",
      href: "/signup",
    },
  ],
  links: {
    twitter: "https://twitter.com/celsia_energia",
    github: "https://github.com/OmegaHack-2024",
    docs: "https://github.com/OmegaHack-2024",
  },
};
