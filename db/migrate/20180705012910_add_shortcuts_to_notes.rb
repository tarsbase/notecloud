class AddShortcutsToNotes < ActiveRecord::Migration[5.1]
  def change
    add_column :notes, :shortcut, :boolean
  end
end
