import React from "react";
import "../src/index.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: "tan",
		values: [
			{
				name: "tan",
				value: "#FAEFE3",
			},
		],
	},
};

export const decorators = [
	(Story) => (
		<div className="flex justify-center align-middle">
			<div>
				<Story />
			</div>
		</div>
	),
];
