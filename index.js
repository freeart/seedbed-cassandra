const assert = require('assert'),
	cassandra = require('cassandra-driver');

module.exports = function () {
	assert(!this.cassandra, "field exists")

	this.cassandra = new cassandra.Client({ contactPoints: ['localhost'], keyspace: 'nvd' });

	return Promise.resolve();
}