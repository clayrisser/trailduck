import Node from './node';

export default class Trail {
  description = {};

  tree = {};

  head = null;

  ordered = [];

  orderedKeys = [];

  constructor(description, head) {
    this.description = description;
    this.createTree(this.description, head);
  }

  push(node) {
    if (!this.orderedKeys.includes(node.name)) {
      this.ordered.push(node);
      this.orderedKeys.push(node.name);
    }
  }

  createTree(description, head) {
    const tree = {};
    Object.entries(description).map(([key, nodeDescription]) => {
      tree[key] = new Node({ name: key, payload: nodeDescription.payload });
    });
    Object.entries(description).map(([key, nodeDescription]) => {
      tree[key].link(tree, nodeDescription);
    });
    this.tree = tree;
    this.head = head ? this.tree[head] : this.getTrailHead();
  }

  getTrailHead() {
    let head = this.tree[Object.keys(this.tree)[0]];
    const history = [];
    while (Object.keys(head.parents).length) {
      const parentKey = Object.keys(head.parents)[0];
      if (history.includes(parentKey)) {
        throw new Error(
          "trail head (root node) must be marked 'head' if root is cyclic"
        );
      }
      history.push(parentKey);
      head = head.parents[parentKey];
    }
    return head;
  }

  getNode(nodeName) {
    return this.tree[nodeName];
  }
}
