
/**
 * Module dependencies.
 */

var css = require('css');

/**
 * Expose `pad`
 */

module.exports = pad;

/**
 * Pad `dir`, `n`.
 *
 * @param {String} dir
 * @param {Number} n
 * @api public
 */

function pad(dir, n){
  var els = document.all;
  var style;

  for (var i = 0; i < els.length; ++i) {
    if (1 != els[i].nodeType) continue;
    style = window.getComputedStyle(els[i]);
    if ('fixed' != style.position) continue;
    if ('auto' == style[dir]) continue;
    var value = parseFloat(style[dir]);
    if (n < value) continue;
    css(els[i], dir, value + n);
  }

  css(document.body, 'margin-' + dir, n);
}
