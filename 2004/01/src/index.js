const goss_concat = require('goss_concat');
const length = 4;
const stars = Array.from({ length }, (v, i) => ++i).map(() => '⭐ ');

console.log(goss_concat(...stars));
