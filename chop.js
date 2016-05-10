'use strict';

/**
 * This code block takes a list and splits it into sub lists
 * @param {List} the original list of values
 * @param {Size} the size of sub lists
 *
 * @return {Lists} the new set of lists
 */
function run(List,Size) {
	
	var chunks = [];
	for (var i = 0; i < List.length/Size;i++){
		chunks.push(List.slice(i*Size,(i+1)*Size));
	}
	return {Lists:chunks};
}

module.exports = {
    run: run
};