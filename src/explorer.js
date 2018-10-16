export default class Explorer {
  location = null;

  trail = null;

  history = [];

  constructor({ trail }) {
    this.trail = trail;
    if (this.trail.head) {
      this.location = this.trail.head.visit();
    }
  }

  explore() {
    if (!this.trail.head) return null;
    while (!this.trail.head.explored) {
      const child = this.location.getUnvisitedChild();
      if (child) {
        const cycle = this.detectCycle(child);
        if (cycle) {
          this.markCycle(cycle);
          this.moveBackwards();
        } else {
          this.moveForward(child);
        }
      } else {
        this.moveBackwards();
      }
    }
    return null;
  }

  moveForward(child) {
    this.history.push(this.location.name);
    this.location = child.visit(this.location);
  }

  moveBackwards() {
    this.location.explored = true;
    this.trail.push(this.location);
    if (this.history.length) {
      this.location = this.trail.tree[this.history.pop()];
    }
  }

  detectCycle(child) {
    if (this.history.includes(child.name)) {
      const history = [...this.history, this.location.name];
      return history.slice(history.indexOf(child.name));
    }
    return null;
  }

  markCycle(cycle) {
    this.trail.cycles.push(cycle);
    cycle.forEach(nodeName => {
      this.trail.getNode(nodeName).cycles.push(cycle);
    });
  }
}
