/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Inter: "sans-serif",
				Manrope: " sans-serif",
				Playfair: "serif",
			},

			colors: {
				pink: "#EAAAD8",
				pinkBlur: "#FDF3FA",
				"pinkBlur-lt": "#FEF3FA",
				"kiya-black": "#141414",
				"kiya-gray": "#555555",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-btm-left":
					"radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
