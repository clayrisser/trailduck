import Trail from './trail';
import Explorer from './explorer';

export default class TrailDuck {
  constructor(graph, head) {
    this.trail = new Trail(graph, head);
    this.explorer = new Explorer({ trail: this.trail });
    this.explorer.explore();
    this.clean();
  }

  clean() {
    this.ordered = this.trail.ordered;
    this.tree = this.trail.tree;
    this.head = this.trail.head;
    this.ordered.forEach(node => {
      node.clean();
    });
    delete this.trail;
    delete this.explorer;
    delete this.clean;
  }
}
