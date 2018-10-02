import TrailDuck from '../../src';

describe('new TrailDuck(graph) - cyclic', () => {
  const trailDuck = new TrailDuck({
    A: { children: ['B', 'C'] },
    B: { children: ['C'] },
    C: { children: ['A'] }
  });

  it('should forbid _genesis node', async () => {
    try {
      new TrailDuck({ _genesis: {} });
      expect(true).toBe(false);
    } catch (err) {
      expect(err).toEqual(new Error("node name '_genesis' is forbidden"));
    }
  });

  it('should have null head', async () => {
    expect(trailDuck.head).toBe(null);
  });

  it('should create tree', async () => {
    expect(trailDuck.tree.A).toBe(trailDuck.tree.B.parents.A);
    expect(trailDuck.tree.B).toBe(trailDuck.tree.C.parents.B);
    expect(trailDuck.tree.B).toBe(trailDuck.tree.A.children.B);
    expect(trailDuck.tree.C).toBe(trailDuck.tree.B.children.C);
  });

  it('should not have _genesis in tree', async () => {
    expect(trailDuck.tree._genesis).toBe(undefined);
  });

  it('should not have _genesis in ordered', async () => {
    expect(trailDuck.ordered.map(node => node.name).includes('_genesis')).toBe(
      false
    );
  });

  it('should create ordered', async () => {
    expect(trailDuck.ordered[0]).toBe(trailDuck.tree.C);
    expect(trailDuck.ordered[1]).toBe(trailDuck.tree.B);
    expect(trailDuck.ordered[2]).toBe(trailDuck.tree.A);
  });

  it('should detect cycles', async () => {
    expect(trailDuck.cycles[0]).toEqual(['C', 'B', 'A']);
  });

  it('should not be able to detect overlapping cycles', async () => {
    expect(trailDuck.cycles[0]).toEqual(['C', 'B', 'A']);
    expect(trailDuck.cycles[1]).toEqual(undefined);
  });
});
