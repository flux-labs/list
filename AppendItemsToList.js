'use strict';

/**
* Append a series of items to a list
* @param {List} Original list
* @param {Items} Items to append to list.
* This input can be a single item or can be a list
* 
* @returns {NewList} New list with appended items.
*/
function run(List, Items) {

	var newList = [];										// create new empty list
	
	if(Array.isArray(List)){								// if object is a list
		newList = List;										// set equal to new list
	} else {												// if object is not a list
		newList.push(List);									// append fist item
	}

	if(Array.isArray(Items)){								// test if input is an array
		for(var i = 0; i < Items.length; i++){				// if it is an array cycle through adding new items
			newList.push(Items[i]);
		}
	} else {												// if it is not a list
		newList.push(Items);								// just add the item to the list
	}

	return{NewList: newList};								// return new list
}

module.exports = {
    run: run
};
