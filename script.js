/* Pizza Town interactions: menu, filters, cart and WhatsApp checkout */
(() => {
  "use strict";
  const OWNER_WHATSAPP = "917830019038"; // Country code + number, digits only
  const CATEGORIES = [
    {name:"All", icon:"✦"}, {name:"Pizza", icon:"🍕"}, {name:"Burger", icon:"🍔"},
    {name:"Fries", icon:"🍟"}, {name:"Pasta", icon:"🍝"}, {name:"Garlic Bread", icon:"🥖"},
    {name:"Sandwich", icon:"🥪"}, {name:"Drinks", icon:"🥤"}
  ];
  const state = { category:"All", search:"", cart:{} };
  const $ = (id) => document.getElementById(id);
  const money = (value) => "₹" + Number(value).toLocaleString("en-IN");
  const products = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : (typeof PRODUCTS !== "undefined" && Array.isArray(PRODUCTS) ? PRODUCTS : []);

  function safeText(value) {
    return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }
  function getProduct(id) { return products.find(p => p.id === id); }
  function showToast(message) {
    const toast = $("toast");
    toast.textContent = message; toast.classList.add("show");
    clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }
  function renderCategories() {
    $("categories").innerHTML = CATEGORIES.filter(c => c.name !== "All").map(c =>
      `<button class="category-chip ${state.category===c.name?"selected":""}" data-category="${safeText(c.name)}"><span class="category-icon">${c.icon}</span><strong>${safeText(c.name==="Burger"?"Burgers":c.name==="Drinks"?"Drinks":c.name==="Fries"?"Fries":c.name==="Pasta"?"Pasta":c.name==="Sandwich"?"Sandwiches":c.name==="Garlic Bread"?"Garlic Bread":"Pizzas")}</strong></button>`
    ).join("");
    $("filters").innerHTML = CATEGORIES.map(c => `<button class="filter-button ${state.category===c.name?"selected":""}" data-category="${safeText(c.name)}">${safeText(c.name==="All"?"All items":c.name)}</button>`).join("");
  }
  function productImage(p) {
    const src = "images/" + p.image;
    return `<img src="${safeText(src)}" alt="${safeText(p.name)}" loading="lazy" onerror="this.remove();this.parentElement.querySelector('.product-emoji').hidden=false"><span class="product-emoji" hidden>${safeText(p.emoji || "🍽️")}</span>`;
  }
  function renderProducts() {
    const query = state.search.trim().toLowerCase();
    const filtered = products.filter(p => p.available !== false &&
      (state.category==="All" || p.category===state.category) &&
      (!query || [p.name,p.category,p.description].some(v => String(v||"").toLowerCase().includes(query))));
    $("productGrid").innerHTML = filtered.map(p => `<article class="product-card">
      <div class="product-image">${productImage(p)}<span class="veg-badge">● VEG</span></div>
      <div class="product-info"><h3>${safeText(p.name)}</h3><p>${safeText(p.description)}</p>
      <div class="product-bottom"><strong class="product-price">${money(p.price)}</strong><button class="add-button" data-add="${safeText(p.id)}">＋ Add to cart</button></div></div></article>`).join("");
    $("emptyState").hidden = filtered.length !== 0;
  }
  function cartEntries() { return Object.entries(state.cart).map(([id,qty]) => ({p:getProduct(id),qty})).filter(x => x.p && x.qty > 0); }
  function cartTotal() { return cartEntries().reduce((sum,x) => sum + Number(x.p.price)*x.qty,0); }
  function renderCart() {
    const entries = cartEntries();
    const count = entries.reduce((sum,x) => sum+x.qty,0);
    $("cartCount").textContent = count;
    $("cartItems").innerHTML = entries.map(({p,qty}) => `<div class="cart-line"><div class="cart-line-art">${productImageSmall(p)}</div><div><h4>${safeText(p.name)}</h4><small>${money(p.price)}</small><div class="qty-controls"><button data-qty="${safeText(p.id)}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${qty}</span><button data-qty="${safeText(p.id)}" data-delta="1" aria-label="Increase quantity">+</button></div></div><button class="remove-item" data-remove="${safeText(p.id)}" aria-label="Remove ${safeText(p.name)}">×</button></div>`).join("");
    $("cartEmpty").hidden = entries.length > 0;
    $("cartSummary").hidden = entries.length === 0;
    $("cartSubtotal").textContent = money(cartTotal());
  }
  function productImageSmall(p) {
    return `<img src="images/${safeText(p.image)}" alt="" onerror="this.replaceWith(document.createTextNode('${String(p.emoji||"🍽️").replace(/'/g,"")}'))">`;
  }
  function addToCart(id) {
    const p = getProduct(id); if (!p || p.available === false) return;
    state.cart[id] = (state.cart[id] || 0) + 1; renderCart(); showToast(p.name + " added to cart");
  }
  function openCart() { $("cartDrawer").classList.add("open"); $("cartBackdrop").classList.add("show"); $("cartDrawer").setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; }
  function closeCart() { $("cartDrawer").classList.remove("open"); $("cartBackdrop").classList.remove("show"); $("cartDrawer").setAttribute("aria-hidden","true"); document.body.style.overflow=""; }
  function openCheckout() {
    if (!cartEntries().length) { showToast("Your cart is empty"); return; }
    closeCart(); $("checkoutModal").classList.add("open"); $("checkoutModal").setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
  }
  function closeCheckout() { $("checkoutModal").classList.remove("open"); $("checkoutModal").setAttribute("aria-hidden","true"); document.body.style.overflow=""; }
  function submitWhatsAppOrder(form) {
    const data = new FormData(form);
    const name = String(data.get("customerName")||"").trim();
    const phone = String(data.get("customerPhone")||"").trim();
    const type = String(data.get("orderType")||"Home delivery");
    const address = String(data.get("address")||"").trim();
    const notes = String(data.get("notes")||"").trim();
    if (!name || !phone) { showToast("Please add your name and phone number"); return; }
    if (type === "Home delivery" && !address) { showToast("Please add your delivery address"); form.elements.address.focus(); return; }
    const lines = cartEntries().map(({p,qty}) => `• ${p.name} × ${qty} — ${money(Number(p.price)*qty)}`);
    const message = [
      "🍕 *NEW ORDER — PIZZA TOWN*",
      "",
      `*Customer:* ${name}`,
      `*Phone:* ${phone}`,
      `*Order type:* ${type}`,
      ...(type === "Home delivery" ? [`*Delivery address:* ${address}`] : []),
      "",
      "*Order items:*",
      ...lines,
      "",
      `*Subtotal:* ${money(cartTotal())}`,
      "*Payment:* Please confirm with customer",
      ...(notes ? ["", `*Special instructions:* ${notes}`] : []),
      "",
      "Please confirm availability, delivery charges and final total with the customer."
    ].join("\n");
    const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    state.cart = {}; renderCart(); closeCheckout(); form.reset(); $("addressField").style.display="grid";
    showToast("WhatsApp opened — send the message to place your order");
  }
  document.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add]");
    if (add) { addToCart(add.dataset.add); return; }
    const category = event.target.closest("[data-category]");
    if (category) { state.category=category.dataset.category; renderCategories(); renderProducts(); document.querySelectorAll(".category-chip").forEach(b=>b.classList.toggle("selected",b.dataset.category===state.category)); if (category.classList.contains("category-chip")) $("menu").scrollIntoView({behavior:"smooth"}); return; }
    const qty = event.target.closest("[data-qty]");
    if (qty) { const id=qty.dataset.qty; state.cart[id]=(state.cart[id]||0)+Number(qty.dataset.delta); if(state.cart[id]<=0) delete state.cart[id]; renderCart(); return; }
    const remove = event.target.closest("[data-remove]");
    if (remove) { delete state.cart[remove.dataset.remove]; renderCart(); return; }
  });
  $("searchInput").addEventListener("input", e => { state.search=e.target.value; renderProducts(); });
  $("openCart").addEventListener("click",openCart); $("closeCart").addEventListener("click",closeCart); $("cartBackdrop").addEventListener("click",closeCart);
  $("browseMenu").addEventListener("click",()=>{closeCart();$("menu").scrollIntoView({behavior:"smooth"});});
  $("checkoutButton").addEventListener("click",openCheckout); $("closeCheckout").addEventListener("click",closeCheckout);
  $("checkoutModal").addEventListener("click",e=>{if(e.target===$("checkoutModal"))closeCheckout();});
  $("checkoutForm").addEventListener("change",e=>{if(e.target.name==="orderType"){$("addressField").style.display=e.target.value==="Home delivery"?"grid":"none";}});
  $("checkoutForm").addEventListener("submit",e=>{e.preventDefault();submitWhatsAppOrder(e.currentTarget);});
  $("mobileMenu").addEventListener("click",()=>{$("mainNav").classList.toggle("show");});
  document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>$("mainNav").classList.remove("show")));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closeCheckout();}});
  $("year").textContent=new Date().getFullYear();
  renderCategories(); renderProducts(); renderCart();
})();