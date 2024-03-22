const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   builder: "vite",
   srcDir: "./src/",
   telemetry: false,
   ssr: true,
   devServer: {
      port: 3000,
   },

   app: {
      rootId: "root",
      pageTransition: false,
      layoutTransition: false,
      buildAssetsDir: isDev ? "/_nuxt/" : "assets/",
   },

   hooks: {
      "build:manifest": (manifest) => {
         for (const key in manifest) {
            const file = manifest[key];
            if (file.assets) {
               file.assets = file.assets.filter(
                  (asset) =>
                     !asset.endsWith(".webp") &&
                     !asset.endsWith(".jpg") &&
                     !asset.endsWith(".png") &&
                     !asset.endsWith(".jpeg") &&
                     !asset.endsWith(".svg"),
               );
            }
         }
      },
   },

   devtools: {
      enabled: false,
      timeline: {
         enabled: false,
      },
   },

   sourcemap: {
      server: false,
      client: false,
   },

   experimental: {
      componentIslands: false,
      payloadExtraction: false,
      headNext: false,
      appManifest: true,
      renderJsonPayloads: true,
      crossOriginPrefetch: true,
      sharedPrerenderData: true,
   },

   features: {
      inlineStyles: false,
      noScripts: false,
   },

   components: [
      {
         path: "~/components",
         pathPrefix: false,
      },
   ],

   nitro: {
      preset: "node-server",
      serveStatic: "node",
      prerender: {
         autoSubfolderIndex: false,
         crawlLinks: false,
      },
      output: {
         dir: ".output",
         serverDir: ".output/server",
         publicDir: ".output/public",
      },

      minify: false,
   },

   eslint: {
      lintOnStart: false,
   },

   postcss: {
      plugins: {
         "tailwindcss": {},
         "postcss-combine-media-query": {},
         "postcss-combine-duplicated-selectors": {},
         "cssnano": ["default", { discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true }],
      },
   },

   purgecss: {
      enabled: isDev ? false : true,
      content: ["./src/**/*.vue"],
      safelist: ["html", "body", "root", /\w+-(?:\[\d+(px|deg)\])?/],
      fontFace: true,
      variables: true,
      keyframes: true,
   },
   css: ["@/assets/styles/app.scss"],
   modules: isDev ? ["@nuxtjs/eslint-module", "@pinia/nuxt"] : ["@pinia/nuxt", "nuxt-purgecss"],
});
