class CreateArtworkCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :artwork_collections do |t|
      t.integer :artwork_id, foreign_key:true, null:false
      t.integer :collection_id, foreign_key:true, null:false
      t.timestamps
    end
    add_index :artwork_collections, [:artwork_id,:collection_id], unique:true
    add_index :artwork_collections, :artwork_id
    add_index :artwork_collections, :collection_id
  end
end
