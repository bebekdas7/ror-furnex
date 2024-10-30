class CreateChairs < ActiveRecord::Migration[7.2]
  def change
    create_table :chairs do |t|
      t.string :name
      t.string :brand
      t.string :description
      t.string :price

      t.timestamps
    end
  end
end
