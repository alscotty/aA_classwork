class ChangeCats < ActiveRecord::Migration[5.2]
  def change
    remove_column :cats, :sex
    remove_column :cats, :description
  end
end
