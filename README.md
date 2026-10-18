# Pizza Town Website 🍕

**Tagline:** Your Cravings. Our Kitchen.

A mobile-friendly website for Pizza Town, a 100% vegetarian pizza, burger and fast-food restaurant in Jhinjhana, Shamli, Uttar Pradesh.

## Restaurant details

- **Menu:** 100% vegetarian
- **Hours:** Every day, 9:00 AM–10:00 PM
- **WhatsApp:** +91 78300 19038
- **Location:** Jhinjhana, Shamli, Uttar Pradesh 247773
- **Get Directions URL:** https://maps.app.goo.gl/7YV7JjyiU5X66h8N9
- **Ordering:** Cart + checkout form + WhatsApp order handoff
- **Delivery:** Home delivery and takeaway/pickup
- **Design:** Premium dark theme, orange/red accents, responsive layout and smooth scrolling
- No offers section, as requested.

## 1. Project files

Expected project structure (your repository may contain additional files):

```text
/
├── index.html       # Page structure, visible content, restaurant details and links
├── style.css        # Colors, layout, typography and mobile/responsive styling
├── script.js        # Menu rendering, search/filter, cart and WhatsApp checkout
├── products.js      # Product data: names, prices, descriptions, categories and image filenames
└── images/
    ├── hero-pizza.jpg
    ├── logo.png
    └── ...product photos...
```

| Task | Where to edit |
|---|---|
| Add, change or remove products | `products.js` |
| Replace a product photo | Upload/replace the image in `images/` |
| Replace hero photo | `images/hero-pizza.jpg` (if referenced by HTML) |
| Replace logo | `images/logo.png` (if referenced by HTML) |
| Change page text, address, WhatsApp or Maps link | `index.html` |
| Change colors, layout or mobile design | `style.css` |
| Change cart or checkout behavior | `script.js` |
| Publish updates | Commit to GitHub and confirm Cloudflare deployment |

## 2. Add a new product

1. Open the Pizza Town repository on GitHub.
2. Open `products.js` and click the pencil/edit icon.
3. Find the `const PRODUCTS = [` list.
4. Copy a complete product object and change its details.
5. Upload the matching photo to the `images/` folder.
6. Commit your changes and wait for Cloudflare to deploy.
7. Open the live website and test the new product.

### Example product

```js
{
  id: "pizza-new-special",
  name: "Veg Special Pizza",
  price: 249,
  category: "Pizza",
  description: "A vegetarian pizza with cheese and fresh vegetables.",
  image: "pizza-new-special.jpg",
  emoji: "🍕",
  available: true
},
```

Place this object inside the `PRODUCTS` array, with commas between neighboring objects.

### What each field means

- `id`: unique identifier. Do not reuse another product's ID.
- `name`: product name displayed on the website.
- `price`: number only, e.g. `249`; do not add `₹` or quotes.
- `category`: use an existing category: `Pizza`, `Burger`, `Fries`, `Pasta`, `Garlic Bread`, `Sandwich`, or `Drinks`.
- `description`: short product description.
- `image`: exact filename of the product photo inside `images/`.
- `emoji`: fallback/category emoji.
- `available`: `true` for available products. Verify the current script before relying on `false` to hide an item.

**Image filename warning:** Spelling, extension and uppercase/lowercase must match exactly. If the product says `pizza-new-special.jpg`, upload that exact filename into `images/`.

Do not delete the final `];` or `window.PRODUCTS = PRODUCTS;` at the bottom of `products.js`.

## 3. Change an existing product

Find the product object in `products.js` and change the relevant field:

- Price: `price: 199` → `price: 219`
- Name: edit `name`
- Description: edit `description`
- Category: edit `category`
- Photo: edit `image` and upload the matching file into `images/`

Commit the change, wait for deployment and test the live website.

## 4. Remove a product

Delete the complete object for the product from `products.js`, including its braces. Be careful with commas between objects. Save, commit, wait for deployment and test the menu.

If you want to use `available: false` instead, first verify that the current website script supports it.

## 5. Update restaurant information

### WhatsApp number

Current number: **+91 78300 19038**

Click-to-chat URL:

```text
https://wa.me/917830019038
```

To change the number, search `index.html` for `wa.me/917830019038` and update all relevant links. Check `script.js` too if the number is also used there. Use country code `91` and digits only in the URL—no plus sign, spaces or hyphens.

### Google Maps / Get Directions

Intended map link:

```text
https://maps.app.goo.gl/7YV7JjyiU5X66h8N9
```

In `index.html`, find the Get Directions link and update its `href`. The map link and visible address text are separate, so update both if the address changes. Test the button after deployment.

### Opening hours

Current hours: **Every day, 9:00 AM–10:00 PM**.

Search `index.html` for `9:00 AM`, `10:00 PM`, or `9 AM`. Update every visible occurrence, including the top strip, hero section and footer.

### Logo and hero image

- Use `images/logo.png` if that is the path referenced by the HTML.
- Use `images/hero-pizza.jpg` if that is the hero image path in the HTML.
- If you rename an image, update its path in `index.html` too.

## 6. How ordering works currently

The website includes a product menu, cart, subtotal and checkout form. The customer can enter their name and mobile number, choose **Home delivery** or **Takeaway / pickup**, add a delivery address and optional instructions, and open WhatsApp with the order details prepared.

- The customer must press **Send** in WhatsApp; the site does not send the message automatically.
- Delivery charges, if any, are confirmed by the restaurant.
- There is no separate restaurant admin dashboard; product edits are managed through GitHub.
- **Online payment is not implemented in the current version described here.** A proposed future flow is UPI QR/payment link → WhatsApp opens → customer shares a payment screenshot → owner checks the transaction in their own UPI/bank app.
- A screenshot alone does not prove payment. Automatic payment confirmation requires a payment gateway integration that must be implemented and tested.

Do not advertise online payment as active until it is actually set up and tested.

## 7. Publish updates with GitHub and Cloudflare

1. Open the correct Pizza Town repository on GitHub.
2. Edit the relevant file or upload the required image.
3. Commit changes to the branch connected to Cloudflare.
4. Confirm the Cloudflare deployment has completed.
5. Open the public website and test the change.

If changes do not appear:

- Confirm the correct repository and branch were edited.
- Confirm the image is inside `images/`.
- Check filename spelling, extension and letter case.
- Check that the HTML or product data references the exact filename.
- Wait for deployment, then hard-refresh the browser (`Ctrl + Shift + R` on Windows).

Saving a change to GitHub does not guarantee that the live website has finished updating—always test it.

## 8. Testing checklist

- [ ] Home page and navigation load correctly.
- [ ] Menu search and category filters work.
- [ ] Product names, prices and photos are correct.
- [ ] No product image is broken.
- [ ] Cart quantities and subtotal work.
- [ ] Checkout form accepts customer details.
- [ ] Delivery and takeaway options behave correctly.
- [ ] WhatsApp opens the correct number and includes order details.
- [ ] Get Directions opens the intended map location.
- [ ] Opening hours and address are correct.
- [ ] Mobile and desktop layouts look correct.

## 9. Important reminders

- Keep all products vegetarian.
- Do not add passwords, secret keys, bank credentials or private customer information to GitHub.
- The owner does not have a separate product admin panel; Sawan manages menu changes through GitHub.
- Update this README whenever the project structure or ordering/payment flow changes.

---

**Project purpose:** A premium, mobile-friendly vegetarian restaurant website with editable menu data, cart and WhatsApp-based order handoff.
