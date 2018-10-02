import TrailDuck from '../../src';

describe('new TrailDuck()', () => {
  it('should have null head', async () => {
    const trailDuck = new TrailDuck();
    expect(trailDuck.head).toEqual(null);
  });

  it('should create empty tree', async () => {
    const trailDuck = new TrailDuck();
    expect(trailDuck.tree).toEqual({});
  });

  it('should create empty ordered', async () => {
    const trailDuck = new TrailDuck();
    expect(trailDuck.ordered).toEqual([]);
  });
});
