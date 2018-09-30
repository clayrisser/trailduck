import reduce from 'lodash.reduce';

export default class Node {
  children = {};

  parents = {};

  edges = {};

  links = {};

  previous = null;

  cycles = [];

  list = 'white';

  constructor({ name }) {
    this.name = name;
  }

  link(tree, nodeDescription) {
    const children = {};
    if (nodeDescription.children) {
      nodeDescription.children.forEach(child => {
        children[child] = tree[child];
        children[child].parents[this.name] = this;
      });
    }
    this.children = children;
  }

  get explored() {
    return (
      this.list === 'black' ||
      !Object.keys(this.children).length ||
      reduce(
        this.children,
        (explored, child) => {
          return explored && child.list === 'black';
        },
        true
      )
    );
  }
}
