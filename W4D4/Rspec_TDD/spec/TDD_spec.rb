require "TDD"

# describe "#my_uniq" do
#     before(:each) do
#     expect_any_instance_of(Array).not_to receive(:uniq)
#     end

#     it "return error if wrong arg given" do
#       expect {my_uniq(1)}.to raise_error(ArgumentError)
#     end
#     it "should remove duplicates from the array" do
#       res = my_uniq([1,2,1,3,3])
#       expect(res).to eq([1,2,3])
#     end
#     it "should return false if empty array is given" do
#       arr=[1,2,2]
#       expect(my_uniq(arr).object_id).not_to be arr.object_id
#     end

#     it "should return a new array" do
#       arr=[]
#       expect(my_uniq(arr)).to be_falsey
#     end
# end

# describe "#two_sum" do
#    let(:arr) { [-1, 0, 2, -2, 1] }
#   it "return error if wrong arg given" do
#     expect {two_sum(1)}.to raise_error(ArgumentError)
#   end
#   it "should return array of two sums" do 
#     expect(two_sum(arr)).to eq([[0, 4], [2, 3]])
#   end
#   it "each of the pairs to be sorted smaller index before bigger index" do 
#     expect(two_sum(arr)).to eq([[0, 4], [2, 3]])
#   end
#   it "return empty array when no pair sums to 0" do
#     expect(two_sum([1,2,3])).to eq([])
#   end 
# end 

# describe "#my_transpose" do 
#   let(:rows) {
#     [
#     [0, 1, 2],
#     [3, 4, 5],
#     [6, 7, 8]
#     ]
#   }
#   let(:cols) {
#     [
#     [0, 3, 6],
#     [1, 4, 7],
#     [2, 5, 8]
#     ]
#   }

#   it "should switch rows to colums" do
#     expect(my_transpose(rows)).to eq(cols)
#   end
#   it "return error if wrong arg given" do
#     expect {my_transpose(1)}.to raise_error(ArgumentError)
#   end
#   it "should return false for non-square array " do
#     test = [[1,2],[3]]
#     expect(my_transpose(test)).to be_falsey
#   end
#   it "should work with square array " do
#     test = [[1,2],[2,1]]
#     expect(my_transpose(test)).to be_truthy
#   end
# end

# describe "#stock_sell" do
#   let(:stock)  { [7,1,5,3,6,4] }
#   it "return error if wrong arg given" do
#     expect {stock_sell(3)}.to raise_error(ArgumentError)
#   end
#   it "should return max profit from stock sale" do
#     expect(stock_sell(stock)).to eq(5)
#   end
#   it "you were only permitted to complete at most one transaction" do
#     expect(stock_sell(stock)).to eq(5)
#   end 
#   it "return 0 if no profit was made" do
#     expect(stock_sell([7,6,4,3,1])).to eq(0)
#   end
# end

describe HanoiTower do
  let(:tower)  {[[1,2,3,4],[],[]] }
  subject(:hanoi_tower){HanoiTower.new}
  describe "initialize" do
    it "should create @towers as a 2d array of two empty towers 1st tower populated" do
    expect(hanoi_tower.towers).to eq(tower)
    end
    it "should set @game_over to false" do
      expect(hanoi_tower.game_over).to be_falsey
    end
  end
  describe "#won?" do
    it "should return true if last tower has all the pieces in order" do
      hanoi_tower.towers[-1]=[1,2,3,4]
      hanoi_tower.towers[0]=[]
      expect(hanoi_tower.won?).to be_truthy
    end
    it "should return false if last tower doesn't hase all the pieces in order " do
      expect(hanoi_tower.won?).to be_falsey
    end
  end

  describe "#move" do
    it "should remove one piece from one tower to another" do
      hanoi_tower.move
      expect(hanoi_tower.towers[-1]).to include(1)
    end

  end

end

