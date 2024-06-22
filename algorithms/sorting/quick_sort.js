/**
	Quicksort is a sorting algorithm based on the divide and conquer approach where

	An array is divided into subarrays by selecting a pivot element (element selected from the array).

	While dividing the array, the pivot element should be positioned in such a way that elements less 
	than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.
	The left and right subarrays are also divided using the same approach. This process continues until each 
	subarray contains a single element. At this point, elements are already sorted. Finally, elements are 
	combined to form a sorted array.

	Time Complexity: 
		Best - 	O(n*log n)
		Worst - 	O(n2)
		Average - 	O(n*log n)
		Space Complexity - 	O(log n)
		Stability - 	No

	1. Time Complexities:
		Worst Case Complexity [Big-O]: O(n2)
		It occurs when the pivot element picked is either the greatest or the smallest element.

		This condition leads to the case in which the pivot element lies in an extreme end of the sorted array. 
		One sub-array is always empty and another sub-array contains n - 1 elements. Thus, quicksort is called only on this sub-array.

		However, the quicksort algorithm has better performance for scattered pivots.
		Best Case Complexity [Big-omega]: O(n*log n)
		It occurs when the pivot element is always the middle element or near to the middle element.
		Average Case Complexity [Big-theta]: O(n*log n)
		It occurs when the above conditions do not occur.
	2. Space Complexity:
		The space complexity for quicksort is O(log n).

	Quicksort algorithm is used when:
		-	the programming language is good for recursion
		-	time complexity matters
		-	space complexity matters
 */

const unsortedArray = [10, 3, 6, 8, 3, 12, -5, 0, 34, 1, 9];

const partition = (arr, lowerBound, upperBound) => {
	let pivotElement = arr[lowerBound];
	let start = lowerBound;
	let end = upperBound;

	while (start < end) {
		while (arr[start] <= pivotElement) {
			start++;
		}
		while (arr[end] > pivotElement) {
			end--;
		}
		if (start < end) {
			[arr[start], arr[end]] = [arr[end], arr[start]];
		}
	}
	[arr[lowerBound], arr[end]] = [arr[end], arr[lowerBound]];
	return end;
};

const quickSort = (arr, lowerBound, upperBound) => {
	if (lowerBound < upperBound) {
		const location = partition(arr, lowerBound, upperBound);
		quickSort(arr, lowerBound, location - 1);
		quickSort(arr, location + 1, upperBound);
	}
	return arr;
};

console.log(quickSort(unsortedArray, 0, unsortedArray.length - 1));
