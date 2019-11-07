require_relative "./Piece.rb"
require_relative "./NullPiece.rb"
require_relative "./Steppable.rb"

class Pawn < Piece
  include Steppable
  def initialize(color, board, pos)
    super
    @moved = false
  end
  
  def symbol
    "[♙]"
  end

  def move_dirs
    @color == "white" ? 1 : -1
  end

  def valid_moves
    x, y = self.pos
    moves = []
    moves << [x + move_dirs, y] if @board[x + move_dirs][y] == NullPiece.instance
    moves << [x + move_dirs, y + move_dirs] unless @board[x + move_dirs][y + move_dirs] == NullPiece.instance
    moves << [x + move_dirs, y - move_dirs] unless @board[x + move_dirs][y - move_dirs] == NullPiece.instance
    if @moved == false
      moves << [x + (2 * move_dirs), y] if @board[x + move_dirs][y] == NullPiece.instance && @board[x + (2 * move_dirs)][y] == NullPiece.instance
    end
    filtered_moves=moves.select {|move|  self.within_bounds?(move) && @board[move[0]][move[1]].color != self.color }
    filtered_moves
  end
  # def move_dirs
  #   ["diagonal"]
  # end
end