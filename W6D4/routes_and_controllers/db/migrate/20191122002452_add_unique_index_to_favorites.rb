class AddUniqueIndexToFavorites < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, [:user_id, :favoritable_id, :favoritable_type], unique:true, name: 'unique_favorites'
  end
end
