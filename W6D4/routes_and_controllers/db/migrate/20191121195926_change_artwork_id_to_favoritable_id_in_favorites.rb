class ChangeArtworkIdToFavoritableIdInFavorites < ActiveRecord::Migration[5.2]
  def change

    rename_column :favorites, :artwork_id, :favoritable_id

  end
end
