function sum() {
  let sum = 0;
  let arr = Array.from(arguments);
  arr.forEach(num => {
    sum += num;    
  });
  return sum;
}

function sum2(...args) {
  let sum = 0;
  args.forEach(num => {
    sum += num;
  });
  return sum;
}

class Person{
  constructor(name){
    this.name=name;
  }
  sayHi(name) {
    console.log(`${this.name} says hi to ${name}!`);
  }
}

Function.prototype.myBind = function(context) {

  let that = this;
  return function(name) {
    
    that.call(context, name);
  };
}; 



function curriedSum(numArgs) {
  let numbers=[];
  let sum=0;
  function _curriedSum(num){
    numbers.push(num);
    if(numbers.length===numArgs){
      numbers.forEach(el=>{
        sum+=el;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let args=[];
  let that=this;
  function _curry(arg){
    args.push(arg);
    if (args.length===numArgs){
  // return that(...args);
  // debugger
      return that.apply(that,args);
    } else {
      return _curry;
    }
  }

  return _curry;
}
