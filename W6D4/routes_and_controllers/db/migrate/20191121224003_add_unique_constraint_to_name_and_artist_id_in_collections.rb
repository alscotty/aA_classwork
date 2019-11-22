class AddUniqueConstraintToNameAndArtistIdInCollections < ActiveRecord::Migration[5.2]
  def change
    add_index :collections, [:name,:artist_id], unique:true
  end
end
