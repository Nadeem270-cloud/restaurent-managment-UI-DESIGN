// Sample Data - Restaurants
const sampleRestaurants = [
    {
        id: 1,
        name: "EATMORE MULTICUISUNE",
        rating: 4.8,
        category: "non-veg",
        image : "https://images.unsplash.com/photo-1696950170773-db0bf33ca0ca?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        cuisines: "Indian, Biryani, Kebabs",
        time: "25 min",
        price: "$$$"
    },
    {
        id: 2,
        name: "PISTA HOUSE",
        rating: 4.6,
        category: "veg",
        image: "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
        cuisines: "Healthy, Salads, Wraps",
        time: "20 min",
        price: "$$"
    },
    {
        id: 3,
        name: "Burger King",
        rating: 4.4,
        category: "fast-food",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
        cuisines: "Burgers, Fries, Shakes",
        time: "15 min",
        price: "$"
    },
    {
        id: 4,
        name: "CREAME STONE",
        rating: 4.9,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
        cuisines: "Cakes, Pastries, Ice Cream",
        time: "30 min",
        price: "$$"
    },
    {
        id: 5,
        name: "Pizza HUT",
        rating: 4.7,
        category: "fast-food",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
        cuisines: "Pizza, Pasta, Garlic Bread",
        time: "35 min",
        price: "$$"
    }
];

// Sample Menu Items - 21 Food Items
const sampleMenuItems = [
    { id: 1, name: "Chicken Biryani", price: 250, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D", category: "non-veg", isVeg: false },
    { id: 2, name: "Paneer Tikka", price: 220, image: "https://media.istockphoto.com/id/1085155140/photo/malai-or-achari-paneer-in-a-gravy-made-using-red-gravy-and-green-capsicum-served-in-a-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=uuOixMwBH2i75twcF84mU6eSLIghoIXx9jaqoOlTwSc=", category: "veg", isVeg: true },
    { id: 3, name: "Cheese Burger", price: 180, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300", category: "fast-food", isVeg: true },
    { id: 4, name: "Chocolate Lava Cake", price: 120, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300", category: "dessert", isVeg: true },
    { id: 5, name: "Margherita Pizza", price: 300, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300", category: "fast-food", isVeg: true },
    { id: 6, name: "Chicken 65", price: 200, image: "https://media.istockphoto.com/id/519456813/photo/chicken-tikka-1.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pn0J1zY8ME9-Tms0Vy4dTmtc2RaLzzzcttpN8KjCabQ=", category: "non-veg", isVeg: false },
    { id: 7, name: "Veg Manchurian", price: 180, image: "https://media.istockphoto.com/id/1072951288/photo/indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=GeqSiSUYGqzSTTUVI3b4iLTgkuD2jDLeVwzm0PvkTt0=", category: "veg", isVeg: true },
    { id: 8, name: "Peri Peri Fries", price: 150, image: "https://media.istockphoto.com/id/2207015456/photo/close-up-image-of-portion-of-peri-peri-french-fry-chips-on-white-plate-served-with-pot-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=xSXCo5B6MMXFBQNgVmSdwYxpraIN4BBAx7C5F-1XrOw=", category: "fast-food", isVeg: true },
    { id: 9, name: "Tiramisu", price: 160, image: "https://images.unsplash.com/photo-1702744998351-090b3ee4e976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRpcmFtaXN1fGVufDB8fDB8fHww", category: "dessert", isVeg: true },
    { id: 10, name: "Butter Chicken", price: 280, image: "https://images.unsplash.com/photo-1728910107534-e04e261768ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D", category: "non-veg", isVeg: false },
    { id: 11, name: "Dal Makhani", price: 210, image: "https://media.istockphoto.com/id/170052080/photo/assortments-of-dishes.webp?a=1&b=1&s=612x612&w=0&k=20&c=c5kQZz6RdcPC64wdDBlvrs8-FGhb1WDCX9nj9Ut6mpk=", category: "veg", isVeg: true },
    { id: 12, name: "Crispy Chicken Wings", price: 240, image: "https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3Jpc3B5JTIwY2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fHww", category: "non-veg", isVeg: false },
    { id: 13, name: "Quinoa Salad", price: 190, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300", category: "veg", isVeg: true },
    { id: 14, name: "Oreo Milkshake", price: 130, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JlbyUyMHNoYWtlfGVufDB8fDB8fHww", category: "dessert", isVeg: true },
    { id: 15, name: "Veg Pizza", price: 320, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300", category: "fast-food", isVeg: true },
    { id: 16, name: "Mutton Biryani", price: 320, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXV0dG9uJTIwYmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D", category: "non-veg", isVeg: false },
    { id: 17, name: "Aloo Paratha", price: 140, image: "https://media.istockphoto.com/id/1279134709/photo/image-of-metal-tray-with-aloo-paratha-pile-topped-with-red-onion-rings-and-sprinkle-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=BqI3olbZz2Ljg3LaEiLWYq2vQ8wfORCYdPrwKmJ2WbU=", category: "veg", isVeg: true },
    { id: 18, name: "French Fries", price: 110, image: "https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D", category: "fast-food", isVeg: true },
    { id: 19, name: "Ice Cream Sundae", price: 150, image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW0lMjBzdW5kYWV8ZW58MHx8MHx8fDA%3D", category: "dessert", isVeg: true },
    { id: 20, name: "Fish Fry", price: 260, image: "https://images.unsplash.com/photo-1656389863790-f217b89cc626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZpc2glMjBmcnl8ZW58MHx8MHx8fDA%3D", category: "non-veg", isVeg: false },
    { id: 21, name: "Pasta Alfredo", price: 280, image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGElMjBhbGZyZWRvfGVufDB8fDB8fHww", category: "veg", isVeg: true }
];
