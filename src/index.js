import Trail from './trail';
import Explorer from './explorer';

export default class TrailDuck {
  constructor(graph) {
    this.trail = new Trail(graph);
    this.explorer = new Explorer({ trail: this.trail });
    this.explorer.explore();
    this.clean();
  }

  clean() {
    this.cycles = this.trail.cycles;
    this.head = this.trail.head;
    this.ordered = this.trail.ordered;
    this.tree = this.trail.tree;
    if (this.head && this.head.name === '_genesis') {
      delete this.tree._genesis;
      this.ordered.pop();
      this.head = null;
    }
    this.ordered.forEach(node => {
      node.clean();
    });
    delete this.clean;
    delete this.explorer;
    delete this.trail;
  }
}
