class RemoveNoteImages < ActiveRecord::Migration[5.1]
  def change
    drop_table :note_images
  end
end
