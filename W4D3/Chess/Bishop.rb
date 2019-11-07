require_relative "./Piece.rb"
require_relative "./Slideable.rb"

class Bishop < Piece
  include Slideable
  def symbol
    "[♗]"
  end

  def move_dirs
    ["diagonal"]
  end
end