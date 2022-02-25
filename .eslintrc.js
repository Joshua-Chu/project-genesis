module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},

	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},

	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": {
			node: {
				extensions: [".ts", ".tsx"],
			},
		},
	},

	plugins: ["@typescript-eslint"],
	extends: [
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"airbnb",
		"prettier",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:sonarjs/recommended",
		"plugin:security/recommended",
		"plugin:react-hooks/recommended",
	],

	rules: {},
};
