function WatchedTree (inputTree) {
  if (!(this instanceof UnwatchedTree)) { return new WatchedTree(inputTree); }

  this.inputTree = inputTree;
  this.description = 'Watched - ' + inputTree;
}

UnwatchedTree.prototype.read = function (readTree) { 
  return readTree(this.inputTree)
};
UnwatchedTree.prototype.cleanup = function () { };

module.exports = WatchedTree;
