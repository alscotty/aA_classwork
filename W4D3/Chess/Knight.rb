require_relative "./Piece.rb"
require_relative "./Steppable.rb"

class Knight < Piece
  include Steppable
  def symbol
    "[♘]"
  end

  def move_diffs
    "knight"
  end
end