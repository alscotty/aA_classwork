import * as Minesweeper from './minesweeper';
import Board from './Board'
import Tile from './Tile'

import React from 'react'
import ReactDOM from 'react-dom'


class Game extends React.Component{
    constructor(props){
        super(props);
        const board = new Minesweeper.Board(10, 4);
        this.state = { 
            board: board 
        };
        this.updateGame=this.updateGame.bind(this)
    }
    

    updateGame(){

    }

    render(){
        return(
            <div>
                <h1>Game load success</h1>
                <Board board_props={this.state.board} board_update={this.updateGame}/>
                <Tile/>
            </div>
        )
    }

}

export default Game;