const concat = require('goss_concat');

//https://kodaktor.ru/j/goss_compose
const compose = (...funcs) => funcs.reduce((accum, fn) => (...args) => accum(fn(...args), x => x));

const s = 'abc';

const up = x => String.prototype.toUpperCase.call(x);
const ps = x => String.prototype.padStart.call(x, 10, '*');
const rp = x => String.prototype.repeat.call(x, 2);
const sp = x => String.prototype.split.call(x, '');
const rv = x => Array.prototype.reverse.call(x);

console.log(concat(...rv(sp(rp(ps(up(s)))))));
console.log(concat(...compose(rv, sp, rp, ps, up)(s)));
