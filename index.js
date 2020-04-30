var Plugin = require('broccoli-plugin');

WatchedTree.prototype = Object.create(Plugin.prototype);
WatchedTree.prototype.constructor = WatchedTree;
function WatchedTree(inputNodes, options) {
  options = options || {};
  Plugin.call(this, inputNodes, {
    persistentOutput: true,
    needsCache: false,
    annotation: options.annotation || ('Watched - ' + inputNodes)
  });
}

WatchedTree.prototype.build = function () {};

module.exports = WatchedTree;
