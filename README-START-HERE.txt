PIZZA TOWN WEBSITE — START HERE
================================

This is a starter website for Pizza Town:
- 100% vegetarian
- Opening hours: daily 9:00 AM to 10:00 PM
- Location: G679+C8C, Meerut–Karnal Road, near Gaddi Wala Flyover,
  Jhinjhana, Shamli, Uttar Pradesh 247773, India
- Orders open WhatsApp for +91 78300 19038
- Customer chooses delivery or takeaway
- Payment and delivery charges are confirmed directly with the restaurant
- No customer-facing product editor/admin panel

FILES
-----
index.html   = page structure and text
style.css    = colours, layout, mobile design and animations
script.js    = filters, search, cart and WhatsApp checkout
products.js  = all products (edit this to add/remove/change products)
images/      = upload food photos here

HOW TO ADD A PRODUCT FROM YOUR PHONE
------------------------------------
1. Open your GitHub repository in your phone browser/app.
2. Open the images folder and upload the new photo.
   Example: veg-wrap.jpg
3. Open products.js and add a new object inside PRODUCTS, before the final ];.
   Example:
   { id:"veg-wrap", name:"Veg Wrap", price:129, category:"Sandwich",
     description:"Fresh veggie wrap with house sauce.", image:"veg-wrap.jpg",
     emoji:"🌯", available:true },
4. Save/commit the change.
5. Wait for Cloudflare Pages to finish deploying, then refresh the website.

HOW TO REMOVE OR HIDE A PRODUCT
-------------------------------
- To remove it from the menu: delete that product's complete object in products.js.
- To temporarily hide it: change available:true to available:false.
- Only delete its image file if no other product uses that image.

IMPORTANT IMAGE RULES
---------------------
- Put image files inside images/.
- Filename must match the image value in products.js exactly, including capitals.
- Recommended product image: JPG or WEBP, square crop (about 800x800 pixels).
- Keep images compressed so the site loads quickly on mobile.
- Until you upload real photos, food emoji placeholders appear instead.

WHATSAPP ORDER FLOW
-------------------
Customer adds items to cart, enters their name, phone and delivery address (if delivery),
then chooses “Send order to WhatsApp”. WhatsApp opens with the order message pre-filled.
The customer must tap Send. The restaurant will confirm order, final delivery charge and
payment directly with the customer. No online payment gateway is included.

BEFORE PUBLIC LAUNCH
--------------------
1. Replace starter product prices and descriptions with the restaurant's real menu.
2. Upload real food photos in images/.
3. Confirm the restaurant owner wants this exact WhatsApp number and address published.
4. Test on your phone: add products, increase/decrease quantity, delivery, takeaway,
   and send a WhatsApp test order to yourself before launch.
5. Deploy on Cloudflare Pages. Do not put private passwords or secret API keys in public files.

DESIGN NOTE
-----------
The site uses Google Fonts when internet is available. It still works without them,
using fallback fonts. This starter does not include online payments, delivery tracking,
or an admin panel by design; product edits are made by the website builder (you).
