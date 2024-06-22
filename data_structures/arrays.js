// /**
//  * I am gonna build an array from scratch
//  */

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const reverseString = (str) => {
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'Please provide an argument which is type String';
	}
	// One line solution;
	//return str.split('').reverse().join('');

	// Second solution;
	let reversedStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return reversedStr;
};

const mergeSortedArrays = (arr1, arr2) => {
	const mergedArray = [];
	let arrayOneItem = arr1[0];
	let arrayTwoItem = arr2[0];
	let i = 1;
	let j = 1;

	// Check input
	if (arr1.length === 0) {
		return arr2;
	}
	if (arr2.length === 0) {
		return arr1;
	}

	while (arrayOneItem || arrayTwoItem) {
		if (!arrayTwoItem || arrayOneItem < arrayTwoItem) {
			mergedArray.push(arrayOneItem);
			arrayOneItem = arr1[i];
			i++;
		} else {
			mergedArray.push(arrayTwoItem);
			arrayTwoItem = arr2[j];
			j++;
		}
	}

	return mergedArray;
};
