class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val)
    
    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root

    function hasLeft(node) {
      if (node.left === null) {
        return false
      } else {
        return true
      }
    }

    function hasRight(node) {
      if (node.right ===  null) {
        return false
      } else {
        return true
      }
    }

    while (current) {
      if (current.val < val) {
        if (hasRight(current)) {
          current = current.right
        } else {
          current.right = newNode 
          return this
        }
      } else if (current.val > val) {
        if (hasLeft(current)) {
          current = current.left
        } else {
          current.left = newNode
          return this
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val)

    if (!this.root) {
      this.root = newNode
      return this
    }

    function findEndpoint(current) {
      if (current.val < val && current.right === null) {
        current.right = newNode
      }
      if (current.val > val && current.left === null) {
        current.left = newNode
      }
      if (current.val < val) {
        findEndpoint(current.right)
      }
      if (current.val > val) {
        findEndpoint(current.left)
      }
    }

    findEndpoint(this.root)
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return undefined
    }

    let current = this.root
    
    function hasLeft(node) {
      if (node.left === null) {
        return false
      } else {
        return true
      }
    }

    function hasRight(node) {
      if (node.right ===  null) {
        return false
      } else {
        return true
      }
    }

    while (current) {
      if (current.val === val) {
        return current
      }
      if (current.val > val) {
        if (hasLeft(current)) {
          current = current.left
        } else {
          return undefined
        }
      }
      if (current.val < val) {
        if (hasRight(current)) {
          current = current.right
        } else {
          return undefined
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) {
      return undefined
    }
    let res = undefined
    function find(current) {
      if (current.val === val) {
        res = current
      }
      if (current.val > val && current.left === null) {
        res = undefined
      } else if (current.val > val) {
        find(current.left)
      }
      if (current.val < val && current.right === null) {
        res = undefined
      } else if (current.val < val) {
        find(current.right)
      }
    }
    
    find(this.root)
    return res
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const res = []

    function traverse(node) {
      res.push(node.val)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }

    traverse(this.root)
    return res
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const res = []

    function traverse(node) {
      if(node.left) traverse(node.left)
      res.push(node.val)
      if(node.right) traverse(node.right)
    }

    traverse(this.root)
    return res
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const res = []

    function traverse(node) {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      res.push(node.val)
    }

    traverse(this.root)
    return res
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const res = []
    const toVisitQueue = [this.root]

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift()

      res.push(current.val)
      if(current.left) {
        toVisitQueue.push(current.left)
      }
      if(current.right) {
        toVisitQueue.push(current.right)
      }
    }
    
    return res
  }
  

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
