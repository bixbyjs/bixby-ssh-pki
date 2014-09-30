/**
 * Module dependencies.
 */
var sshkeypair = require('sshkeypair');


module.exports = function(options, cb) {
  
  return sshkeypair(options, function(err, pair) {
    if (err) { return cb(err); }
    return cb(null, pair.private, pair.public);
  });
}
