class AddConstraintsToUserIdAndArtworkInFavorites < ActiveRecord::Migration[5.2]
  def change

    change_column :favorites, :user_id, :integer, null:false
    change_column :favorites, :artwork_id, :integer, null:false

  end
end
