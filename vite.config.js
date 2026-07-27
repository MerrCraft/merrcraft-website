import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

import { solidStart } from "@solidjs/start/config";

export default defineConfig({
  server:{ allowedHosts: true },
  plugins: [solidStart(),
    nitro()
  ]
});
