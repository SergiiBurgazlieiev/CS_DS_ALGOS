class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value,
			next: null,
			prev: null,
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
		newNode.prev = this.tail;
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
		this.head.prev = newNode;
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
		const follower = leaderNode.next;
		// 3. Point leader node to the new node
		leaderNode.next = newNode;
		// 4. Point new node to the previous node
		newNode.prev = leaderNode;
		// 5. Point new node to the following node
		newNode.next = follower;
		// 6. Point following node to the new node
		follower.prev = newNode;
		// 7. Increase length by one, since we added one node to the list
		this.length++;
		// 8. Print result once insertion is complete
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
				this.head.prev = null;
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
		const follower = unwantedNode.next;
		// 3. Point leader node to the next node which comes after unwanted node
		leaderNode.next = unwantedNode.next;
		// 4. Point prev to the leader node;
		follower.prev = leaderNode;
		// 5. Decrease length since we removing node from the list
		this.length--;

		return this.printListValues();
	}
}

const myList = new DoublyLinkedList();
