class ChangeArtistIdToUserIdInCollections < ActiveRecord::Migration[5.2]
  def change
    rename_column :collections, :artist_id, :user_id
  end
end
