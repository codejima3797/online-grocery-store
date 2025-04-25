import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: "Free Range Eggs",
      price: 3.99,
      unit: "dozen",
      image: "free-range-eggs.jpg",
      category: "Poultry"
    },
    {
      id: 2,
      name: "Whole Wheat Bread",
      price: 1.99,
      unit: "loaf",
      image: "whole-wheat-bread.png",
      category: "Grains"
    },
    {
      id: 3,
      name: "Organic 2% Milk",
      price: 2.59,
      unit: "half gallon",
      image: "2-percent-milk.jpg",
      category: "Dairy"
    },
    {
      id: 4,
      name: "Organic Spinach and Baby Kale Mix",
      price: 2.69,
      unit: "5oz",
      image: "spinach-baby-kale.png",
      category: "Produce"
    },
    {
      id: 5,
      name: "Organic Bananas",
      price: 1.84,
      unit: "bunch",
      image: "bananas.jpg",
      category: "Produce"
    },
    {
      id: 6,
      name: "Organic Creamy Peanut Butter",
      price: 4.55,
      unit: "16oz",
      image: "creamy-peanut-butter.jpg",
      category: "Spreads"
    },
    {
      id: 7,
      name: "Organic Mixed Berries",
      price: 5.99,
      unit: "12oz",
      image: "mixed-berries.webp",
      category: "Produce"
    },
    {
      id: 8,
      name: "Organic Shredded Chicken Breast",
      price: 8.97,
      unit: "16oz",
      image: "shredded-chicken.png",
      category: "Meat"
    },
    {
      id: 9,
      name: "Trail Mix",
      price: 6.05,
      unit: "24oz",
      image: "trail-mix.webp",
      category: "Snacks"
    },
    {
      id: 10,
      name: "Intense Dark Chocolate Bar",
      price: 2.50,
      unit: "3.5oz",
      image: "dark-chocolate-bar.jpeg",
      category: "Candy/Chocolate"
    },
    {
      id: 11,
      name: "Fresh Organic Rainbow Bell Peppers",
      price: 5.95,
      unit: "28oz",
      image: "rainbow-bell-peppers.webp",
      category: "Produce"
    },
    {
      id: 12,
      name: "Vanilla Bean Ice Cream",
      price: 3.99,
      unit: "1 pint",
      image: "vanilla-bean-ice-cream.jpg",
      category: "Dairy"
    },
    {
      id: 13,
      name: "Ella's Farms Organic Rainbow Carrots",
      price: 2.99,
      unit: "32oz",
      image: "rainbow-carrots.avif",
      category: "Produce"
    },
    {
      id: 14,
      name: "Locally Made Hatch Chile Salsa",
      price: 4.23,
      unit: "16oz",
      image: "hatch-chile-salsa.jpg",
      category: "Dips"
    },
    {
      id: 15,
      name: "Annie's Dark Chocolate Milk",
      price: 1.99,
      unit: "12oz",
      image: "dark-chocolate-milk.jpg",
      category: "Dairy"
    },
    {
      id: 16,
      name: "Fresh Mild Guacamole",
      price: 5.99,
      unit: "14oz",
      image: "mild-guacamole.webp",
      category: "Dips"
    },
    {
      id: 17,
      name: "Annie's Organic Shelled Edamame",
      price: 2.29,
      unit: "16oz",
      image: "shelled-edamame.jpg",
      category: "Produce"
    },
    {
      id: 18,
      name: "Roasted Red Pepper Hummus",
      price: 3.95,
      unit: "10oz",
      image: "red-pepper-hummus.webp",
      category: "Dips"
    },
    {
      id: 19,
      name: "Ella's Farms Organic Dried Pineapple Chunks",
      price: 3.39,
      unit: "5.5oz",
      image: "pineapple-chunks.webp",
      category: "Produce"
    },
    {
      id: 20,
      name: "Assorted Seasoning Pack",
      price: 29.99,
      unit: "24 spices",
      image: "assorted-seasoning-pack.webp",
      category: "Spices/Seasonings"
    },
  ],
  loading: false,
  error: null
};

export const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    setPopularItems: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setPopularItems, setLoading, setError } = popularSlice.actions;
export default popularSlice.reducer; 