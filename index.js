

class BinarySearchTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    const place = data <= this.data ? "left" : "right";

    if (this[place]) {
      this[place].insert(data);
    } else {
      this[place] = new BinarySearchTree(data);
    }
  }

  each(callback) {
    if (this.left) this.left.each(callback);
    callback(this.data);
    if (this.right) this.right.each(callback);
  }
}

module.exports = BinarySearchTree;
