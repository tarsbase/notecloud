class CreateNoteImages < ActiveRecord::Migration[5.1]
  def change
    create_table :note_images do |t|
      t.string :url

      t.timestamps
    end
  end
end
