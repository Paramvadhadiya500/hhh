export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  modelUrl?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

// CDN Base URL - MUCH FASTER than GitHub raw
const CDN_BASE = "https://cdn.jsdelivr.net/gh/Paramvadhadiya500/hhh@main/public/models";

export const menuCategories: MenuCategory[] = [
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    items: [
      { id: "gb1", name: "Classic Garlic Bread", description: "Freshly baked bread with garlic butter and herbs", price: 8, image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400", modelUrl: `${CDN_BASE}/compressed-garlic-bread.glb` },
      { id: "gb2", name: "Cheesy Garlic Bread", description: "Loaded with mozzarella and parmesan cheese", price: 10, image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=400", modelUrl: `${CDN_BASE}/compressed-garlic-bread.glb` },
    ]
  },
  {
    id: "sandwich",
    name: "Sandwich",
    items: [
      { id: "sw1", name: "Club Sandwich", description: "Triple-decker with chicken, bacon, lettuce, and tomato", price: 14, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400", modelUrl: `${CDN_BASE}/compressed-sandwich.glb` },
      { id: "sw2", name: "Grilled Cheese", description: "Classic comfort with aged cheddar on sourdough", price: 10, image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400", modelUrl: `${CDN_BASE}/compressed-sandwich.glb` },
      { id: "sw3", name: "BLT Sandwich", description: "Crispy bacon, fresh lettuce, and ripe tomatoes", price: 12, image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400", modelUrl: `${CDN_BASE}/compressed-sandwich.glb` },
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      { id: "pa1", name: "Spaghetti Carbonara", description: "Creamy egg sauce with pancetta and parmesan", price: 18, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400", modelUrl: `${CDN_BASE}/compressed-pasta.glb` },
      { id: "pa2", name: "Penne Arrabbiata", description: "Spicy tomato sauce with garlic and chili", price: 16, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400", modelUrl: `${CDN_BASE}/compressed-pasta.glb` },
      { id: "pa3", name: "Fettuccine Alfredo", description: "Rich and creamy parmesan sauce", price: 17, image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400", modelUrl: `${CDN_BASE}/compressed-pasta.glb` },
    ]
  },
  {
    id: "mini-plates",
    name: "Mini Plates",
    items: [
      { id: "mp1", name: "Stuffed Mushrooms", description: "Cream cheese and herb stuffed mushroom caps", price: 12, image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=400", modelUrl: `${CDN_BASE}/compressed-mini-plate.glb` },
      { id: "mp2", name: "Meatballs", description: "Homemade meatballs in marinara sauce", price: 14, image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400", modelUrl: `${CDN_BASE}/compressed-mini-plate.glb` },
    ]
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      { id: "sa1", name: "Caesar Salad", description: "Crisp romaine, parmesan, croutons, and caesar dressing", price: 14, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400", modelUrl: `${CDN_BASE}/compressed-salad.glb` },
      { id: "sa2", name: "Greek Salad", description: "Fresh cucumbers, tomatoes, olives, and feta cheese", price: 13, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400", modelUrl: `${CDN_BASE}/compressed-salad.glb` },
      { id: "sa3", name: "Garden Salad", description: "Mixed greens with seasonal vegetables", price: 11, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400", modelUrl: `${CDN_BASE}/compressed-salad.glb` },
    ]
  },
  {
    id: "fries",
    name: "Fries",
    items: [
      { id: "fr1", name: "Classic Fries", description: "Crispy golden potato fries with sea salt", price: 8, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400", modelUrl: `${CDN_BASE}/compressed-fries.glb` },
      { id: "fr2", name: "Loaded Fries", description: "Topped with cheese, bacon, and sour cream", price: 14, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400", modelUrl: `${CDN_BASE}/compressed-fries.glb` },
      { id: "fr3", name: "Sweet Potato Fries", description: "Crispy sweet potato with chipotle mayo", price: 10, image: "https://images.unsplash.com/photo-1529589510304-b7e994a92f60?w=400", modelUrl: `${CDN_BASE}/compressed-fries.glb` },
    ]
  },
  {
    id: "tacos",
    name: "Tacos",
    items: [
      { id: "ta1", name: "Chicken Tacos", description: "Grilled chicken with fresh salsa and guacamole", price: 16, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400", modelUrl: `${CDN_BASE}/compressed-tacos.glb` },
      { id: "ta2", name: "Fish Tacos", description: "Crispy battered fish with cabbage slaw", price: 18, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400", modelUrl: `${CDN_BASE}/compressed-tacos.glb` },
      { id: "ta3", name: "Beef Tacos", description: "Seasoned ground beef with all the fixings", price: 15, image: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=400", modelUrl: `${CDN_BASE}/compressed-tacos.glb` },
    ]
  },
  {
    id: "small-plates",
    name: "Small Plates",
    items: [
      { id: "sp1", name: "Spring Rolls", description: "Crispy vegetable spring rolls with sweet chili", price: 10, image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400", modelUrl: `${CDN_BASE}/compressed-small-plate.glb` },
      { id: "sp2", name: "Chicken Wings", description: "Crispy wings with your choice of sauce", price: 14, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400", modelUrl: `${CDN_BASE}/compressed-small-plate.glb` },
    ]
  },
  {
    id: "bruschetta",
    name: "Bruschetta",
    items: [
      { id: "br1", name: "Classic Bruschetta", description: "Fresh tomatoes, basil, and garlic on toasted bread", price: 10, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400", modelUrl: `${CDN_BASE}/compressed-Bruschetta.glb` },
      { id: "br2", name: "Mushroom Bruschetta", description: "Sautéed wild mushrooms with truffle oil", price: 12, image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?w=400", modelUrl: `${CDN_BASE}/compressed-Bruschetta.glb` },
    ]
  },
  {
    id: "quesadilla",
    name: "Quesadilla",
    items: [
      { id: "qu1", name: "Cheese Quesadilla", description: "Melted blend of Mexican cheeses", price: 10, image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=400", modelUrl: `${CDN_BASE}/compressed-Quesadilla.glb` },
      { id: "qu2", name: "Chicken Quesadilla", description: "Grilled chicken with peppers and onions", price: 14, image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400", modelUrl: `${CDN_BASE}/compressed-Quesadilla.glb` },
    ]
  },
  {
    id: "rice",
    name: "Rice",
    items: [
      { id: "ri1", name: "Fried Rice", description: "Wok-fried rice with vegetables and egg", price: 12, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", modelUrl: `${CDN_BASE}/compressed-rice.glb` },
      { id: "ri2", name: "Mexican Rice", description: "Seasoned rice with tomatoes and spices", price: 8, image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400", modelUrl: `${CDN_BASE}/compressed-rice.glb` },
    ]
  },
  {
    id: "main-course",
    name: "Main Course",
    items: [
      { id: "mc1", name: "Grilled Salmon", description: "Atlantic salmon with lemon herb butter", price: 28, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400", modelUrl: `${CDN_BASE}/compressed-main-course.glb` },
      { id: "mc2", name: "Ribeye Steak", description: "12oz prime ribeye with garlic butter", price: 38, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400", modelUrl: `${CDN_BASE}/compressed-main-course.glb` },
      { id: "mc3", name: "Chicken Parmesan", description: "Breaded chicken with marinara and mozzarella", price: 22, image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400", modelUrl: `${CDN_BASE}/compressed-main-course.glb` },
    ]
  },
  {
    id: "espresso",
    name: "Espresso",
    items: [
      { id: "es1", name: "Single Espresso", description: "Rich and bold single shot", price: 4, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400", modelUrl: `${CDN_BASE}/compressed-expresso.glb` },
      { id: "es2", name: "Double Espresso", description: "Extra strong double shot", price: 5, image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400", modelUrl: `${CDN_BASE}/compressed-expresso.glb` },
    ]
  },
  {
    id: "ice-tea",
    name: "Ice Tea",
    items: [
      { id: "it1", name: "Classic Iced Tea", description: "Refreshing black tea over ice", price: 5, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", modelUrl: `${CDN_BASE}/compressed-ice-tea.glb` },
      { id: "it2", name: "Peach Iced Tea", description: "Sweet peach infused iced tea", price: 6, image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400", modelUrl: `${CDN_BASE}/compressed-ice-tea.glb` },
    ]
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    items: [
      { id: "cc1", name: "Iced Latte", description: "Smooth espresso with cold milk", price: 6, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400", modelUrl: `${CDN_BASE}/compressed-coldcoffee.glb` },
      { id: "cc2", name: "Cold Brew", description: "Slow-steeped for 24 hours", price: 6, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400", modelUrl: `${CDN_BASE}/compressed-coldcoffee.glb` },
    ]
  },
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    items: [
      { id: "hc1", name: "Cappuccino", description: "Espresso with steamed milk foam", price: 5, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400", modelUrl: `${CDN_BASE}/compressed-hot-coffee.glb` },
      { id: "hc2", name: "Latte", description: "Smooth espresso with steamed milk", price: 5, image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400", modelUrl: `${CDN_BASE}/compressed-hot-coffee.glb` },
    ]
  },
  {
    id: "mojito",
    name: "Mojito",
    items: [
      { id: "mo1", name: "Classic Mojito", description: "Fresh mint, lime, and rum", price: 12, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400", modelUrl: `${CDN_BASE}/compressed-mojito.glb` },
      { id: "mo2", name: "Virgin Mojito", description: "All the freshness, no alcohol", price: 8, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400", modelUrl: `${CDN_BASE}/compressed-mojito.glb` },
    ]
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    items: [
      { id: "hch1", name: "Classic Hot Chocolate", description: "Rich and creamy chocolate drink", price: 6, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400", modelUrl: `${CDN_BASE}/compressed-hot-chochlate.glb` },
      { id: "hch2", name: "Belgian Hot Chocolate", description: "Premium Belgian chocolate blend", price: 8, image: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400", modelUrl: `${CDN_BASE}/compressed-hot-chochlate.glb` },
    ]
  },
  {
    id: "croissants",
    name: "Croissants",
    items: [
      { id: "cr1", name: "Butter Croissant", description: "Flaky French butter croissant", price: 5, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400", modelUrl: `${CDN_BASE}/compressed-croson.glb` },
      { id: "cr2", name: "Chocolate Croissant", description: "Filled with rich dark chocolate", price: 6, image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400", modelUrl: `${CDN_BASE}/compressed-croson.glb` },
      { id: "cr3", name: "Almond Croissant", description: "Topped with almond cream and flakes", price: 7, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400", modelUrl: `${CDN_BASE}/compressed-croson.glb` },
    ]
  },
  {
    id: "mocktails",
    name: "Mocktails",
    items: [
      { id: "mt1", name: "Sunrise Delight", description: "Orange, grenadine, and pineapple blend", price: 8, image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?w=400", modelUrl: `${CDN_BASE}/compressed-moctel.glb` },
      { id: "mt2", name: "Berry Bliss", description: "Mixed berries with sparkling water", price: 9, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400", modelUrl: `${CDN_BASE}/compressed-moctel.glb` },
    ]
  },
  {
    id: "shake",
    name: "Shake",
    items: [
      { id: "sh1", name: "Chocolate Shake", description: "Thick and creamy chocolate milkshake", price: 8, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400", modelUrl: `${CDN_BASE}/compressed-shack.glb` },
      { id: "sh2", name: "Vanilla Shake", description: "Classic vanilla bean milkshake", price: 8, image: "https://images.unsplash.com/photo-1568901839119-631418a3910d?w=400", modelUrl: `${CDN_BASE}/compressed-shack.glb` },
      { id: "sh3", name: "Strawberry Shake", description: "Fresh strawberry milkshake", price: 8, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400", modelUrl: `${CDN_BASE}/compressed-shack.glb` },
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { id: "de1", name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: 10, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400", modelUrl: `${CDN_BASE}/compressed-desert.glb` },
      { id: "de2", name: "Chocolate Lava Cake", description: "Warm cake with molten chocolate center", price: 12, image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400", modelUrl: `${CDN_BASE}/compressed-desert.glb` },
      { id: "de3", name: "Cheesecake", description: "New York style creamy cheesecake", price: 10, image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400", modelUrl: `${CDN_BASE}/compressed-desert.glb` },
    ]
  },
];