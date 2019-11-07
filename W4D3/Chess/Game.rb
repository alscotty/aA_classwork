require_relative "./Board.rb"
require_relative "./Display.rb"
require_relative "./Player.rb"
require_relative "./Cursor.rb"
require_relative "./Piece.rb"
require_relative "./HumanPlayer.rb"
require_relative "./ComputerPlayer.rb"

class Game
  def initialize
    @board = Board.new
    @players = [HumanPlayer.new, HumanPlayer.new]
    @display=Display.new(@board)
  end

  def play
    until @board.checkmate?("white") || @board.checkmate?("black")
     begin
      a=@players[0].make_move
      b=@players[0].make_move
      @board.move_piece(a,b)
     rescue
      puts "Put in valid move!!!"
      retry
     end
      @players.rotate!
    end
  end



end