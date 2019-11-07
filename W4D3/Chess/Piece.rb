require_relative "./Slideable.rb"

class Piece

  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos
  end

 

  def valid_move?(pos)
    true
  end

  # def valid_moves
  #   res = []
  # end
 include Slideable
  def empty?
    self.is_a?(NullPiece) ? true : false
  end

  def to_s
    symbol
  end

  def symbol
    "P"
  end

  def move_into_check?(end_pos)
    true
  end

  def move_dirs
    ["diagonal"]
  end

  def non_losing_moves
    moves = self.valid_moves
    moves.reject! do |mv|
      move_into_check?(mv)
    end
    moves
  end

  def move_into_check?(end_pos)
    dup_board = @board.deep_dup
    dup_board.move_piece(@pos, end_pos)
    return dup_board.in_check?(@color)
  end

  def inspect
    symbol
  end

  attr_accessor :pos
  attr_reader :color
end