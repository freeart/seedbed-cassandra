const assert = require('assert')

module.exports = function () {
	assert(!this.cassandra, "field exists")


	this.on("ready", () => {

	});

	return Promise.resolve();
}
