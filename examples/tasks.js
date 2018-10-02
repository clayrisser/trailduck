import TrailDuck from '../src';

const trailDuck = new TrailDuck({
  A: {
    children: ['B', 'D', 'E']
  },
  B: { children: ['C'] },
  C: { children: ['A'] },
  D: { children: ['E'] },
  E: { children: ['A'] }
});

console.log('ordered', trailDuck.ordered.map(node => node.name));
console.log('cycles', trailDuck.cycles);
console.log('tree', trailDuck.tree);
