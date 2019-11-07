require_relative "./Piece.rb"
require "singleton"
class NullPiece < Piece
  include Singleton
  # attr_reader :color
  def initialize
    @color = nil
  end

  def symbol
    "[ ]"
  end

  def valid_moves
    return []
  end
end