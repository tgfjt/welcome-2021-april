const production = !process.env.ROLLUP_WATCH;

module.exports = {
	mode: "jit",
	purge: {
		content: [
			"./src/**/*.{html,js,svelte,ts}",
		],
		enabled: production,
	},
	theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '5rem',
        lg: '10rem',
        xl: '20rem',
        '2xl': '30rem',
      },
    },
  },
	plugins: [],
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true,
	}
};
