class AddConstraintToFavoritableTypeInFavorites < ActiveRecord::Migration[5.2]
  def change

    change_column :favorites,:favoritable_type, :string, null:false
  end
end
