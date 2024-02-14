import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|tsx)$/,
      babel: {
        plugins: [['styled-components', { displayName: false }]],
        babelrc: false,
        configFile: false,
      },
    }),
    remix(),
    tsconfigPaths(),
  ],
});
