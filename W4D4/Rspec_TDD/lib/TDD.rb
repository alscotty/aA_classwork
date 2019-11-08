def my_uniq(arr)
  raise ArgumentError if !arr.is_a?(Array)
  return false if arr.empty?
  result = []
  arr.each {|el| result << el if !result.include?(el)}
  return result
end

def two_sum(arr)
  raise ArgumentError if !arr.is_a?(Array)
  result = []
  (0...arr.length).each do |i|
    (i+1...arr.length).each do |j|
      result << [i, j] if (arr[i] + arr[j]) == 0
    end
  end
  result
end

def my_transpose(arr)
  raise ArgumentError if !arr.is_a?(Array)
  return false if !arr.all? {|sub| sub.length==arr.length}
  return arr.transpose
end


def stock_sell(arr)
  raise ArgumentError if !arr.is_a?(Array)
  result = 0
  (0...arr.length).each do |i|
    my_stack = arr[i]
    (i+1...arr.length).each do |j|
      s = arr[j] - my_stack 
      result = s if s > result
    end
  end
  result
end

class HanoiTower 
  attr_reader :towers, :game_over
  def initialize
    @towers = [[1,2,3,4],[],[]]
    @game_over = false
  end
  def won?
   self.towers==[[],[],[1,2,3,4]]
  end
  def move
    while !won?
      puts "Please enter start tower and end tower"
      puts "example: 0 => 1st tower etc... with one space"
      user_input = gets.chomp.split(" ").map(&:to_i)
      start_stack, end_stack = user_input
      if @towers[end_stack].length < 3
        @towers[end_stack].unshift(@towers[start_stack].shift)
        p @towers
      else
        puts "Not a wise choice!!!"
      end
    end
  end
end





