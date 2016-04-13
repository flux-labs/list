'use strict';

/**
 * Code block template.
 *
 */
function run(list,chunkSize) {
	
	var chunks = [];
	for (var i=0;i<list.length/chunkSize;i++){
		chunks.push(list.slice(i*chunkSize,(i+1)*chunkSize));
	}
	return {chunks:chunks};
	
}

module.exports = {
    run: run
};