class RemoveNullConstraintFromNotesBody < ActiveRecord::Migration[5.1]
  def change
    change_column_null :notes, :body, true
  end
end
