class AddNoteIdToNoteImages < ActiveRecord::Migration[5.1]
  def change
    add_column :note_images, :note_id, :integer, null: false
    change_column_null :note_images, :url, false
  end
end
