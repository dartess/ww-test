import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact(), pluginSvgr()],
  html: {
    tags: [
      { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
      {
        tag: 'link',
        attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      },
      {
        tag: 'link',
        attrs: {
          href: 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap',
          rel: 'stylesheet',
        },
      },
    ],
  },
});
