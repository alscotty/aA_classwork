class PolyTreeNode
    attr_reader :value, :parent, :children
    attr_writer :parent, :children
    def initialize(value)
        @value=value
        @parent=nil
        @children=[]
    end

    def parent=(node)
        if @parent != nil
        self.parent.children.delete(self)
        end   
        @parent=node
        node.children<<self if node != nil && !node.children.include?(self)
        # @parent.children.delete(self)
    end

    def add_child(child_node)
        child_node.parent= self
    
    end

    def remove_child(child_node)
        raise "error: syntax" unless self.children.include?(child_node)
        child_node.parent = nil
    end

    def dfs(target_value)
        return self if self.value == target_value
        return nil if self.value == nil
        self.children.each do |child|
            result = child.dfs(target_value)
            return result unless result.nil?
        end
        nil
    end

    def bfs(target_value)
        q=[self]
        while !q.empty?
            current=q.shift
            return current if current.value==target_value
            current.children.each {|child| q<<child}
        end

    end

    # def inspect
    #     @value.inspect
    # end
end