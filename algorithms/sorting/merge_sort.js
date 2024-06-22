/**
 	Using the Divide and Conquer technique, we divide a problem into subproblems. 
 	When the solution to each subproblem is ready, we 'combine' the results from the subproblems to solve the main problem.
	Suppose we had to sort an array A. A subproblem would be to sort a sub-section of this array 
	starting at index p and ending at index r, denoted as A[p..r].

	Divide
	If q is the half-way point between p and r, then we can split the subarray A[p..r] into two arrays A[p..q] and A[q+1, r].

	Conquer
	In the conquer step, we try to sort both the subarrays A[p..q] and A[q+1, r]. 
	If we haven't yet reached the base case, we again divide both these subarrays and try to sort them.

	Combine
	When the conquer step reaches the base step and we get two sorted subarrays A[p..q] and A[q+1, r] for array A[p..r], 
	we combine the results by creating a sorted array A[p..r] from two sorted subarrays A[p..q] and A[q+1, r].

	Merge Sort Complexity

	Time Complexity	 
	Best - 	O(n*log n)
	Worst - 	O(n*log n)
	Average - 	O(n*log n)
	Space Complexity - 	O(n)
	Stability - 	Yes

	Merge Sort Applications:
		- Inversion count problem
		- External sorting
		- E-commerce applications
 */

const unsortedArray = [10, 3, 6, 8, 3, 12, 0, -5, 34, 1, 9];

const merge = (arrayLeft, arrayRight) => {
	const sortedArray = [];
	while (arrayLeft.length && arrayRight.length) {
		if (arrayLeft[0] < arrayRight[0]) {
			sortedArray.push(arrayLeft.shift());
		} else {
			sortedArray.push(arrayRight.shift());
		}
	}
	return [...sortedArray, ...arrayLeft, ...arrayRight];
};

const mergeSort = (arr) => {
	if (arr.length < 2) {
		return arr;
	}

	const middle = Math.floor(arr.length / 2);
	const leftArray = arr.slice(0, middle);
	const rightArray = arr.slice(middle);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
};

console.log(mergeSort(unsortedArray));
