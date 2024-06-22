// Implement a hash table from scratch

class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		//O(1)
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}

	get(key) {
		//O(1)
		let address = this._hash(key);
		const currentBucket = this.data[address];
		console.log(currentBucket);
		if (currentBucket) {
			for (let i = 0; i <= currentBucket.length - 1; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	keys() {
		// O(n) if no collisions
		// O(n^2) if there are collisions
		if (!this.data.length) {
			return undefined;
		}
		const keysArray = [];
		for (let i = 0; i <= this.data.length - 1; i++) {
			if (this.data[i] && this.data[i].length) {
				//loop through all the potential collisions
				if (this.data[i].length > 1) {
					for (let j = 0; j <= this.data[i].length - 1; j++) {
						keysArray.push(this.data[i][j][0]);
					}
				} else {
					keysArray.push(this.data[i][0][0]);
				}
			}
		}
		return keysArray;
	}
}

//const hashTable = new HashTable(100);

/**
 * Given an array returns first recurring number
 * in the array.
 * Given an array = [1,2,3,4,5,3,10] => 3
 * If no recurring number return undefined.
 */

// Naive approach O(N^2) time complexity
const returnRecurringNumberNaive = (arr) => {
	for (let i = 0; i <= arr.length - 1; i++) {
		for (let j = i - 1; j >= 0; j--) {
			if (arr[i] === arr[j]) {
				return arr[i];
			}
		}
	}
	return undefined;
};

// This solution with hash table has time complexity O(n)
// But we increased memory by O(n) by adding object data structure
const returnRecurringNumberFaster = (arr) => {
	const map = {};
	for (let i = 0; i <= arr.length - 1; i++) {
		if (map[arr[i]] !== undefined) {
			return arr[i];
		} else {
			map[arr[i]] = arr[i];
		}
	}
	return undefined;
};

console.log('NAIVE', returnRecurringNumberNaive([5, 2, 2, 3, 5, 4, 6, 7, 1]));
console.log(
	'WITH HASH TABLE',
	returnRecurringNumberFaster([5, 2, 2, 3, 5, 4, 6, 7, 1])
);
