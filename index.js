const jokes = require('./jokes.js');

module.exports = {
	getRandom() {
		const n = jokes.length;
		return jokes[Math.floor(Math.random() * n)];
	},
};
