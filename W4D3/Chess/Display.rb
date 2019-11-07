require "colorize"
require_relative "./Cursor.rb"

class Display

          def initialize(board)
            @board=board
            @cursor=Cursor.new([0,0], @board)
          end

          def render
                @board.each do |row|
                  arr=[]
                  row.each do |el|
                    arr<<el
                  end
                  # p arr
                result= arr.map do |el| 
                    # p el
                    if el.pos == @cursor.cursor_pos
                      el.symbol.red.on_black
                    elsif el.color=="white"
                      el.pos == @cursor.cursor_pos
                        el.symbol.black.on_white 
                    elsif   el.color=="black"
                      el.symbol.white
                    else
                      el.symbol
                    end
                  end
                # puts result
                    puts result.join("")

                end
          end



  def run
    while true
      system ("clear")
      self.render
      @cursor.get_input
    end
  end


end


