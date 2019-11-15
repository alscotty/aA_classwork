class AddColumn < ActiveRecord::Migration[5.1]
  def change

    add_column :courses, :id, :integer

    add_column :enrollments, :id, :integer

    add_column :users, :id, :integer


  end
end
