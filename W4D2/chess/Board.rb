require_relative "./Piece.rb"
require_relative "./NullPiece.rb"
require "byebug"
class Board
  attr_reader :board
  def initialize
    @board = Array.new(8) { Array.new(8, NullPiece.instance) }
    @board.each_with_index do |row, i|
      if [0,1,6,7].include?(i)
        row.map!.with_index { |p,j| Piece.new("white", @board, [i,j]) }
      end
    end
  end

def move_piece(start_pos,end_pos)
  i,j=start_pos
  if @board[i][j] != NullPiece.instance
    if @board[i][j].valid_move?(end_pos)
      k,l=end_pos
      @board[i][j].pos=end_pos
      @board[i][j],@board[k][l]= @board[k][l],@board[i][j]
    end
  else
    raise "There's no piece here!!!"

  end

end

end


b=Board.new
b.move_piece([1,3],[4,3])
p b.board[4][3].valid_moves