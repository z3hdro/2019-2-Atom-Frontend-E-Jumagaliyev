// Configuration for StyleLint
// See: https://stylelint.io/user-guide/configuration/

module.exports = {
	extends: [
		'@wemake-services/stylelint-config-scss',
		'stylelint-config-css-modules',
		'stylelint-a11y/recommended',
	],
	plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-a11y', 'stylelint-high-performance-animation', 'stylelint-no-indistinguishable-colors'],

	rules: {
		// ignore special `var-` css variables for `:export`
		'property-no-unknown': [
			true,
			{
				ignoreProperties: ['/^var-/'],
			},
		],

		// custom plugins to work with
		'plugin/no-unsupported-browser-features': [
			true,
			{
				severity: 'warning',
				ignore: ['flexbox'],
			},
		],
		
		'scss/media-feature-value-dollar-variable': 'never',
		'csstools/use-nesting': 'ignore',

		'plugin/stylelint-no-indistinguishable-colors': false,

		'plugin/no-low-performance-animation-properties': [true, 
			{ ignoreProperties: ['color', 'background-color','box-shadow'] } ],

		// a11y
		'a11y/content-property-no-static-value': true,
		'a11y/selector-pseudo-class-focus': true,
		'scale-unlimited/declaration-strict-value': ['/color/', 'fill', 'stroke'],
	},
};
