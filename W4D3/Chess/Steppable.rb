module Steppable

   def within_bounds?(pos)
        # self[position] != nil
        x,y = pos
        return true if (0..7).include?(x) && (0..7).include?(y)
        false
    end



  def valid_moves
    if move_diffs=="knight"
        x,y=self.pos
        moves=[[x+2,y+1],[x-2,y+1],[x-2,y-1],[x+2,y-1],[x+1,y+2],[x-1,y+2],[x-1,y-2],[x+1,y-2]]
        filtered_moves=moves.select {|move|  self.within_bounds?(move) && @board[move[0]][move[1]].color != self.color }


    elsif move_diffs=="king"
      x,y=pos
        moves=[[x+1,y+1],[x-1,y+1],[x-1,y-1],[x+1,y-1],[x,y+1],[x,y-1],[x-1,y],[x+1,y]]
        filtered_moves=moves.select {|move|  self.within_bounds?(move) && @board[move[0]][move[1]].color != self.color }


    end
  end





end