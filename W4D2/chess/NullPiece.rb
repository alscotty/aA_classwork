require_relative "./Piece.rb"
require "singleton"
class NullPiece < Piece
  include Singleton
  def initialize
    @color = nil
  end

  def symbol
    "[ ]"
  end
end