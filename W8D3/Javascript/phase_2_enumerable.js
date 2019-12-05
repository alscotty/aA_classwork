Array.prototype.myEach = function(callback) {
  for (i=0; i < this.length; i++) {
    callback(this[i]);
  }
}


function callback(el) {
  console.log(el);
}


Array.prototype.myMap = function(mapFunc) {
  let mapped = [];
  // this.myEach(function(el) {
  //   mapped.push(mapFunc(el)); 
  // })                                                                                                                                                                                              
  this.myEach( (el) => {
    mapped.push(mapFunc(el));
  })
  return mapped; 
}

function mapFunc(el) {
  el * 2
}

Array.prototype.myReduce = function(callback, initialValue) {
  let arr=this;
  let acc=this[0];
  if (initialValue){
    acc=initialValue;
  } else {
    arr.shift();
  }

  arr.myEach( (el) => {
     acc = callback(acc,el);

  })
  return acc;
}

Array.prototype.bubbleSort = function() {
  let sorted=false;

  while (!sorted) {
    sorted=true;
    for (i=0; i<this.length-1; i++){
      if (this[i]>this[i+1]) {
        [this[i], this[i + 1]] = [this[i+1], this[i]];
        sorted=false;
      }
    }
  }
    return this
}


String.prototype.subStrings = function() {
  let subs=[];
  for (i = 0; i < this.length; i++) {
    for (j = i; j < this.length; j++) {
      subs.push(this.slice(i,j+1));
    }
  }
return subs;
}


function range(start,end) {
  if (start===end){
  return start; 
  }

  let arr=[start];
  return arr.concat(range(start+1,end));

}

function sumRec(arr) {
  if (arr.length===1){
    return arr[0];
  }
return  arr[0]+sumRec(arr.slice(1,arr.length));

}























