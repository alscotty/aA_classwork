require_relative "./Piece.rb"
require_relative "./NullPiece.rb"
require_relative "./Knight.rb"
require_relative "./King.rb"
require_relative "./Pawn.rb"
require_relative "./Queen.rb"
require_relative "./Bishop.rb"
require_relative "./Rook.rb"
require_relative "./Display.rb"



require "byebug"
class Board
  attr_accessor :board
  def self.custom_board(board)
    c=Board.new
    c.board=board
    c
  end
  def initialize
    @board = Array.new(8) { Array.new(8, NullPiece.instance) }
    @board.each_with_index do |row, i|
      if i==1
        row.map!.with_index { |p,j| Pawn.new("white", self, [i,j]) }
      elsif i==6
        row.map!.with_index { |p,j| Pawn.new("black", self, [i,j]) }
      elsif i==0
        row.map!.with_index do |p,j| 
            if j==0 || j==7
                Rook.new("white", self, [i,j]) 
            elsif j==1 || j==6
                      Knight.new("white", self, [i,j])
            elsif j==2 || j==5
              Bishop.new("white", self, [i,j]) 
            elsif j==3
              King.new("white", self, [i,j])
            elsif j==4
              Queen.new("white", self, [i,j])
            end
        end
        elsif i==7
          row.map!.with_index do |p,j| 
             if j==0 || j==7
                Rook.new("black", self, [i,j]) 
            elsif j==1 || j==6
                      Knight.new("black", self, [i,j])
            elsif j==2 || j==5
              Bishop.new("black", self, [i,j]) 
            elsif j==3
              King.new("black", self, [i,j])
            elsif j==4
              Queen.new("black", self, [i,j])
            end
          end
        end
      end
    end

def move_piece(start_pos,end_pos)
  i,j=start_pos
  if @board[i][j] != NullPiece.instance
    if @board[i][j].valid_moves.include?(end_pos)
      k,l=end_pos
      @board[i][j].pos=end_pos
      @board[i][j],@board[k][l] = @board[k][l],@board[i][j]
      if self.in_check?(@board[k][l].color)
        @board[i][j],@board[k][l] = @board[k][l],@board[i][j]
        raise "Ur in check!" 
      end
      @board[i][j] = NullPiece.instance if @board[i][j].color != @board[k][l].color
    else
       raise "Invalid position!!!"
    end
  else
    raise "There's no piece here!!!"

  end

end


  def in_check?(color)
    king_pos = ObjectSpace.each_object(King).select { |el| el.color == color }[0].pos
    all_pieces =  ObjectSpace.each_object(Piece).to_a
    all_pieces.delete(NullPiece.instance)
    opposing_pieces = all_pieces.select { |el| el.color != color }
    opposing_pieces.each do |p|
      return true if p.valid_moves.include?(king_pos)
    end
    false
  end

  def checkmate?(color)
    if self.in_check?(color)
    king= ObjectSpace.each_object(King).select { |el| el.color == color }[0]
    all_pieces =  ObjectSpace.each_object(Piece).to_a
    opposing_pieces = all_pieces.select { |el| el.color != color }
      king.valid_moves.each do |mv|
            opposing_pieces.each do |p|
                return true if p.valid_moves.include?(king.pos)
            end
      end
    end
    false
  end

  def deep_dup
    Board.custom_board(self.board.map {|arr| arr.map{|piece| piece==NullPiece.instance ? piece : piece.dup}})
  end

  def [](pos)
    @board[pos]
  end

  def []=(pos, stuff)
    @board[pos] = stuff
  end

end


b=Board.new
# b.move_piece([1,3],[4,3])
# p b.board[1][3].valid_moves
d=Display.new(b.board)
d.render
# b.move_piece([6,0],[0,3])
# d.render

# b.move_piece([6,5],[5,5])
# b.move_piece([1,4],[2,4])
# b.move_piece([6,6],[4,6])
# b.move_piece([0,3],[4,7])



d.render
b.move_piece([6,3],[4,3])
b.move_piece([7,3],[6,3])
b.move_piece([6,3],[5,3])
b.move_piece([5,3],[4,2])
d.render
b.move_piece([4,2],[3,2])
d.render
b.move_piece([3,2],[2,2])

#  b.in_check?("white")
#  b.checkmate?("white")

# c=b.deep_dup
#  b.object_id==c.object_id
#  b.board[7][3].object_id == c[7][3].object_id
#  p b.board[7][7].valid_moves
# p b.board[4][7].non_losing_moves
