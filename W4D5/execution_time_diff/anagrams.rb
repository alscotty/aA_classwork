
#n!
def first_anagram?(string,anagram)


arr=string.split("")
arr=arr.permutation.to_a.map(&:join)
arr.include?(anagram)
end


# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true


def second_anagram?(str, anagram)
  arr_anagram = anagram.split("")
  arr_str = str.split("")

  arr_str.each_with_index do |char, i|
    if arr_anagram.include?(char)
      arr_str[i] = ""
      index = arr_anagram.find_index(char)
      arr_anagram[index] = ""
    end
  end
  arr_str.join.empty? && arr_anagram.join.empty?
end

 second_anagram?("gizmo", "sally")    #=> false
second_anagram?("elvis", "lives")    #=> true

#n logn
def third_anagram?(str,anagram)
  str.split("").sort==anagram.split("").sort
end
# count1=Hash.new(0)
# str.each_char {|char| count1[char]+=1}
# count2=Hash.new(0)
# anagram.each_char {|char| count2[char]+=1}

# count1==count2
#n
def fourth_anagram?(str,anagram)
count1=Hash.new(0)
str.each_char {|char| count1[char]+=1}
anagram.each_char {|char| count1[char]-=1}

count1.values.all?(0)


end

 p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true