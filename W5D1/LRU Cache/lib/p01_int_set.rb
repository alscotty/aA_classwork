class MaxIntSet

  attr_reader :store

  def initialize(max)
    @store = Array.new(max) { false }
  end

  def insert(num)
    raise "Out of bounds" if num > @store.length || num < 0
    @store[num] = true
    
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    return true if @store[num] == true
    false
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    # idx = num % @store.length
    self[num] << num
  end

  def remove(num)
    idx = num % @store.length
    @store[idx].delete(num)
  end

  def include?(num)
    idx = num % @store.length
    @store[idx].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    if !self.include?(num)
      self.resize! if @count + 1 > num_buckets
      self[num] << num 
      @count += 1
    end
  end

  def remove(num)
    if self.include?(num)
      self[num].delete(num) 
      @count -= 1
    end
  end

  def include?(num)
    self[num].include?(num)
  end

  #private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    prev_num = num_buckets

    prev_num.times do 
      @store << []
    end
    current_numbers = @store.flatten
    current_numbers.each do |num|
      self.remove(num)
      self.insert(num)
      @count=current_numbers.length
    end
  end

end
