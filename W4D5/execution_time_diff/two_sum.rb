
#n^2
def bad_two_sum?(arr, tar)
  (0...arr.length).each do |i|
    (0...arr.length).each do |j|
      if j > i
        return true if arr[i] + arr[j] == tar
      end
    end
  end
  false
end

arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

#n log n?
def okay_two_sum?(arr, tar)
  arr = arr.sort!
  arr.each_with_index do |num,i|
    result = tar - num
    return true if (arr[0...i]+arr[i+1..-1]).bsearch{|x| x == result }
  end
  false
end


 okay_two_sum?(arr, 6) # => should be true
 okay_two_sum?(arr, 10) # => should be false


#    condition=arr.count {|ele| ele==tar/2} == 1

# hash=Hash.new {|h,k| h[k]=[]}
# arr.each {|ele| hash[tar-ele]<<ele}
# p hash
# hash.each do |k,v|
#   return true if (k+v[0])==tar && v.length<2 && condition
# end
# false

def two_sum?(arr, tar)
hash=Hash.new(0)
condition = false
arr.each {|ele| hash[ele]+=1}
arr.each do |ele|
  if hash.has_key?(tar-ele) 
    if (tar-ele) != ele 
    return true
    else 
      condition = hash[ele]==2
    end
  end
end
false || condition

end

arr = [0, 1, 5, 7]
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false