class AddUserIdToCart < ActiveRecord::Migration[7.2]
  def change
    add_column :carts, :userId, :string
  end
end
