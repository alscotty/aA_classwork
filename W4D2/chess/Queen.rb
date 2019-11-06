require_relative "./Piece.rb"
require_relative "./Slideable.rb"

class Queen < Piece
  include Slideable
  def symbol
    "Q"
  end

  def move_dirs
    ["diagonal", "horizontal"]
  end
end