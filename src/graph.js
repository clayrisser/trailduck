import map from 'lodash.map';
import Node from './node';

export default class Graph {
  constructor(description) {
    this.description = description;
    this.tree = this.createTree(this.description);
  }

  createTree(description) {
    const tree = {};
    map(description, (nodeDescription, key) => {
      tree[key] = new Node({ name: key });
    });
    map(description, (nodeDescription, key) => {
      tree[key].link(tree, nodeDescription);
    });
    return tree;
  }
}
