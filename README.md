# trailduck

[![GitHub stars](https://img.shields.io/github/stars/codejamninja/trailduck.svg?style=social&label=Stars)](https://github.com/codejamninja/trailduck)

> a topological cyclic sorting algorithm based on depth-first search (dfs)

Please ★ this repo if you found it useful ★ ★ ★

![](assets/trailduck.png)

## Features

* works with cycles in the graph
* detects overlapping cycles
* loosly based on depth-first search (dfs)


## Installation

```sh
npm install --save trailduck
```


## Dependencies

* [NodeJS](https://nodejs.org)


## Usage

```js
const trailDuck = new TrailDuck({
  A: {
    children: ['B', 'D', 'E']
  },
  B: { children: ['C'] },
  C: { children: ['A'] },
  D: { children: ['E'] },
  E: { children: ['A'] }
});

console.log('cycles', trailDuck.cycles);
console.log('ordered', trailDuck.ordered);
console.log('tree', trailDuck.tree);
```


## Support

Submit an [issue](https://github.com/codejamninja/trailduck/issues/new)


## Screenshots

[Contribute](https://github.com/codejamninja/trailduck/blob/master/CONTRIBUTING.md) a screenshot


## Contributing

Review the [guidelines for contributing](https://github.com/codejamninja/trailduck/blob/master/CONTRIBUTING.md)


## License

[MIT License](https://github.com/codejamninja/trailduck/blob/master/LICENSE)

[Jam Risser](https://codejam.ninja) © 2018


## Changelog

Review the [changelog](https://github.com/codejamninja/trailduck/blob/master/CHANGELOG.md)


## Credits

* [Jam Risser](https://codejam.ninja) - Author


## Support on Liberapay

A ridiculous amount of coffee ☕ ☕ ☕ was consumed in the process of building this project.

[Add some fuel](https://liberapay.com/codejamninja/donate) if you'd like to keep me going!

[![Liberapay receiving](https://img.shields.io/liberapay/receives/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
[![Liberapay patrons](https://img.shields.io/liberapay/patrons/codejamninja.svg?style=flat-square)](https://liberapay.com/codejamninja/donate)
