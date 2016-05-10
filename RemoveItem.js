'use strict';

/**
 * This code block removes a specific item from the list.
 * If there are multiple items, they will all be removed.
 * @param {List} the original list of values
 * @param {Item} the item / list of items to remove from the list
 * @return {List} list with removed items
 */
function run(List, Item) {

	var trigger = false;
	if(Array.isArray(Item)){						// check if second input is a list			
		trigger = true;
	}

	for(var i = List.length-1; i >=0 ; i--){	
		if(trigger){								// if second input is a list
			for(var j = 0; j < Item.length; j++){	// cycle through all elemtns
				if(List[i] == Item[j]){ 			
					List.splice(i,1);				// remove elements
				}	
			}	
		} else{										// if second input is not a list
			if(List[i] == Item){ 
			List.splice(i,1);
			}	
		}
	}
	return {List: List};
}

module.exports = {
    run: run
};
