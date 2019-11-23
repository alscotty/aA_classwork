require 'date'
class Cat < ApplicationRecord
  COLORS=["white","black","brown","grey"]
  def self.COLORS
    COLORS
  end


  validates :name,:birth_date,:sex, :description, :color, presence:true
  validates :color, :inclusion=> {in: COLORS}
  validates :sex, inclusion: {in: ["M","F"]}

  def age
    Date.today.year - self.birth_date.year
  end



end
