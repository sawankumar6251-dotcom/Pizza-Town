/*
  PIZZA TOWN â€” PRODUCT LIST
  Phone-friendly editing guide:
  1) Copy one complete product object (from { to }, including the comma if needed).
  2) Change id, name, price, category, description, image and emoji.
  3) Upload the matching image into the images/ folder.
  4) Save/commit changes in GitHub. Cloudflare will publish the update.
  To remove a product, delete its complete object from this array.
  Categories: Pizza, Burger, Fries, Pasta, Garlic Bread, Sandwich, Drinks
  IMPORTANT: Keep every item vegetarian. Image filenames are case-sensitive.
*/
const PRODUCTS = [
  { id:"pizza-margherita", name:"Margherita Pizza", price:199, category:"Pizza", description:"Classic pizza with fresh cheese, tomato sauce and herbs.", image:"margherita-pizza.jpg", emoji:"ðŸ•", available:true },
  { id:"pizza-farmhouse", name:"Veg Farmhouse Pizza", price:279, category:"Pizza", description:"Loaded with capsicum, onion, tomato and cheese.", image:"veg-farmhouse-pizza.jpg", emoji:"ðŸ•", available:true },
  { id:"pizza-corn-cheese", name:"Corn & Cheese Pizza", price:229, category:"Pizza", description:"Sweet corn, creamy cheese and our signature sauce.", image:"corn-cheese-pizza.jpg", emoji:"ðŸ•", available:true },
  { id:"pizza-paneer", name:"Paneer Tikka Pizza", price:299, category:"Pizza", description:"Tandoori-style paneer, peppers and melted cheese.", image:"paneer-tikka-pizza.jpg", emoji:"ðŸ•", available:true },
  { id:"burger-classic", name:"Classic Veg Burger", price:99, category:"Burger", description:"Crispy veg patty, fresh lettuce and house sauce.", image:"classic-veg-burger.jpg", emoji:"ðŸ”", available:true },
  { id:"burger-cheese", name:"Cheese Veg Burger", price:129, category:"Burger", description:"A crispy vegetarian patty with extra cheese.", image:"cheese-veg-burger.jpg", emoji:"ðŸ”", available:true },
  { id:"burger-paneer", name:"Paneer Burger", price:159, category:"Burger", description:"Spiced paneer patty with crunchy fresh veggies.", image:"paneer-burger.jpg", emoji:"ðŸ”", available:true },
  { id:"fries-classic", name:"French Fries", price:99, category:"Fries", description:"Golden, crispy and perfectly salted.", image:"french-fries.jpg", emoji:"ðŸŸ", available:true },
  { id:"fries-peri-peri", name:"Peri Peri Fries", price:119, category:"Fries", description:"Crispy fries tossed in a spicy peri peri mix.", image:"peri-peri-fries.jpg", emoji:"ðŸŸ", available:true },
  { id:"pasta-white", name:"White Sauce Pasta", price:179, category:"Pasta", description:"Creamy, cheesy pasta with herbs and veggies.", image:"white-sauce-pasta.jpg", emoji:"ðŸ", available:true },
  { id:"pasta-red", name:"Red Sauce Pasta", price:169, category:"Pasta", description:"Tangy tomato sauce, herbs and seasonal vegetables.", image:"red-sauce-pasta.jpg", emoji:"ðŸ", available:true },
  { id:"garlic-bread", name:"Cheese Garlic Bread", price:129, category:"Garlic Bread", description:"Toasted garlic bread topped with melted cheese.", image:"cheese-garlic-bread.jpg", emoji:"ðŸ¥–", available:true },
  { id:"sandwich-grilled", name:"Grilled Veg Sandwich", price:119, category:"Sandwich", description:"Grilled bread packed with veggies and cheese.", image:"grilled-veg-sandwich.jpg", emoji:"ðŸ¥ª", available:true },
  { id:"sandwich-paneer", name:"Paneer Tikka Sandwich", price:149, category:"Sandwich", description:"Tandoori paneer, crunchy veggies and mint sauce.", image:"paneer-tikka-sandwich.jpg", emoji:"ðŸ¥ª", available:true },
  { id:"cold-coffee", name:"Cold Coffee", price:99, category:"Drinks", description:"Chilled, creamy coffee for a refreshing break.", image:"cold-coffee.jpg", emoji:"ðŸ¥¤", available:true },
  { id:"soft-drink", name:"Soft Drink", price:49, category:"Drinks", description:"A chilled soft drink to go with your meal.", image:"soft-drink.jpg", emoji:"ðŸ¥¤", available:true }
];

// Make the product list available to the website scripts.
window.PRODUCTS = PRODUCTS;