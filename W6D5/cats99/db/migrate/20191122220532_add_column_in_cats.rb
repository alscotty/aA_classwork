class AddColumnInCats < ActiveRecord::Migration[5.2]
  def change
    change_table :cats do |t|
      t.string :color, null: false
      t.string :sex, limit: 1, null: false
      t.text :description, null: false
    end
  end
end
