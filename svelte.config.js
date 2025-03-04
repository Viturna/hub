import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      strict: false
    }),
    prerender: {
      entries: ['*'],
      handleHttpError: (error) => {
        if (error.status === 404) {
          return {
            status: 200,
            body: { message: 'Not Found' } // Optionnel, vous pouvez personnaliser le contenu
          };
        }

        // Rejeter l'erreur pour que le processus de build s'arrête si ce n'est pas une erreur 404
        throw error;
      }
    }
  }
};

export default config;