class AddFavoritableTypeToFavorites < ActiveRecord::Migration[5.2]
  def change
    add_column :favorites, :favoritable_type, :string
  end
end
