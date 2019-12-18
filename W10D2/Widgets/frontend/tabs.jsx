import React, { Component } from 'react'

export default class Tabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      defaultTab: 0
    }
    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(e) {
    let tabNUm = 0;
    switch ((e.target.innerHTML)) {
      case "one":
        tabNUm = 0;
        break;
      case "Two":
        tabNUm = 1;
        break;
      case "Three":
        tabNUm = 2;
        break;
    
      default:
        tabNUm = 0;
        break;
    }

    this.setState({
      defaultTab: tabNUm
    })

  }
  

  render() {
    const t = this.props.tabs.map((tab, i) => {
      return(
        <div key={tab.id}  >
          <h1 className="tabs-button" onClick={this.handleTab}>{tab.title}</h1>
          {this.state.defaultTab === i ? < article > { tab.content }</article> : null }
        </div>
 
      )
    })
    return (
      <div className='tabs'>
        <ul >
          {t}

        </ul>
        

      </div>
    )
  }
}

