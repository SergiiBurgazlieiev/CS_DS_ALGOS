/**
 * Selection sort is the child's algorithm: simple, but inefficient.
 * Find the smallest element using a leaner scan and move it to the
 * from (swapping it with the front element). Then, find the second smallest
 * and move it, again doing a linear scan. Continue doing this until all
 * elements are in place.
 *
 * Runtime complexity - O(n^2) - average and worst case.
 * Space complexity(memory) - O(1)
 */

const unsortedArray = [10, 3, 6, 8, 3, 12, 0, -5, 34, 1, 9];

const selectionSort = (arr) => {
	const len = arr.length;

	for (let i = 0; i < len - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}
	return arr;
};

console.log(selectionSort(unsortedArray));
