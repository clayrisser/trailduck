import Node from './node';

export default class Trail {
  graph = {};

  tree = {};

  head = null;

  ordered = [];

  orderedKeys = [];

  cycles = [];

  constructor(graph, head) {
    this.graph = graph;
    this.createTree(this.graph, head);
  }

  push(node) {
    if (!this.orderedKeys.includes(node.name)) {
      this.ordered.push(node);
      this.orderedKeys.push(node.name);
    }
  }

  createTree(graph, head) {
    const tree = {};
    Object.entries(graph).map(([key, graphNode]) => {
      tree[key] = new Node({ name: key, payload: graphNode.payload });
    });
    Object.entries(graph).map(([key, graphNode]) => {
      tree[key].link(tree, graphNode);
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
