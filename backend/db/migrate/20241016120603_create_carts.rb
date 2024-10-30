class CreateCarts < ActiveRecord::Migration[7.2]
  def change
    create_table :carts do |t|
      t.string :productId
      t.string :productName
      t.string :productDescription
      t.string :productPrice

      t.timestamps
    end
  end
end
