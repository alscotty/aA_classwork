class RemoveUniqueIndexFromFavorites < ActiveRecord::Migration[5.2]
  def change
    remove_index :favorites, [:user_id, :favoritable_id]
  end
end
