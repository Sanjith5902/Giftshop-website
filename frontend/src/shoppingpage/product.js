const products = [
  // BIRTHDAY
  {
    id: 1,
    name: "Birthday Gift Box",
    category: "Birthday",
    price: 599,
    rating: 4.5,
    details: "A beautiful birthday gift box filled with carefully selected items, perfect for making birthdays extra special.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 2,
    name: "Birthday Balloon Set",
    category: "Birthday",
    price: 299,
    rating: 4.3,
    details: "Colorful birthday balloon set for decorating parties and creating a fun birthday atmosphere.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 3,
    name: "Birthday Mug",
    category: "Birthday",
    price: 399,
    rating: 4.4,
    details: "A stylish birthday-themed mug that makes a simple and memorable gift for friends and family.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 4,
    name: "Birthday Surprise Hamper",
    category: "Birthday",
    price: 999,
    rating: 4.8,
    details: "A premium birthday surprise hamper containing a selection of delightful gifts for your loved ones.",
    image: "https://dummyimage.com/300"
  },

  // ANNIVERSARY
  {
    id: 5,
    name: "Anniversary Gift Set",
    category: "Anniversary",
    price: 1299,
    rating: 4.7,
    details: "An elegant anniversary gift set designed to celebrate love, togetherness, and special memories.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 6,
    name: "Love Heart Cushion",
    category: "Anniversary",
    price: 649,
    rating: 4.6,
    details: "A soft heart-shaped cushion that adds a romantic touch to your anniversary celebration.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 7,
    name: "Couple Photo Frame",
    category: "Anniversary",
    price: 799,
    rating: 4.5,
    details: "A beautiful photo frame for displaying your favorite couple memory and creating a lasting keepsake.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 8,
    name: "Romantic Candle Set",
    category: "Anniversary",
    price: 699,
    rating: 4.4,
    details: "A decorative candle set that creates a warm and romantic atmosphere for special occasions.",
    image: "https://dummyimage.com/300"
  },

  // WEDDING
  {
    id: 9,
    name: "Wedding Gift Hamper",
    category: "Wedding",
    price: 1499,
    rating: 4.8,
    details: "A premium wedding gift hamper specially designed to celebrate the beginning of a beautiful journey.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 10,
    name: "Wedding Couple Frame",
    category: "Wedding",
    price: 899,
    rating: 4.6,
    details: "An elegant couple photo frame that makes a memorable wedding gift for newly married couples.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 11,
    name: "Wedding Photo Album",
    category: "Wedding",
    price: 999,
    rating: 4.5,
    details: "A stylish photo album for preserving beautiful wedding memories and precious moments.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 12,
    name: "Wedding Gift Box",
    category: "Wedding",
    price: 1399,
    rating: 4.7,
    details: "A beautifully designed wedding gift box suitable for couples, family members, and close friends.",
    image: "https://dummyimage.com/300"
  },

  // PERSONALIZED
  {
    id: 13,
    name: "Personalized Photo Frame",
    category: "Personalized",
    price: 549,
    rating: 4.6,
    details: "A personalized photo frame that lets you turn a favorite memory into a meaningful gift.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 14,
    name: "Personalized Coffee Mug",
    category: "Personalized",
    price: 449,
    rating: 4.5,
    details: "A customizable coffee mug that can be personalized with names, photos, or special messages.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 15,
    name: "Personalized Keychain",
    category: "Personalized",
    price: 249,
    rating: 4.3,
    details: "A small personalized keychain that makes a simple and thoughtful everyday gift.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 16,
    name: "Personalized Gift Box",
    category: "Personalized",
    price: 999,
    rating: 4.8,
    details: "A customizable gift box designed to create a unique and personal gifting experience.",
    image: "https://dummyimage.com/300"
  },

  // HOME & DECOR
  {
    id: 17,
    name: "Scented Candle",
    category: "Home & Decor",
    price: 399,
    rating: 4.5,
    details: "A beautifully scented candle that adds a relaxing fragrance and decorative touch to your home.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 18,
    name: "Decorative Vase",
    category: "Home & Decor",
    price: 749,
    rating: 4.4,
    details: "A stylish decorative vase suitable for flowers, tables, shelves, and modern home interiors.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 19,
    name: "Decorative Lamp",
    category: "Home & Decor",
    price: 899,
    rating: 4.6,
    details: "A decorative lamp that provides a warm and attractive look for bedrooms, living rooms, or desks.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 20,
    name: "Decorative Showpiece",
    category: "Home & Decor",
    price: 849,
    rating: 4.3,
    details: "An elegant showpiece designed to enhance your home decoration and interior appearance.",
    image: "https://dummyimage.com/300"
  },

  // TOYS
  {
    id: 21,
    name: "Teddy Bear",
    category: "Toys",
    price: 699,
    rating: 4.8,
    details: "A soft and cuddly teddy bear that makes a lovely gift for children, friends, and loved ones.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 22,
    name: "Mini Teddy Bear",
    category: "Toys",
    price: 449,
    rating: 4.5,
    details: "A cute mini teddy bear that is easy to carry and perfect as a small surprise gift.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 23,
    name: "Soft Plush Toy",
    category: "Toys",
    price: 599,
    rating: 4.6,
    details: "A soft plush toy with a cute design, perfect for gifting and everyday cuddling.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 24,
    name: "Cute Panda Toy",
    category: "Toys",
    price: 799,
    rating: 4.7,
    details: "A cute panda plush toy with a soft design that makes a fun and adorable gift.",
    image: "https://dummyimage.com/300"
  },

  // CHOCOLATES
  {
    id: 25,
    name: "Chocolate Box",
    category: "Chocolates",
    price: 599,
    rating: 4.6,
    details: "A delicious assortment of chocolates packed beautifully for birthdays, celebrations, and special occasions.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 26,
    name: "Dark Chocolate Box",
    category: "Chocolates",
    price: 699,
    rating: 4.5,
    details: "A premium dark chocolate collection for chocolate lovers who enjoy a rich and intense flavor.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 27,
    name: "Chocolate Basket",
    category: "Chocolates",
    price: 1099,
    rating: 4.7,
    details: "A beautifully arranged chocolate basket that is perfect for celebrations and thoughtful gifting.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 28,
    name: "Luxury Chocolate Box",
    category: "Chocolates",
    price: 1299,
    rating: 4.8,
    details: "A luxurious chocolate box with a premium presentation, ideal for special occasions and celebrations.",
    image: "https://dummyimage.com/300"
  },

  // FLOWERS
  {
    id: 29,
    name: "Rose Bouquet",
    category: "Flowers",
    price: 899,
    rating: 4.7,
    details: "A beautiful rose bouquet suitable for birthdays, anniversaries, romantic occasions, and celebrations.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 30,
    name: "Flower Bouquet",
    category: "Flowers",
    price: 799,
    rating: 4.5,
    details: "A colorful flower bouquet arranged beautifully to brighten someone's special day.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 31,
    name: "Premium Rose Bouquet",
    category: "Flowers",
    price: 1199,
    rating: 4.8,
    details: "A premium rose bouquet designed for romantic celebrations, anniversaries, and memorable occasions.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 32,
    name: "Mini Flower Basket",
    category: "Flowers",
    price: 599,
    rating: 4.4,
    details: "A charming mini flower basket that makes a simple and elegant gift for any occasion.",
    image: "https://dummyimage.com/300"
  },

  // ACCESSORIES
  {
    id: 33,
    name: "Cute Keychain",
    category: "Accessories",
    price: 199,
    rating: 4.3,
    details: "A cute and lightweight keychain that can be used as a small gift or everyday accessory.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 34,
    name: "Friendship Bracelet",
    category: "Accessories",
    price: 299,
    rating: 4.5,
    details: "A stylish friendship bracelet that makes a meaningful gift for a close friend.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 35,
    name: "Cute Bracelet",
    category: "Accessories",
    price: 349,
    rating: 4.4,
    details: "A fashionable bracelet suitable for everyday wear and casual gifting.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 36,
    name: "Personalized Wallet",
    category: "Accessories",
    price: 799,
    rating: 4.6,
    details: "A personalized wallet designed for everyday use and customized gifting.",
    image: "https://dummyimage.com/300"
  },

  // GIFT HAMPERS
  {
    id: 37,
    name: "Premium Gift Hamper",
    category: "Gift Hampers",
    price: 1599,
    rating: 4.9,
    details: "A premium gift hamper containing a carefully selected collection of gifts for special celebrations.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 38,
    name: "Luxury Gift Basket",
    category: "Gift Hampers",
    price: 1399,
    rating: 4.8,
    details: "A luxury gift basket with an elegant presentation, perfect for birthdays and celebrations.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 39,
    name: "Couple Gift Hamper",
    category: "Gift Hampers",
    price: 1299,
    rating: 4.7,
    details: "A romantic couple gift hamper designed for anniversaries, weddings, and special moments.",
    image: "https://dummyimage.com/300"
  },
  {
    id: 40,
    name: "Surprise Gift Hamper",
    category: "Gift Hampers",
    price: 1099,
    rating: 4.6,
    details: "A surprise gift hamper filled with carefully selected items to make any celebration memorable.",
    image: "https://dummyimage.com/300"
  }
];

export default products;