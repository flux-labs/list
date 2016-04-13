'use strict';

/**
 * Code block template.
 *
 */
function run(flattened, structure) {

	function traverse(arr) {
		if (Array.isArray(arr))
			return arr.map(traverse);
		else
			return flattened.shift();
	}
	
	return {
		unflattened: traverse(structure)
	};
}

module.exports = {
    run: run
};
