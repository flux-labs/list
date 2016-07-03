'use strict';

var _ = require('lodash');

/**
 * Removes all null values from a list.
 *
 * @param {In}     In      List
 *
 * @returns {Out}  Out     List without nulls
 */

function run(In) {
	_.remove(In, _.isNull);
	return {
		Out: In
	}
}

module.exports = {
    run: run
};
