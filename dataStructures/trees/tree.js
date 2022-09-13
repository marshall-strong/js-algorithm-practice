// https://medium.com/swlh/traversing-trees-breadth-first-and-depth-first-searches-with-javascript-316f23c9fe8f

// Queue implementation

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null; // assume you are the first in line; watch behind you
  }
}

class Queue {
  // `constructor` creates a new, empty Queue
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // `enqueue` accepts the `value` of a new node to add to the back of the line,
  //  then returns the updated queue
  enqueue(value) {
    const newNode = new QueueNode(value);
    if (this.size !== 0) {
      // updates the last node in line to point to the new node as the next node
      //  in line, then updates the queue so that the new node is last in line
      this.last.next = newNode;
      this.last = newNode;
    } else {
      // adds the new node to an empty queue
      this.first = newNode;
      this.last = newNode;
    }

    // updates the queue size before returning the updated queue
    this.size++;

    return this;
  }

  // `dequeue` removes the node at the front of the line from the queue,
  //  then returns the dequeued node
  dequeue() {
    // `dequeue` returns `false` if the queue is empty
    if (this.size === 0) return false;
    // the first node in line is the one that gets dequeued
    const dequeuedNode = this.first;
    // the new first node is the next node after the dequeued node
    const newFirstNode = dequeuedNode.next;
    // if the queue only has one node, once the dequeued node is removed the
    //  queue will be empty, and both `first` and `last` should equal `null`
    if (!newFirstNode) {
      this.first = null;
      this.last = null;
    } else {
      this.first = newFirstNode;
    }
    // updates the queue size
    this.size--;
    // removes the pointer from the dequeued node before returning it
    dequeuedNode.next = null;

    return dequeuedNode;
  }

  // logs the queue to the console
  log() {
    let currentNode = this.first;
    let i = 0;
    while (currentNode) {
      console.log(i, currentNode.value);
      i++;
      currentNode = currentNode.next;
    }
  }
}

// Tree implementation

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  // `constructor` creates a new, empty Tree
  constructor() {
    this.root = null;
  }

  // Breadth First Search implementation

  // When we process a node from the front of the queue, we'll also check if the
  //  node has any children -- if it does, we'll add them to the back of the
  //  queue. We'll also need to keep track of each node's value by adding it to
  //  an array.

  traverseBFS() {
    // returns `false` if the Tree has no root
    if (!this.root) return false;
    // `treeValues` uses an array to keep a tally of the values in the tree
    const treeValues = [];
    // initializes a new Queue
    const queue = new Queue();
    // starts by adding the root to the queue
    queue.enqueue(this.root);
    // traverse the tree using BFS, adding values to the array in the order that
    //  the nodes are traversed
    while (queue.size !== 0) {
      // if the current node has children, add them to the back of the queue
      const nodeChildren = queue.first.value.children;
      if (nodeChildren.length !== 0) {
        nodeChildren.forEach((child) => queue.enqueue(child));
      }
      // add the current node's value to the end of the array of tree values
      treeValues.push(queue.first.value);
      // removes the node from the queue after its value has been logged
      queue.dequeue();
    }

    // returns an array containing the values of all TreeNodes in the Tree,
    //  in the order that the nodes were visited
    return treeValues;
  }

  // depth first search
  traverseDFS(type) {}
}

const testTree = new Tree();

testTree.root = new TreeNode("H");
testTree.root.children.push(new TreeNode("e"));
testTree.root.children.push(new TreeNode("l"));
testTree.root.children[0].children.push(new TreeNode("l"));
testTree.root.children[0].children.push(new TreeNode("o"));
testTree.root.children[0].children.push(new TreeNode("W"));
testTree.root.children[1].children.push(new TreeNode("o"));
testTree.root.children[1].children.push(new TreeNode("r"));
testTree.root.children[1].children.push(new TreeNode("l"));
testTree.root.children[1].children.push(new TreeNode("d"));

console.log(testTree.traverseBFS());

// const testTree2 = new Tree();

// testTree2.root = new TreeNode(10);
// testTree2.root.children.push(new TreeNode(6));
// testTree2.root.children.push(new TreeNode(15));
// testTree2.root.children[0].children.push(new TreeNode(3));
// testTree2.root.children[0].children.push(new TreeNode(8));
// testTree2.root.children[0].children.push(new TreeNode(7));
// testTree2.root.children[1].children.push(new TreeNode(20));

// console.log(testTree2.traverseDFS("in"));
