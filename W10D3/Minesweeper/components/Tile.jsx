import * as Minesweeper from './minesweeper'
import React from 'react'
import ReactDOM from 'react-dom'


class Tile extends React.Component{
    constructor(props){
        super(props);

        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(e){

    }

    render(){
        return(
            <h1>
                T
                {/* {this.props.tilez.bombed} */}
            </h1>
        )
    }
}


export default Tile;