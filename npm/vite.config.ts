import { defineConfig, PluginOption } from "vite";
import { MasterCSSVitePlugin } from "@master/css-compiler";

export default defineConfig({
  plugins: [MasterCSSVitePlugin() as PluginOption],
});
