class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title
      t.text :image_url
      t.integer :artist_id, foreign_key: true

      t.timestamps
    end
    add_index :artworks, :artist_id
  end
end
