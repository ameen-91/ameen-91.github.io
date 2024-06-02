import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: "https://ameenshaikh.com",
  integrations: [mdx(), sitemap(), tailwind(), icon(),
  favicons({
    // masterPicture: "./src/favicon.svg",
    // emitAssets: true,

    // You should adjust the following options accordingly
    appName: "",
    appShortName: "",
    appDescription: "",
    // dir:"auto",
    lang: "en-US",
    // display: "standalone",
    // orientation: "any",
    // start_url: "/?homescreen=1",
    background: "#fff",
    theme_color: "#fff",

    faviconsDarkMode: false, // default `true`, Make favicon compatible with light and dark modes

    // appleStatusBarStyle: "black-translucent",

    //....
  }),

],
});