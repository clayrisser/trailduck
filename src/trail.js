import Node from './node';

export default class Trail {
  graph = {};

  tree = {};

  head = null;

  ordered = [];

  orderedKeys = [];

  cycles = [];

  constructor(graph) {
    this.graph = graph;
    this.createTree();
  }

  push(node) {
    if (!this.orderedKeys.includes(node.name)) {
      this.ordered.push(node);
      this.orderedKeys.push(node.name);
    }
  }

  createTree() {
    if (this.graph) {
      Object.entries(this.graph).map(([key, graphNode]) => {
        if (key === '_genesis') {
          throw new Error("node name '_genesis' is forbidden");
        }
        this.tree[key] = new Node({ name: key, payload: graphNode.payload });
      });
      Object.entries(this.graph).map(([key, graphNode]) => {
        this.tree[key].link(this.tree, graphNode);
      });
    }
    this.head = this.getTrailHead();
    return this.tree;
  }

  getTrailHead() {
    this.tree._genesis = new Node({ name: '_genesis' });
    this.tree._genesis.link(this.tree, {
      children: Object.keys(this.tree)
    });
    return this.tree._genesis;
  }

  getNode(nodeName) {
    return this.tree[nodeName];
  }

  clean() {
    delete this.tree._genesis;
  }
}
