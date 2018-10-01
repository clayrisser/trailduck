import Trail from './trail';
import Explorer from './explorer';

export default class TrailDuck {
  constructor(description, head) {
    this.trail = new Trail(description, head);
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
