class AddCollectionIdToArtwork < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :collection_id, :integer, foreign_key:true
    add_index :artworks, :collection_id
  end

end
