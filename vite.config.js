import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

import { solidStart } from "@solidjs/start/config";

export default defineConfig({
  server:{ allowedHosts: [
    "sought-flying-treefrog.ngrok-free.app",
    "merrcraft.com"
  ] },
  plugins: [solidStart(),
    nitro()
  ]
});
