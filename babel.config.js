module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				exclude: [
					'transform-async-to-generator',
					'proposal-async-generator-functions',
					'transform-regenerator'
				],
				targets: {
					chrome: '58',
					ie: '11',
				},
			},
		],
	],
	plugins: [
		'babel-plugin-transform-async-to-promises',
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'createElement',
				pragmaFrag: 'Fragment',
			},
		],
	],
};
