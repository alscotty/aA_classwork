class Clock {
  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    setInterval(this.printTime.bind(this), 1000);
    setInterval(this._tick.bind(this), 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  timeLessThan10(val) {
    if (val < 10) {
      return 0;
    } else {
      return "";
    }
  }

  printTime() {
    let time = `${this.hours}:${this.timeLessThan10(this.minutes)}${ this.minutes }:${this.timeLessThan10(this.seconds)}${this.seconds}`;
    console.log(time);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    if (this.seconds === 59) {
      if (this.minutes === 59) {
        this.hours++;
        this.minutes = 0;
      } else {
        this.minutes++;
      }
      this.seconds = 0;   
    } else {
      this.seconds++;
    }

    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();

