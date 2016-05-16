'use strict';

var list = require("flux/list");

/**
 * Item at the specified Index. Negative indexes count from the end. For
 * example, when Index is -1 the output is the last item in the list.
 *
 * @param {Array.<*>}   In      List.
 * @param {Number}   Index      Index.
 *
 * @returns {{Out: *}}
 */
function run(In, Index) {
	//Special ItemAt block which can lace over the multiple requested indicies
	var Out = [];
	for (var i = 0;i<Index.length;i++)
	{
		Out.push(list.ItemAt(In, Index[i]));
	}
    return {
        Out: Out
    };
}

// Public API
module.exports = {
    run: run
};
