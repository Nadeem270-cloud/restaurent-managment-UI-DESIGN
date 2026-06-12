# Restaurant Management System (UI)

A responsive, single-page Restaurant Management System UI built with plain HTML, CSS and vanilla JavaScript. This project is a client-side demo (no backend) showcasing restaurant listings, menu browsing, cart & checkout flow, basic admin dashboard, user authentication (UI-only), dark mode, and a small chatbot widget.

**Quick Preview:**
- Open [INDEX.HTML](INDEX.HTML) in a browser to run the app locally.

**Features**
- Browse restaurants and filter by category (veg, non-veg, fast-food, dessert)
- View restaurant menus and add items to cart
- Cart management (quantity increment/decrement, clear cart)
- Checkout flow with order summary and simulated payment
- Simple user auth UI (login/signup) persisted to `localStorage`
- Profile page with recent orders (stored in `localStorage`)
- Admin dashboard (UI-only) with animated stats and add-item form
- Dark/light theme toggle persisted to `localStorage`
- Chatbot widget for canned responses

**Files & Structure**
- [INDEX.HTML](INDEX.HTML) : Main SPA HTML (navigation + pages)
- [styles.css](styles.css) : All styling, variables, responsive rules
- [data.js](data.js) : Sample data arrays: `sampleRestaurants` and `sampleMenuItems`
- [script.js](script.js) : Application logic (navigation, cart, profile, admin, theme, chatbot)
- [README.md](README.md) : This document

**Technical Notes**
- This is a static front-end demo. All persistence uses `localStorage` keys: `cart`, `orders`, `currentUser`, `darkMode`.
- `data.js` must load before `script.js`. `INDEX.HTML` already includes the scripts in that order.
- Icons and fonts are loaded externally via Google Fonts and Font Awesome (CDN links in head).

**How to run locally**
1. Clone or copy the project folder to your machine.
2. Open `INDEX.HTML` in your browser (Chrome/Firefox/Edge recommended).

No build steps or package manager required.

**Notes for Developers**
- To reset demo data (cart/orders/user/theme) in the browser console run:

```js
localStorage.removeItem('cart');
localStorage.removeItem('orders');
localStorage.removeItem('currentUser');
localStorage.removeItem('darkMode');
``` 

- To add more restaurants or menu items, edit `data.js` and refresh the page.
- The admin "Add Food Item" form is UI-only and does not persist new items to `data.js`.

**Suggested Improvements**
- Wire the admin form to persist new items (in-memory or to backend).
- Add user authentication backed by a server or Firebase for real accounts.
- Replace static image URLs with local assets or a CDN with consistent sizing.
- Add form validation and friendly error handling for checkout and signup.
- Extract UI components into smaller modules for maintainability.

**License & Credits**
- Demo code provided for learning and prototyping. Reuse and modify freely.
- Google Fonts and Font Awesome icons are used via CDN.

---
## Screenshots

Below are sample UI screenshots from the `screenshots/` folder. Images are scaled for README display; click to open full size.

<figure>
	<a href="screenshots/home%20page.png"><img src="screenshots/home%20page.png" alt="Home page" style="max-width:640px;width:100%;height:auto;border:1px solid #ddd"></a>
	<figcaption>Home (desktop) — main landing and featured restaurants.</figcaption>
</figure>

<figure>
	<a href="screenshots/restaurents%20page.png"><img src="screenshots/restaurents%20page.png" alt="Restaurants page" style="max-width:640px;width:100%;height:auto;border:1px solid #ddd"></a>
	<figcaption>Restaurants list with filters and categories.</figcaption>
</figure>

<figure>
	<a href="screenshots/all%20restaurant%20page%201.png"><img src="screenshots/all%20restaurant%20page%201.png" alt="All restaurants" style="max-width:640px;width:100%;height:auto;border:1px solid #ddd"></a>
	<figcaption>All restaurants grid view.</figcaption>
</figure>

<figure>
	<a href="screenshots/popular%20restaurent%20page.png"><img src="screenshots/popular%20restaurent%20page.png" alt="Popular restaurants" style="max-width:640px;width:100%;height:auto;border:1px solid #ddd"></a>
	<figcaption>Popular restaurants section.</figcaption>
</figure>

<figure>
	<a href="screenshots/login%20page.png"><img src="screenshots/login%20page.png" alt="Login page" style="max-width:360px;width:100%;height:auto;border:1px solid #ddd"></a>
	<figcaption>Login / Signup UI (responsive).</figcaption>
</figure>

<figure>
	<a href="screenshots/order%20page1.png"><img src="screenshots/order%20page1.png" alt="Order page" style="max-width:480px;width:100%;height:auto;border:1px solid #ddd"></a>
	<figcaption>Order summary and recent orders.</figcaption>
</figure>

<figure>
	<a href="screenshots/payment%20page.png"><img src="screenshots/payment%20page.png" alt="Payment page" style="max-width:480px;width:100%;height:auto;border:1px solid #ddd"></a>
	<figcaption>Checkout / Payment flow.</figcaption>
</figure>

<figure>
	<a href="screenshots/chatbox%20page%201.png"><img src="screenshots/chatbox%20page%201.png" alt="Chatbox" style="max-width:640px;width:100%;height:auto;border:1px solid #ddd"></a>
	<figcaption>Chatbot widget (demo responses).</figcaption>
</figure>

If you want actual compressed/resized image files (smaller bytes on disk) I can provide commands to create optimized copies locally.