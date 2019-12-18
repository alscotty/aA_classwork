import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currTime: new Date()
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this._tick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  _tick() {
    this.setState({
      currTime: new Date()
    });
  }
  render() {
    const { currTime } = this.state
    let [hour, minutes, seconds] = [currTime.getHours(), currTime.getMinutes(), currTime.getSeconds()];
    let [day,month, date, year]=[currTime.getDay(), currTime.getMonth(), currTime.getDate(), currTime.getFullYear()] 
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ]
    let weekdays = [
      'Sun',
      'Mon',
      'Tues',
      'Wed',
      'Thur',
      'Fri',
      'Sat'
    ]



    return (
      <div className='clock'>
  <h1>Time =>  {hour} : {minutes} : {seconds} </h1>
        <h1>Date => {weekdays[day]} {' '}{monthNames[month]} {' '}{date} {' '}{year}</h1>
      </div>
    )
  }
}

export default Clock
