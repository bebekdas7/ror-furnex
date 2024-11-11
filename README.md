ROR Furnex
Description
ROR Furnex is a Ruby on Rails application designed for managing furniture inventory and sales. This application allows users to browse, add, and manage furniture items efficiently. It incorporates features for both customers and administrators, providing a seamless experience for furniture management.

Installation Instructions
Clone the Repository:

bash
Copy code
git clone https://github.com/bebekdas7/ror-furnex.git
Navigate to the Project Directory:

bash
Copy code
cd ror-furnex
Install Dependencies:

bash
Copy code
bundle install
Set Up the Database: Paste the following data into seeds.rb in the backend directory:

ruby
Copy code
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
Now, run the following command in the terminal:

bash
Copy code
rails db:migrate
Start the Server:

bash
Copy code
rails server
Access the Application: Open your browser and navigate to: http://localhost:3000

Usage
After logging in, users can navigate through the furniture catalog. Users can add products to their cart and make purchases. Additionally, users have access to the "My Orders" section, where their orders will be listed.

