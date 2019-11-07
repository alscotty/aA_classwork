require_relative "./Piece.rb"
require_relative "./Steppable.rb"

class King < Piece
  include Steppable
  def symbol
    "[♔]"
  end

  def move_diffs
    "king"
  end
end