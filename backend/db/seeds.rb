chairs = [
  { name: "Elegant Office Chair", brand: "FURNE-X", description: "A comfortable office chair with ergonomic support.", price: "149.99" },
  { name: "Modern Dining Chair", brand: "DecoHome", description: "A stylish dining chair with a sleek design.", price: "89.99" },
  { name: "Luxury Lounge Chair", brand: "ComfySeats", description: "A plush lounge chair for ultimate relaxation.", price: "299.99" },
  { name: "Wooden Rocking Chair", brand: "ClassicCraft", description: "A traditional rocking chair made of solid wood.", price: "159.99" },
  { name: "Outdoor Patio Chair", brand: "SunshineFurniture", description: "A weather-resistant patio chair perfect for outdoor seating.", price: "79.99" }
]

chairs.each do |chair_data|
  Chair.create(chair_data)
end

puts "Seeding completed!"
