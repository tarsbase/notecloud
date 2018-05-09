class AddNullConstraintsToTags < ActiveRecord::Migration[5.1]
  def change
    change_column :tags, :name, :string, null: false
    change_column :tags, :user_id, :integer, null: false
  end
end
