
Function.prototype.myThrottle = function(interval) {
  let tooSoon=false;
  return () => {
    if (!tooSoon) {
      tooSoon=true;
      setTimeout(() => {tooSoon=false;},interval);
      this();
    }
  }
}



class Neuron {
  fire() {
    console.log("Firing!");
  }
}

const neuron = new Neuron();

neuron.fire = neuron.fire.myThrottle(500);

const interval = setInterval(() => {
  neuron.fire();
}, 10);