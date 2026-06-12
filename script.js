// App State
let currentUser = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orders = JSON.parse(localStorage.getItem('orders')) || [];
let restaurants = [];
let currentRestaurant = null;
let currentPage = 'home';
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
    initApp();
    updateCartCount();
    loadRestaurants();
});

function initApp() {
    restaurants = [...sampleRestaurants];
    renderHomeRestaurants();
    document.querySelector('.back-btn').style.display = 'none';
}

// Page Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    currentPage = pageId;
    
    if (pageId !== 'home' && pageId !== 'login' && pageId !== 'signup') {
        document.querySelector('.back-btn').style.display = 'block';
    } else {
        document.querySelector('.back-btn').style.display = 'none';
    }

    // Page specific logic
    if (pageId === 'cart') renderCart();
    if (pageId === 'profile') renderProfile();
    if (pageId === 'admin') renderAdmin();
}

function goBack() {
    if (currentPage === 'menu') {
        showPage('restaurants');
    } else if (currentPage === 'restaurants' || currentPage === 'cart' || currentPage === 'profile') {
        showPage('home');
    } else {
        showPage('home');
    }
}

// Auth Functions
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    currentUser = { email, name: 'USER' };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showToast('Login successful!');
    showPage('home');
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    currentUser = { name, email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showToast('Account created successfully!');
    showPage('home');
}

function toggleAuth() {
    if (document.getElementById('login').classList.contains('active')) {
        showPage('signup');
    } else {
        showPage('login');
    }
}

// Restaurant Functions
function loadRestaurants() {
    renderRestaurantsList(sampleRestaurants);
}

function renderRestaurantsList(restaurantsList) {
    const container = document.getElementById('restaurant-list');
    container.innerHTML = restaurantsList.map(restaurant => `
        <div class="restaurant-card" onclick="openRestaurantMenu(${restaurant.id})">
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-info">
                <div class="restaurant-name">${restaurant.name}</div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    ${restaurant.rating}
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">(${Math.floor(Math.random() * 100) + 50} reviews)</span>
                </div>
                <div class="restaurant-meta">${restaurant.cuisines} • ${restaurant.time} • ${restaurant.price}</div>
            </div>
        </div>
    `).join('');
}

function renderHomeRestaurants(filtered = sampleRestaurants) {
    const container = document.getElementById('home-restaurants');
    container.innerHTML = filtered.slice(0, 6).map(restaurant => `
        <div class="restaurant-card" onclick="openRestaurantMenu(${restaurant.id})">
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-info">
                <div class="restaurant-name">${restaurant.name}</div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    ${restaurant.rating}
                </div>
                <div class="restaurant-meta">${restaurant.cuisines}</div>
            </div>
        </div>
    `).join('');
}

function openRestaurantMenu(restaurantId) {
    const restaurant = sampleRestaurants.find(r => r.id === restaurantId);
    currentRestaurant = restaurant;
    document.getElementById('menu-title').textContent = `${restaurant.name} Menu`;
    
    // Filter menu items by restaurant category
    const menuItems = sampleMenuItems.filter(item => 
        item.category === restaurant.category || Math.random() > 0.3
    );
    
    const container = document.getElementById('menu-items');
    container.innerHTML = menuItems.map(item => `
        <div class="food-card">
            <img src="${item.image}" alt="${item.name}" class="food-image">
            <div class="food-info">
                <div class="food-name">${item.name} ${item.isVeg ? '🥬' : '🍗'}</div>
                <div class="food-price">₹${item.price}</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span class="qty-display" id="qty-${item.id}">0</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="add-to-cart" onclick="addToCart(${item.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
    
    showPage('menu');
}

// Search & Filter
function searchRestaurants() {
    const query = document.getElementById('home-search').value.toLowerCase();
    const filtered = sampleRestaurants.filter(r => 
        r.name.toLowerCase().includes(query) || 
        r.cuisines.toLowerCase().includes(query)
    );
    renderHomeRestaurants(filtered);
}

function filterByCategory(category) {
    let filtered;
    if (category === 'all') {
        filtered = sampleRestaurants;
    } else {
        filtered = sampleRestaurants.filter(r => r.category === category);
    }
    renderHomeRestaurants(filtered);
}

// Cart Functions
function addToCart(itemId) {
    const item = sampleMenuItems.find(i => i.id === itemId);
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`${item.name} added to cart!`);
}

function updateQuantity(itemId, change) {
    const itemIndex = cart.findIndex(c => c.id === itemId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

function renderCart() {
    const container = document.getElementById('cart-items');
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; font-size: 1.2rem; color: var(--text-secondary);">Your cart is empty 😢</p>';
        document.getElementById('cart-total').classList.add('hidden');
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>₹${item.price} × ${item.quantity}</p>
                <div style="margin-top: 1rem;">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" style="background: var(--danger);">−</button>
                    <span style="margin: 0 1rem; font-weight: 600;">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <div style="font-weight: 700; font-size: 1.2rem;">₹${item.price * item.quantity}</div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total-price').textContent = total;
    document.getElementById('cart-total').classList.remove('hidden');
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showToast('Cart cleared!');
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Cart is empty!');
        return;
    }
    showPage('order-summary');
    renderOrderSummary();
}

function renderOrderSummary() {
    const container = document.getElementById('order-details');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    container.innerHTML = `
        <div style="background: var(--light-card); padding: 2rem; border-radius: 20px; box-shadow: var(--shadow); margin-bottom: 2rem;">
            <h3>Order Summary</h3>
            ${cart.map(item => `
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                    <span>${item.name} × ${item.quantity}</span>
                    <span>₹${item.price * item.quantity}</span>
                </div>
            `).join('')}
            <div style="border-top: 2px solid rgba(255,255,255,0.2); padding-top: 1rem; font-weight: 700; font-size: 1.3rem;">
                Total: ₹${total}
            </div>
        </div>
        <div style="text-align: center;">
            <h4>Select Payment Method</h4>
            <button style="background: #4CAF50; margin: 0.5rem; padding: 1rem 2rem; border: none; border-radius: 12px; color: white; cursor: pointer;">
                <i class="fab fa-google-pay"></i> GPay
            </button>
            <button style="background: #1DA1F2; margin: 0.5rem; padding: 1rem 2rem; border: none; border-radius: 12px; color: white; cursor: pointer;">
                <i class="fab fa-cc-visa"></i> Card
            </button>
        </div>
    `;
}

function processPayment() {
    showToast('Payment successful! Your order is confirmed. 🍕✨');
    orders.push({
        id: Date.now(),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('orders', JSON.stringify(orders));
    clearCart();
    setTimeout(() => showPage('profile'), 2000);
}

// Profile
function renderProfile() {
    const user = currentUser || JSON.parse(localStorage.getItem('currentUser')) || { name: 'Anudeep B', email: 'anudeep@example.com' };
    document.getElementById('profile-name').textContent = user.name;
    document.getElementById('profile-email').textContent = user.email;
    
    const historyContainer = document.getElementById('order-history');
    if (orders.length === 0) {
        historyContainer.innerHTML = '<p>No orders yet. Order something delicious! 🍕</p>';
    } else {
        historyContainer.innerHTML = orders.slice(-3).map(order => `
            <div style="border-bottom: 1px solid #eee; padding-bottom: 1rem; margin-bottom: 1rem;">
                <div style="font-weight: 600;">Order #${order.id}</div>
                <div style="color: var(--text-secondary); font-size: 0.9rem;">${order.timestamp}</div>
                <div>₹${order.total} • ${order.items.length} items</div>
            </div>
        `).join('') + '<a href="#" style="color: #FF6B35;">View all orders →</a>';
    }
}

// Admin Functions
function renderAdmin() {
    // Animate stats
    document.querySelectorAll('.stat-number').forEach(stat => {
        const target = stat.getAttribute('data-value');
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 20);
    });

    document.getElementById('admin-orders').innerHTML = orders.slice(-5).map(order => `
        <div style="padding: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
            Order #${order.id} • ₹${order.total}
        </div>
    `).join('') || '<p>No recent orders</p>';

    // Add food form
    document.getElementById('add-food-form').onsubmit = function(e) {
        e.preventDefault();
        const name = document.getElementById('food-name').value;
        const price = parseInt(document.getElementById('food-price').value);
        showToast(`Added: ${name} for ₹${price}`);
        document.getElementById('food-name').value = '';
        document.getElementById('food-price').value = '';
    };
}

// Theme Toggle
function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyTheme();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    document.querySelector('.theme-toggle i').className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
}

// Toast Notifications
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Chatbot
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('active');
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    const messages = document.getElementById('chat-messages');
    messages.innerHTML += `<div class="message user">${message}</div>`;
    input.value = '';

    setTimeout(() => {
        const responses = [
            "That's a great choice! 🍕",
            "I can help you find restaurants nearby.",
            "Would you like vegetarian or non-veg options?",
            "Our top-rated restaurant is Spice Palace!",
            "Check out our dessert section for sweets! 🍰"
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        messages.innerHTML += `<div class="message bot">${response}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
}

// Voice Search (UI Only)
function startVoiceSearch() {
    showToast('Voice search clicked! 🎤 (Feature coming soon)');
}
