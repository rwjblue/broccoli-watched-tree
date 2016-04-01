## Broccoli Watched Tree

This is useful if you would like to use a given directory to trigger rebuilds, but do not need to use any files from it directly. For example, in an Ember CLI application, you might want to trigger a rebuild when specific files in vendor are changed.

### General Usage

```js
var WatchedTree = require('broccoli-watched-tree');
```

### Ember CLI usage:

Install the dependencies you want to use:

```sh
$ npm install --save-dev broccoli-merge-trees
$ npm install --save-dev broccoli-watched-tree
```

Add the tree(s) to [`ember-cli-build.js`](https://github.com/ember-cli/ember-cli/blob/master/blueprints/app/files/ember-cli-build.js):

```js
// ember-cli-build.js

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var MergeTrees = require('broccoli-merge-trees');
var WatchedTree = require('broccoli-watched-tree');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  var vendorFiles = WatchedTree('vendor/your-vendor-lib');

  var trees = [
    app.toTree(),   // original app tree
    vendorFiles     // new explicitly watched tree
  ];

  return new MergeTrees(trees);
};
```

Rebuilds should now happen when making changes to files in vendor/your-vendor-lib.

### Unwatching instead of Watching?

See the sister library [broccoli-unwatched-tree](https://github.com/rwjblue/broccoli-unwatched-tree).
