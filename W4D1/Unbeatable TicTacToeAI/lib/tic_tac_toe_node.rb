require_relative 'tic_tac_toe'
require "byebug"

class TicTacToeNode

  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
      @board=board
      @next_mover_mark=next_mover_mark
      @prev_move_pos=prev_move_pos
  end

  def losing_node?(evaluator)
    return true if @board.winner != evaluator && !@board.winner.nil?
    return false if @board.winner==evaluator
    if @next_mover_mark == evaluator # player's turn
      self.children.all? {|child| child.losing_node?(evaluator) }
    else # opponent's turn
      self.children.any? {|child| child.losing_node?(evaluator)}
    end
  end

  def winning_node?(evaluator)
    return true if @board.winner == evaluator
    return false if @board.winner != evaluator && !@board.winner.nil?
    if @next_mover_mark == evaluator # player's turn
      self.children.any? { |child| child.winning_node?(evaluator) }
    else
      self.children.all? { |child| child.winning_node?(evaluator) }
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    kids=[]
    @board.rows.each_with_index do |row,i1|
      row.each_with_index do |space, i2|
        pos=[i1,i2]
        if @board.empty?(pos)
          new_board = Board.new(deep_dup(board.rows))
          # new_board=Board.new(board.rows)
          new_board[pos]=@next_mover_mark
          ((@next_mover_mark == :x) ? real_next_move = :o : real_next_move = :x)
          next_node = TicTacToeNode.new(new_board, real_next_move, pos)
          kids << next_node
        end
      end
    end
    kids
  end

  def deep_dup(arr)
    arr.map { |ele| ele.is_a?(Array) ? deep_dup(ele) : ele }
  end
end

# next mark has been assigned to next empty space
# now we want to initialize a new TTTnode on the new board
# args = updated board (done), 
# next mover mark - alternate x, o
# prev_move_pos