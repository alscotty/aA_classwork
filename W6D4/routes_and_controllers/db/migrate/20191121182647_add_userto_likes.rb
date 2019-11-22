class AddUsertoLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :user_id, :integer, null: false, foreign_key:true

      add_index :likes, :user_id
      add_index :likes, [:user_id,:likable_id, :likable_type], unique:true
  end


end
