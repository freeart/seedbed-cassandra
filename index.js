const assert = require('assert'),
	cassandra = require('cassandra-driver');

module.exports = function () {
	assert(!this.cassandra, "field exists")

	this.cassandra = new cassandra.Client({ contactPoints: this.config.get("cassandra.contact_points"), keyspace: this.config.get("cassandra.keyspace") });

	return Promise.resolve();
}