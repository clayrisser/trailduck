export default class Explorer {
  location = null;

  trail = null;

  constructor({ trail }) {
    this.trail = trail;
    this.location = this.trail.head.visit();
  }

  explore() {
    while (!this.trail.head.explored) {
      const child = this.location.getUnvisitedChild();
      if (child) {
        if (child.visited) {
          const cycle = this.detectCycle(child);
          if (cycle) this.markCycle(cycle);
          this.moveBackwards();
        } else {
          this.moveForward(child);
        }
      } else {
        this.moveBackwards();
      }
    }
  }

  moveForward(child) {
    this.direction = 'forward';
    this.location = child.visit(this.location);
  }

  moveBackwards() {
    this.direction = 'backwards';
    this.location.explored = true;
    this.trail.push(this.location);
    if (this.location.previous) {
      this.location = this.location.previous;
    }
  }

  detectCycle(child) {
    let { location } = this;
    const cycle = [];
    while (child.name !== location.name) {
      cycle.push(location.name);
      if (!location.previous) return null;
      location = location.previous;
    }
    cycle.push(child.name);
    return cycle;
  }

  markCycle(cycle) {
    this.trail.cycles.push(cycle);
    cycle.forEach(nodeName => {
      this.trail.getNode(nodeName).cycles.push(cycle);
    });
  }
}
