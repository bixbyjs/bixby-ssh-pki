/**
 * SSH key generator.
 *
 * This component provides the functionality to generate SSH public/private key
 * pairs.  The key generated is an RSA key with a key length of 2048 bits.
 *
 * It is functionally equivalent to the following command:
 *
 *   $ ssh-keygen -t rsa -b 2048
 *
 * Or, using OpenSSL
 *
 *   $ openssl genrsa -out private.pem 1024
 *   $ openssl rsa -in private.pem -pubout > public.pem
 *
 * @return {Function}
 */
exports = module.exports = function(settings, logger) {
  var config = settings.toObject();
  if (!config.algo) { config.algo = 'rsa'; }
  
  return function keygen(cb) {
    switch (config.algo) {
    case 'rsa':
      return require('./generate/rsa')({ bits: config.bits }, cb);
    default:
      return cb(new Error('Unsupported key algorithm: ' + config.algo));
    }
  };
}

/**
 * Component annotations.
 */
exports['@singleton'] = true;
exports['@require'] = [ 'settings', 'logger' ];
