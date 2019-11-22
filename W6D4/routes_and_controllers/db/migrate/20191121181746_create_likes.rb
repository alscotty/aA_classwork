class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :likable_id
      t.string :likable_type

      t.timestamps
    end
  end
end
