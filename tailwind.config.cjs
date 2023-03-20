/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
			},

			container: {
				center: true,
				padding: '24px',

				// default breakpoints but with 40px removed
				screens: {
					xs: '600px',
					sm: '720px',
					md: '1020px',
					lg: '1200px',
					xl: '1280px',
					'2xl': '1432px',
				},
			},

		},
	},
	plugins: [],
}
