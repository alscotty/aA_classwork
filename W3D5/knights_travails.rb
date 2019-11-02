require_relative "poly_tree_node.rb"

class KnightPathFinder
    attr_reader :root_node
    
    def initialize(position)
        @position = position
        # @board = Array.new(8) { Array.new(8) }
        @root_node = PolyTreeNode.new(position)
        @considered_positions = [position]
    end

    def [](position)
        x, y = position
        @board[x][y]
    end

    def self.valid_moves(pos)
        # self[position] != nil
        x,y = pos
        return true if (0..7).include?(x) && (0..7).include?(y)
        false
    end

    def new_move_positions(pos)
        x,y=pos
        moves=[[x+2,y+1],[x-2,y+1],[x-2,y-1],[x+2,y-1],[x+1,y+2],[x-1,y+2],[x-1,y-2],[x+1,y-2]]
        filtered_moves=moves.select {|move| KnightPathFinder.valid_moves(move) && !@considered_positions.include?(move)}
        #filtered moves impl ret?
    end

    def build_move_tree(start_pos)
        # root = PolyTreeNode.new(start_pos)
        # move_queue = new_move_positions(start_pos)
        move_queue=[@root_node]
        @considered_positions << start_pos
        while !move_queue.empty? 
            current = move_queue.shift
            moves=new_move_positions(current.value)
            moves.each do |move|
                @considered_positions << move
                new_node=PolyTreeNode.new(move)
                current.add_child(new_node)
                move_queue<<new_node
                # p move_queue
            end
          
        end
       
        # q=[self]
        # while !q.empty?
        #     current=q.shift
        #     return current if current.value==target_value
        #     current.children.each {|child| q<<child}
        # end

    end

    def find_path(end_pos)
        @root_node.dfs(end_pos)
    end
end