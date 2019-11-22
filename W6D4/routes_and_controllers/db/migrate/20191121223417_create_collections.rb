class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.integer :artist_id, null:false, foreign_key:true
      t.string :name, null:false
      t.timestamps
    end
    add_index :collections, :artist_id
  end
end
