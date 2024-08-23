/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
		},
		fontFamily: {
			display: ["Archivo Black", "sans-serif"],
			base: ["Rubik", "sans-serif"],
		},
		// colors: {
		// 	blue: "#031C33",
		// 	red: "#B32C19",
		// },
	},
	plugins: [],
};
