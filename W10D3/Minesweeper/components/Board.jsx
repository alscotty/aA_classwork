import * as Minesweeper from './minesweeper'
import React from 'react'
import ReactDOM from 'react-dom'
import Tile from './Tile'

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
         return this.props.board_props.grid.map((row,row_idx)=>{

             return row.map((tile,col_idx)=>{
                 debugger
                return(
                    <div key={[row_idx,col_idx]} id="tile"
                        className={(tile.bombed)? "bombed" : ""}
                        className={(tile.explored)? "explored" : ""}
                        className={(tile.flagged)? "flagged" : ""}
                    >
                        {tile.explored}
                   
                    <Tile tilez={tile} update={this.props.updateGame}/>
                    </div>
            )                    

                })

        })
        
    }
    
}

export default Board;
