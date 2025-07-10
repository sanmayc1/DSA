class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    let cur = this.root;
    if (!cur) {
      this.root = newNode;
      return;
    }

    while (cur) {
      if (cur.data > value) {
        if (!cur.left) {
          cur.left = newNode;
          return;
        }
        cur = cur.left;
      } else if (cur.data < value) {
        if (!cur.right) {
          cur.right = newNode;
          return;
        }
        cur = cur.right;
      }
    }
  }

  inOrder(root = this.root) {
    if (!root) return;
    this.inOrder(root.left);
    console.log(root.data);
    this.inOrder(root.right);
  }
  preOrder(root = this.root) {
    if (!root) return;
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  postOrder(root = this.root) {
    if (!root) return;
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.data);
  }
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, target) {
    if (!node) return null;

    if (node.data > target) {
      node.left = this._removeNode(node.left, target);
    } else if (node.data < target) {
      node.right = this._removeNode(node.right, target);
    } else {
      if (!node.left && !node.right) return null;

      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const max = this._maxValue(node.left);
      node.data = max.data;
      node.left = this._removeNode(node.left, max.data);
    }
    return node;
  }

  height(root = this.root) {
    if (!root) return -1;
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  _maxValue(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  depth(value, node = this.root, currentDepth = 0) {
    if (!node) return -1;

    if (node.data === value) return currentDepth;

    if (node.data > value) {
      return this.depth(value, node.left, currentDepth + 1);
    } else {
      return this.depth(value, node.right, currentDepth + 1);
    }
  }

  isBalanced() {
    return this.checkBalanced(this.root) !== -1;
  }
  checkBalanced(node) {
    if (!node) return 0;

    let leftHeight = this.checkBalanced(node.left);
    if (leftHeight === -1) return -1;

    let rightHeight = this.checkBalanced(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return 1 + Math.max(leftHeight, rightHeight);
  }
  thirdLargest() {
    let count = 0;
    let result = null;

    function reverseInorder(node) {
      if (!node || count >= 3) return;

      reverseInorder(node.right);

      count++;
      if (count === 3) {
        result = node.data;
        return;
      }

      reverseInorder(node.left);
    }

    reverseInorder(this.root);
    return result !== null ? result : "Less than 3 nodes in tree";
  }

  secondSmallest(){
  let count = 0
  let result = null

  function inorder(node){
    if(!node || count > 2)return
    inorder(node.left)
    count++
    if(count === 2){
      result = node.data
      return
    }
    inorder(node.right)
  }
  inorder(this.root)
  return result !== null ? result : " no two element"
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(11);
bst.insert(12);
bst.insert(4);
bst.insert(3);
bst.remove(3);
bst.inOrder();
console.log(bst.depth(5));
console.log(bst.height());
console.log(bst.isBalanced());
console.log(bst.test())
