import TopologicalCyclicSort from '../src';

const tcs = new TopologicalCyclicSort({
  A: {
    children: ['B']
  },
  B: { children: ['C'] },
  C: { children: ['A'] }
});
