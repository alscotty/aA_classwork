let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid=[];
  let row;
  for (let i=0; i<8; i++) {
    row = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    grid.push(row);
  }

  grid[3][4]= new Piece('black');
  grid[4][3] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let row=pos[0];
  let col=pos[1];
  return this.grid[row][col]
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length > 0
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos); 
  if (piece === undefined) { return false };
  return piece.color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let piece = this.getPiece(pos);
  if (piece === undefined) { return false };
  return true;
}

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return !(this.hasMove('black') && this.hasMove('white'))
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let row = pos[0];
  let col = pos[1];
  if ((row >= 0 && row <= 7) && (col >= 0 && col <= 7)) {
    return true;
  } else {
    return false;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip = []) {
  let new_pos=[  (pos[0]+dir[0]),(pos[1]+dir[1]) ];
  if (!board.isValidPos(new_pos)) {return null};
  if (!board.isOccupied(new_pos)) {return null};
  if (board.getPiece(new_pos).color == color) { return (piecesToFlip.length > 0) ? piecesToFlip : null };

  piecesToFlip.push(new_pos)

  return _positionsToFlip(board, new_pos, color, dir, piecesToFlip );
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (this.validMoves(color).includes(pos)){
      let squares_to_flip=[];
      Board.DIRS.forEach( dir => squares_to_flip = squares_to_flip.concat(_positionsToFlip(this,pos,color,dir)));
      squares_to_flip.forEach(piece => piece.flip());
  } else {
  throw new Error('Not valid pos!');
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) { 
  if (this.isOccupied(pos)) {return false};
  let valid_moves = [];
  Board.DIRS.forEach( dir => valid_moves = valid_moves.concat(_positionsToFlip(this,pos,color,dir) || [] ));
  return valid_moves.length>0;

};
// _positionsToFlip || []
/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  moves_arr = [];
   for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
        if (this.validMove([i,j], color)) {
          moves_arr.push([i,j]);
      }
    }
  }
  return moves_arr;
};

module.exports = Board;
