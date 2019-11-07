require_relative "./Cursor.rb"
require_relative "./Display.rb"


class HumanPlayer

  def initialize
    @cursor=cursor
  end


  def make_move
      input=@cursor.get_input
     input.nil? ?   self.make_move : input

  end




end