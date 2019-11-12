class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    new_num = ""

    (0...self.length).each do |i|
      new_num += self[i].to_s(2)
    end

    new_num.to_i
  end
end

class String

  def hash
    new_num = ""
    alphabet = ("a".."z").to_a
    (0...self.length).each do |i|
      char = self[i]
      new_num += alphabet.index(char).to_s(2)
    end

    new_num.to_i
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    arr = self.sort_by { |k, v| v }
    alphabet = ("a".."z").to_a + (:a..:z).to_a
    arr.sort!
    new_arr = arr.flatten.map { |ele| alphabet.index(ele).to_s(2) }
    new_arr.map(&:to_i).sum
  end
end

 a = {a: "a", b: "b"}
      b = {a: "a", b: "b"}
      p a.hash
     p b.hash