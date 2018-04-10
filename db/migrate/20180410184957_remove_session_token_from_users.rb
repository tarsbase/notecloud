class RemoveSessionTokenFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :session_token
  end
end
