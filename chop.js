'use strict';

/**
 * Code block template.
 *
 */
function run(list,chunkSize) {
	
	var x = 0;
	var chunks = [];
	for (var i=0;i<list.length/chunkSize;i++){
		chunks.push(list.slice(x,x+chunkSize));
		x += chunkSize;
	}
	return {chunks:chunks};
	
}

module.exports = {
    run: run
};