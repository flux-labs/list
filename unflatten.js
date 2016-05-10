'use strict';

/**
 * Un-Flatten a list based on a guide list
 * @param {List} Flattened list
 * @param {Structure} Guide List
 *
 * @returns {UnFlattened} Unflattened list
 */
function run(List, Structure) {

	function traverse(arr) {
		if (Array.isArray(arr))
			return arr.map(traverse);
		else
			return List.shift();
	}
	
	return {
		UnFlattened: traverse(Structure)
	};
}

module.exports = {
    run: run
};
