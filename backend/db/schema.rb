# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_10_16_122104) do
  create_table "carts", force: :cascade do |t|
    t.string "productId"
    t.string "productName"
    t.string "productDescription"
    t.string "productPrice"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "userId"
  end

  create_table "chairs", force: :cascade do |t|
    t.string "name"
    t.string "brand"
    t.string "description"
    t.string "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.string "productId"
    t.string "userId"
    t.string "buyerName"
    t.string "buyerEmail"
    t.string "buyerAddress"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end
