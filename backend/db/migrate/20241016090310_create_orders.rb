class CreateOrders < ActiveRecord::Migration[7.2]
  def change
    create_table :orders do |t|
      t.string :productId
      t.string :userId
      t.string :buyerName
      t.string :buyerEmail
      t.string :buyerAddress

      t.timestamps
    end
  end
end
