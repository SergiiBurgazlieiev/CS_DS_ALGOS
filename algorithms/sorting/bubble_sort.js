/**
 * In bubble sort, we start at the begging of the array
 * and swap the first two elements if the first is grater
 * than second. Then, we go to the next pair, and so on,
 * continuously making sweeps of the array until it is sorted.
 * In doing so, the smaller items slowly "bubble" up to the
 * beginning of the list
 *
 * Runtime of this algo is O(n^2) - average and worst case
 *
 * Space complexity(memory): O(1)
 */

const unsortedArray = [10, 3, 6, 8, 3, 12, 0, -5, 34, 1, 9];

// With nested for loop
const bubbleSortOne = (arr) => {
	const len = arr.length - 1;
	for (let i = 0; i < len; ++i) {
		for (let j = 0; j < len; ++j) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
};

// With do/while loop and for loop
const bubbleSortTwo = (arr) => {
	const len = arr.length - 1;
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < len; ++i) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
};

console.log('One', bubbleSortOne(unsortedArray));
console.log('Two', bubbleSortTwo(unsortedArray));
