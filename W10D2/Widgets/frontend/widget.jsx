import React, { Component } from 'react';
import Clock from "./clock";
import Tabs from './tabs';
import Weather from './weather';

const appKey = '18e9d1f844f01b671359ef77aa4d1839'

const filTabs = [{
  id: "3243",
  title: "one",
  content: "I'm the Frist"
},
{
  id: "3432434",
  title: "Two",
  content: "I'm the Second"
},
{
  id: "3435ref",
  title: "Three",
  content: "I'm the Third"
},
]

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: filTabs,
      geolocation: {}
    }
  }

  //coords: GeolocationCoordinates {latitude: 37.7989379, longitude: -122.40133130000001, altitude: null, accuracy: 73, altitudeAccuracy: null, …}
  // timestamp: 1576628581910

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((p) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&APPID=${appKey}`)
        .then(response => response.json())
        .then(data => {
          // console.log(data)
           this.setState({ geolocation: data }) 
          })
        .catch(err => console.log(err))
      //   var request = new XMLHttpRequest();
      //   request.open('GET', `api.openweathermap.org/data/2.5/weather?lat=37.7989379&lon=-122.40133130000001&APPID=18e9d1844f01b671359ef77aa4d1839`, true);

      //   request.onload = function () {
      //     if (this.status >= 200 && this.status < 400) {
      //       // Success!
      //       console.log(this.response);
      //     } else {
      //       // We reached our target server, but it returned an error

      //     }
      //   };

      //   request.onerror = function () {
      //     // There was a connection error of some sort
      //   };

      //   request.send();

    });
  }
  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  // }

  // _tick() {
  //   this.setState({
  //     currTime: new Date()
  //   }, ()=> {
  //     console.log(this.state.currTime)
  //   });
  // }

  render() {

    return (
      <div>
        <Clock />
        <Tabs tabs={this.state.tabs} />
        <Weather/>
      </div>
    )
  }
}


export default Widget