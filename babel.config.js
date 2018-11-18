module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: 'maintained node versions',
			},
		],
	],
	plugins: [
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'createElement',
				pragmaFrag: 'Fragment',
			},
		],
	],
};
