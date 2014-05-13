function WatchedTree (inputTree) {
  if (!(this instanceof UnwatchedTree)) { return new WatchedTree(inputTree); }

  this.inputTree = inputTree;
  this.description = 'Watched - ' + inputTree;
}

WatchedTree.prototype.read = function (readTree) {
  return readTree(this.inputTree)
};
WatchedTree.prototype.cleanup = function () { };

module.exports = WatchedTree;
