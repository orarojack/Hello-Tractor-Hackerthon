class RenameUserTypeToRole < ActiveRecord::Migration[7.2]
  def change
    rename_column :users, :user_type, :role
  end
end
