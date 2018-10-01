import TopologicalCyclicSort from '../src';

const tcs = new TopologicalCyclicSort(
  {
    A: {
      children: ['B']
    },
    B: { children: ['E', 'C'] },
    C: { children: ['D', 'C'] },
    D: { children: ['E'] },
    E: { children: [] }
  },
  'A'
);
