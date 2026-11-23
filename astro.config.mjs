import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gestalia.mx',
  vite: { plugins: [tailwindcss()] },
});
