// @ts-check
import { defineConfig, envField } from 'astro/config';
import clerk from "@clerk/astro";
import netlify from "@astrojs/netlify";

export default defineConfig({
    integrations: [clerk()],

    env: {
        schema: {
            PUBLIC_CLERK_PUBLISHABLE_KEY: envField.string({
                context: "client",
                access: "public",
            }),
            CLERK_SECRET_KEY: envField.string({
                context: "server",
                access: "secret",
            }),
        }
    },

    adapter: netlify(),
    output: "server",

});