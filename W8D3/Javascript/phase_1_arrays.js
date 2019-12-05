Array.prototype.uniq = function() {
  let uniqs = [];
  for (i=0; i<this.length; i++) {
    if (!uniqs.includes(this[i])) {
      uniqs.push(this[i]);
    }
  }
  return uniqs
}

Array.prototype.twoSum = function() {
  let pairs = [];
  for (i=0; i < this.length; i++) {
    for (j=i+1; j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        pairs.push([i,j]);
      }
    }
  }
  return pairs
}

Array.prototype.transpose = function() {
  let transposed = [];
  for (i = 0; i < this.length; i++) {
    let row = [];
    for (j = 0; j < this.length; j++) {
        row.push(this[j][i]);
      }
      transposed.push(row);
    }
  return transposed
}


