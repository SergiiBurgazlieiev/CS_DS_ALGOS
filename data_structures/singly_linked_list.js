/**
 * A linked list is a data structure that consists of a sequence of elements,
 * each of which contains a reference (or "link") to the next element in the sequence.
 * The first element is called the head and the last element is called the tail.
 *
 *           index
 *             0     1     2
 *             1 --> 2 --> 3 --> null
 *             |           |
 *            head        tail
 *
 *  The above liked list we can represent in the following structure in JS:
 *
 *  const obj = {
 *      head:{
 *          value: 1,
 *          next:{
 *              value: 2,
 *              next:{
 *                 value: 3,
 *                 next: null
 *              }
 *          }
 *      }
 *  }
 *
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(value) {
		this.head = {
			value,
			next: null,
		};
		this.tail = this.head;
		this.length = 0;
	}

	isNoHead(newNode) {
		this.head = newNode;
		this.tail = this.head;
		this.length++;
	}

	// O(1)
	appendLast(value) {
		const newNode = new Node(value);

		if (!this.head.value) {
			this.isNoHead(newNode);
			return this;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	// O(1)
	prependFirst(value) {
		const newNode = new Node(value);

		if (!this.head.value) {
			this.isNoHead(newNode);
			return this;
		}

		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	// O(n)
	printListValues() {
		const values = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			values.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return values;
	}

	// O(n)
	traverseToIndex(index) {
		let desiredIndex = 0;
		let currentNode = this.head;
		while (desiredIndex !== index) {
			currentNode = currentNode.next;
			desiredIndex++;
		}

		return currentNode;
	}

	// O(n)
	insertAtIndex(index, value) {
		if (index <= 0) {
			this.prependFirst(value);
			return this.printListValues();
		}
		if (index >= this.length) {
			this.appendLast(value);
			return this.printListValues();
		}

		const newNode = new Node(value);
		// 1. Grab ref to the leader node, the one which is going ot be before a new node
		const leaderNode = this.traverseToIndex(index - 1);
		// 2. Crate ref to the node which is going to come after a new node and hold this ref
		const holdingPointer = leaderNode.next;
		// 3. Now we can update our pointers and point leader node to the new node
		leaderNode.next = newNode;
		// 4. Now we are going to point new node to the holding pointer "node"
		newNode.next = holdingPointer;
		// 5. Increase length by one, since we added one node to the list
		this.length++;
		// 6. Print result once insertion is complete
		return this.printListValues();
	}

	removeFirst() {
		if (!this.head) {
			return;
		} else {
			if (this.head === this.tail) {
				this.head = new Node();
				this.tail = this.head;
				this.length = 0;
				return this;
			} else {
				this.head = this.head.next;
				this.length--;
				return this;
			}
		}
	}

	removeLast() {
		if (!this.head) {
			return;
		} else {
			if (this.head === this.tail) {
				this.head = new Node();
				this.tail = this.head;
				this.length = 0;
				return this;
			} else {
				let currentNode = this.head;
				while (currentNode.next !== this.tail) {
					currentNode = currentNode.next;
				}
				this.tail = currentNode;
				this.tail.next = null;
				this.length--;
				return this;
			}
		}
	}

	// O(n)
	removeAtIndex(index) {
		if (index <= 0) {
			return this.removeFirst();
		}
		if (index >= this.length) {
			return this.removeLast();
		}
		// 1. Grab ref to the leader node, the one which is going ot be before a new node
		const leaderNode = this.traverseToIndex(index - 1);
		// 2. Grab ref to the node which is going to be deleted
		const unwantedNode = leaderNode.next;
		// 3. Point leader node to the next node which comes after unwanted node
		leaderNode.next = unwantedNode.next;
		// 4. Decrease length since we removing node from the list
		this.length--;

		return this.printListValues();
	}

	reverse() {
		if (!this.head.next) {
			return this.head;
		}

		let first = this.head;
		this.tail = this.head;
		let second = first.next;

		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;
		return this;
	}
}

const myList = new SinglyLinkedList();
myList.appendLast(10);
myList.appendLast(11);
myList.appendLast(12);
myList.appendLast(13);
myList.reverse();
console.log(myList);
console.log(myList.printListValues());
