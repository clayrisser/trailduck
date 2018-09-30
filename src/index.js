import map from 'lodash.map';
import Graph from './graph';

export default class TopologicalCyclicSort {
  grey = {};

  black = {};

  constructor(description) {
    this.graph = new Graph(description);
    this.white = this.graph.tree;
    while (Object.keys(this.white).length > 0) {
      this.explore(this.white[Object.keys(this.white)[0]]);
    }
    console.log('white', Object.keys(this.white));
    console.log('grey', Object.keys(this.grey));
    console.log('black', Object.keys(this.black));
  }

  explore(current, previous) {
    console.log(current.name);
    console.log('white', Object.keys(this.white));
    console.log('grey', Object.keys(this.grey));
    console.log('black', Object.keys(this.black));
    console.log('============\n');
    if (previous) current.previous = previous;
    if (current.list === 'white') this.moveNode(current, 'grey');
    if (current.list === 'black') return null;
    if (current.explored) {
      this.moveNode(current, 'black');
      if (current.previous) {
        this.explore(current.previous, current.previous.previous);
      }
    } else {
      return map(current.children, child => {
        if (child.list === 'grey') {
        } else if (child.list === 'white') {
          this.explore(child, current);
        }
      });
    }
  }

  moveNode(node, list) {
    delete this[node.list][node.name];
    node.list = list;
    this[list][node.name] = node;
  }
}
