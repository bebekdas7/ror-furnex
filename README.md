Project Title: ROR Furnex

Description:

ROR Furnex is a Ruby on Rails application designed for managing furniture inventory 
and sales. This application allows users to browse, add, and manage furniture items 
efficiently. It incorporates features for both customers and administrators, providing
a seamless experience for furniture management.

Installation Instructions:
1] CLone the repo:
      git clone https://github.com/bebekdas7/ror-furnex.git
2] Navigate to the Project Directory:
      cd ror-furnex
3] Install Dependencies:
      bundle install
4] Set Up the Database:
      Paste the beloe data into seeds.rb file in backend:
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

      Now run this command in terminal:
        rails db:migrate
5] Start the Server:
      rails server
6] Access the Application:
      http://localhost:3000


Usage:

After logging in, users can navigate through the furniture catalog.
User can add the products to cart and buy as well.
user will be having my orders section where the orders will be listed.



