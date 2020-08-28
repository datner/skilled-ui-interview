module.exports = {
	purge: [],
	theme: {
		extend: {
			inset: {
				"1/2": "50%",
			},
			scale: {
				"-100": "-1",
			},
			width: {
				"72": "18rem",
				"84": "21rem",
				"96": "24rem",
			},
			borderRadius: {
				xl: "24px",
			},
			colors: {
				blue: "#4643D3",
				peach: {
					bg: "#FEF2EE",
					text: "#FE805C",
				},
			},
		},
	},
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "active"],
	},
	plugins: [],
};
