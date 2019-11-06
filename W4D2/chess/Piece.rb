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

  attr_accessor :pos
end