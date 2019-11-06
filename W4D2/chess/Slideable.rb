
module Slideable

  def valid_moves
    # debugger
    moves = []
    x, y = self.pos
    if move_dirs.include?("horizontal")
      up=true
      down=true
      left=true
      right=true
      
      (1...8).each do |i|
          if (x+i).between?(0,7) 
            if @board[x+i][y] != NullPiece.instance
              right=false
            end
          moves << [x+i,y] if right==true
          end

           if (x-i).between?(0,7) 
            if @board[x-i][y] != NullPiece.instance
              left=false
            end
          moves << [x-i,y] if left==true
          end

           if (y+i).between?(0,7) 
            if @board[x][y+i] != NullPiece.instance
              up=false
            end
          moves << [x,y+i] if up==true
          end

           if (y-i).between?(0,7) 
            if @board[x][y-i] != NullPiece.instance
              down=false
            end
          moves << [x,y-i] if down==true
          end

      end 
    elsif move_dirs.include?("diagonal")
      leftdown=true
      leftup=true
      rightdown=true
      rightup=true

      (1...8).each do |i|
        if (x+i).between?(0,7) && (y+i).between?(0,7) 
          if @board[x+i][y+i] != NullPiece.instance
            rightup=false
          end
          moves << [x+i,y+i] if rightup==true
        end

       if (x+i).between?(0,7) && (y-i).between?(0,7) 
          if @board[x+i][y-i] != NullPiece.instance
            rightdown=false
          end
          moves << [x+i,y-i] if rightdown==true
        end

      if (x-i).between?(0,7) && (y+i).between?(0,7) 
        if @board[x-i][y+i] != NullPiece.instance
            leftup=false
          end
          moves << [x-i,y+i] if leftup==true
        end

         if (x-i).between?(0,7) && (y-i).between?(0,7) 
           if @board[x-i][y-i] != NullPiece.instance
            leftdown=false
          end
          moves << [x-i,y-i] if leftdown==true
        end
      end
    end
    moves
end

#moves.select { :null pieces}



end