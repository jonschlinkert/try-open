# try-open [![NPM version](https://img.shields.io/npm/v/try-open.svg)](https://www.npmjs.com/package/try-open) [![Build Status](https://img.shields.io/travis/jonschlinkert/try-open.svg)](https://travis-ci.org/jonschlinkert/try-open)

> Tries to open a file using fs.openSync (only necessary with sync), fails gracefully if the file path does not exist on the file system. Since fs.existsSync has been deprecated, this can be used as an alternative.

See the node.js [fs.open documentation](https://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback) for more details.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i try-open --save
```

## Usage

```js
var tryOpen = require('try-open');

tryOpen('foo.bar', 'r');
//=> false

tryOpen('package.json', 'r');
//=> 17
```

## Related projects

* [copy](https://www.npmjs.com/package/copy): Copy files or directories using globs. | [homepage](https://github.com/jonschlinkert/copy)
* [delete](https://www.npmjs.com/package/delete): Delete files and folders and any intermediate directories if they exist (sync and async). | [homepage](https://github.com/jonschlinkert/delete)
* [fs-utils](https://www.npmjs.com/package/fs-utils): fs extras and utilities to extend the node.js file system module. Used in Assemble and… [more](https://www.npmjs.com/package/fs-utils) | [homepage](https://github.com/assemble/fs-utils)
* [write](https://www.npmjs.com/package/write): Write files to disk, creating intermediate directories if they don't exist. | [homepage](https://github.com/jonschlinkert/write)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/try-open/issues/new).

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on December 20, 2015._