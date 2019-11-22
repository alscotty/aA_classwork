class AddConstraintsToLikableIdAndTypeInLikes < ActiveRecord::Migration[5.2]
  def change
  change_column :likes, :likable_id, :integer, null: false
  change_column :likes, :likable_type, :string, null: false

  
  end
end
