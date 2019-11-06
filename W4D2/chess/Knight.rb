require_relative "./Piece.rb"
require_relative "./Steppable.rb"

class Knight < Piece
  include Steppable
  def symbol
    "k"
  end

  # def move_dirs
  #   ["diagonal"]
  # end
end