'use strict';

function decomposeNumber(x) {
  const dataView = new DataView(new ArrayBuffer(8));
  dataView.setFloat64(0, x);
  const hi = dataView.getUint32(0);
  const lo = dataView.getUint32(4);
  return {
    S: hi >>> 31, 
    E: (hi << 1) >>> 21, 
    F: (hi & ((1<<20)-1)) * 2**32 + lo
  }
}

function describeNumber(x) {
  const {S, E, F} = decomposeNumber(x);
  let str = `${F+2**52} \\cdot 2^{${E-1023-52}}`;
  if (S) {
    str = '-' + str;
  }
  return [str, (F+2**52) * 2**(E-1023-52)];
}


exports.decomposeNumber = decomposeNumber;
exports.describeNumber = describeNumber;
