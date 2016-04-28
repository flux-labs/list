'use strict';

/**
 * This code block removes a specific item from the list.
 * If there are multiple items, they will all be removed.
 * @param {List} the original list of values
 * @param {Item} the item to remove from the list
 * @return {List} list with removed items
 */
function run(List, Item) {

	for(var i = List.length-1; i >=0 ; i--){
		if(List[i] == Item){ 
			List.splice(i,1);
		}
	}
	return {List: List};
}

module.exports = {
    run: run
};
