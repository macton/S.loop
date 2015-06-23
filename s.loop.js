var S = require('s');

var loop = {
  N : S.curry( function( fn, count ) { var list = []; for (var i=0;i<count;i++) { list.push( S.cv(fn,i) ); }; return list; }),  
};

exports = module.exports = loop;
