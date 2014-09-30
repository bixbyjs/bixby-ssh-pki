exports = module.exports = function keys(id) {
  var map = {
    'keygen': './keygen'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};


exports.scope = function(id, obj, $scope) {
  if (id == 'settings') {
    var prefix = $scope.prefix || 'ssh/pki';
    if ($scope.options && $scope.options['#']) {
      prefix = $scope.options['#'];
    }
    return obj.isolate(prefix);
  }
  
  return obj;
}
