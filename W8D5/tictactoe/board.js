class Board {
  constructor() {
    this.grid = [[],[],[]];
    for(let i = 0; i < 3; i++) {
      this.grid.push(new Array(3));
    }
  }

  isColumnWin(mark) {
    this.grid.forEach((row) => {
      if (row.every((ele) => ele === mark)) {
        return true;
      }
    })
    return false;
  }

  isRowWin(mark) {
    let cols = this.transpose(this.grid)
    cols.forEach((row) => {
      if (row.every((ele) => ele === mark)) {
        return true;
      }
    })
    return false;
  }

  isDiagWin(mark) {
    let diag1 = [];
    let diag2 = [];
    for(let i = 0; i < 3; i++) {
      diag1.push(this.grid[i][i]);
      diag2.push(this.grid[2-i][i])
    }
    console.log(diag1);
    console.log(diag2);
    return (diag1.every((ele) => ele === mark)) || (diag2.every((ele) => ele === mark)) 
  }

  isGameOver(mark) {
    this.isRowWin(mark) || this.isColumnWinm(mark) || this.isDiagWin(mark);
  }

  placePiece(mark, pos) {
    let row = pos[0];
    let column = pos[1];
    this.grid[row][column] = mark;
  }

  printBoard() {
    console.log("_______")
    for (let i = 0; i < 3; i++) {
      let printRow = "|";
      for (let j = 0; j < 3; j++) {
        if (this.grid[i][j]) {
          printRow += `${this.grid[i][j]}|`;
        } else {
          printRow += "_|"
        }
      }
      console.log(printRow);
    }
  }


  transpose(a) {
    return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
  }



}

export default Board