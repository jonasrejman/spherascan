import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Switched from adapter-auto to adapter-cloudflare for Cloudflare Pages support
		adapter: adapter({
			// Optional configuration options for Cloudflare
			routes: {
				include: ['/*'],
				exclude: ['/*.(js|ts|css|png|jpg|jpeg|gif|svg|ico|txt|html)']
			},
			platformProxy: {
				configPath: 'wrangler.toml',
				environment: undefined,
				experimentalJsonConfig: false,
				persist: false
			}
		}),
		// Other kit options...
		paths: {
			base: ''
		},
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			routes: 'src/routes',
			template: 'src/app.html'
		},
		// Enable or disable server-side rendering (SSR)
		ssr: true,
		// Enable or disable client-side hydration
		hydrate: true
	}
};

export default config;
