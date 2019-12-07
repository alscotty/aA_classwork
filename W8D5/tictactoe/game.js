const Board = require("/board.js")
class Game {
  constructor() {
    this.board = new Board();
    this.player1 = new HumanPlayer();
    this.player2 = new HumanPlayer();
    this.currentPlayer = this.player1;
  }

  switch_turn() {
    if (this.currentPlayer === this.player1) {
      currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  play() {
    while (!isGameOver(this.currentPlayer.mark)) {
      let position = this.currentPlayer.getMove();
      this.board.placePiece(position);
      this.switch_turn();
    }
    console.log(`Congrats ${this.currentPlayer.name}`);
  }

}