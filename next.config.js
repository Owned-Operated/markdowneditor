const result = require('dotenv').config()

module.exports = {
	reactStrictMode: false,
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		return config
	}
}