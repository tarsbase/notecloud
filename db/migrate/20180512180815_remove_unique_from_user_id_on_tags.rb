class RemoveUniqueFromUserIdOnTags < ActiveRecord::Migration[5.1]
  def change
    remove_index :tags, :user_id
    add_index :tags, :user_id
  end
end
