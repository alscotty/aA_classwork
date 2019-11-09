require "byebug"

#n^2
def my_min(arr)

  arr.each_with_index do |ele1,i1|
    condition=true
    arr.each_with_index do |ele2,i2|
      if i1==i2
        next
      else
        condition=false if ele2<ele1
      end
    end
    return ele1 if condition==true
  end

end

#n
def my_min(arr)
  min = arr.first
  arr.each do |ele|
    min = ele if ele < min
  end
  min
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

#n^2
# def largest_contiguous_subsum(arr)
#   sub_sum_max = arr.first
#   (0...arr.length).each do |i|
#     (i...arr.length).each do |j|
#       sub_sum = arr[i..j].sum
#       sub_sum_max = sub_sum if sub_sum > sub_sum_max
#     end
#   end
#   sub_sum_max
# end

#  def largest_contiguous_subsum(arr)
#   sum = arr.first
#   i = 0
#   while true
#     j = 1
#     # debugger
#     break if i + j >= arr.length
#     while arr[i...i+j].sum > sum
#       j += 1
#     end
#     temp = arr[i...(i+j)].sum
#     sum = temp if temp > sum
#     i = i + j + 1
#   end
#   sum
# end



# def largest_contiguous_subsum(arr)

#   max_sum=arr.first
#   reversed = arr.reverse

#   arr.each_with_index do |ele,i|
#     reverse_sum = reversed[i..-1].sum
#     sub_sum = arr[i..-1].sum
#     mid_sum=arr[i...i-1]
#     mini_sum = [reverse_sum, sub_sum,mid_sum].max
#     max_sum = mini_sum if mini_sum > max_sum
#   end
#   max_sum
# end

def largest_contiguous_subsum(arr)
  global_sum = arr.first
  # p "global = #{global_sum}"
  i = 0
  pot = 0
  while i < arr.length
    pot += arr[i]
    global_sum = pot if global_sum < pot
    pot = 0 if pot < 0
    i += 1
  end
  global_sum
end


list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8
list = [2, 3, -6, 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])
list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => -1 (from [-1])




