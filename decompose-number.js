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

module.exports = decomposeNumber;
