# list
A collection of experimental list manipulation functions for Flux code blocks. These are candidates for addition to the Flux block library. 

### `chop(list, chunkSize)`
Chop a list into chunks of a given size.

### `unflatten(flattened, structure)`
Return a previously flattened list to its original structure. Useful when applying a laced operation on elements of a multi-dimensional array while preserving its structure.

### `Append(List, Items)`
Appends items to a list.
Inputs:
	List: can be a list or an individual item
	Items: can be a list or an individual item
Output:
	NewList: new list of items

### `RemoveNulls(list)`
Removes all null values from list.

### `Where(list, obj)`
Returns all objects in a list containing properties that match the input object. Wrapper for "where" function in lodash 2.4.2.

