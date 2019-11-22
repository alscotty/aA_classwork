class RemoveCollectonIdFromArtwork < ActiveRecord::Migration[5.2]
  def change
    remove_column :artworks, :collection_id
  end
end
