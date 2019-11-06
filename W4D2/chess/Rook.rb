require_relative "./Piece.rb"
require_relative "./Slideable.rb"

class Rook < Piece
  include Slideable
  def symbol
    "R"
  end

  def move_dirs
    ["horizontal"]
  end
end