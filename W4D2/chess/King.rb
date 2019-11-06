require_relative "./Piece.rb"
require_relative "./Steppable.rb"

class King < Piece
  include Steppable
  def symbol
    "K"
  end

  # def move_dirs
  #   ["diagonal"]
  # end
end