'use strict';

var _ = require('lodash');

/**
 * Wrapper for the lodash 2.4.2 "where" function, which returns
 * all objects in a list containing properties matching the input object.
 *
 * @param {In}     In      List of objects
 * @param {Obj}    Obj     Object with target properties
 *
 * @returns {Out}  Out     Matching objects
 */

function run(In, Obj) {
	return {Out: _.where(In, Obj)};
}

module.exports = {
    run: run
};
