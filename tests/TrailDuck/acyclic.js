import TrailDuck from '../../src';

describe('new TrailDuck(graph) - acyclic', () => {
  const trailDuck = new TrailDuck({
    A: { children: ['B'] },
    B: { children: ['C'] },
    C: {}
  });

  it('should create tree', async () => {
    expect(trailDuck.tree.A).toBe(trailDuck.tree.B.parents.A);
    expect(trailDuck.tree.B).toBe(trailDuck.tree.C.parents.B);
    expect(trailDuck.tree.B).toBe(trailDuck.tree.A.children.B);
    expect(trailDuck.tree.C).toBe(trailDuck.tree.B.children.C);
  });

  it('should create ordered', async () => {
    expect(trailDuck.ordered[0]).toBe(trailDuck.tree.C);
    expect(trailDuck.ordered[1]).toBe(trailDuck.tree.B);
    expect(trailDuck.ordered[2]).toBe(trailDuck.tree.A);
  });
});
