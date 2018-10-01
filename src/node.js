export default class Node {
  children = {};

  parents = {};

  unvisitedChildren = {};

  previous = null;

  cycles = [];

  visited = false;

  explored = false;

  name = null;

  payload = {};

  constructor({ name, payload }) {
    this.name = name;
    this.payload = payload;
  }

  link(tree, nodeDescription) {
    if (nodeDescription.children) {
      nodeDescription.children.forEach(child => {
        this.children[child] = tree[child];
        this.children[child].parents[this.name] = this;
      });
    }
    this.unvisitedChildren = this.children;
  }

  visit(previous) {
    this.visited = true;
    if (previous) {
      this.previous = previous;
      delete this.previous.unvisitedChildren[this.name];
    }
    return this;
  }

  getUnvisitedChild() {
    const { unvisitedChildren } = this;
    const keys = Object.keys(unvisitedChildren);
    if (!keys.length) return null;
    return unvisitedChildren[keys[0]];
  }

  clean() {
    delete this.explored;
    delete this.getUnvisitedChild;
    delete this.link;
    delete this.previous;
    delete this.unvisitedChildren;
    delete this.visit;
    delete this.visited;
    delete this.clean;
  }
}
