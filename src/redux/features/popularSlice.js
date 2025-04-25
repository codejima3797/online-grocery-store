import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: "Free Range Eggs",
      price: 3.99,
      unit: "dozen",
      image: "free-range-eggs.PNG",
      category: "Poultry"
    },
    {
      id: 2,
      name: "Whole Wheat Bread",
      price: 1.99,
      unit: "loaf",
      image: "whole-wheat-bread.PNG",
      category: "Grains"
    },
    {
      id: 3,
      name: "2% Milk",
      price: 2.59,
      unit: "half gallon",
      image: "2-percent-milk.PNG",
      category: "Dairy"
    },
    {
      id: 4,
      name: "Spinach and Baby Kale Mix",
      price: 2.69,
      unit: "bag",
      image: "spinach-baby-kale.PNG",
      category: "Produce"
    },
    {
      id: 5,
      name: "Bananas",
      price: 1.84,
      unit: "bunch",
      image: "bananas.PNG",
      category: "Produce"
    },
    {
      id: 6,
      name: "Creamy Peanut Butter",
      price: 4.55,
      unit: "jar",
      image: "creamy-peanut-butter.PNG",
      category: "Spreads"
    },
    {
      id: 7,
      name: "Mixed Berries",
      price: 5.99,
      unit: "container",
      image: "mixed-berries.PNG",
      category: "Produce"
    },
    {
      id: 8,
      name: "Shredded Chicken Breast",
      price: 4.97,
      unit: "lb",
      image: "shredded-chicken.PNG",
      category: "Meat"
    },
    {
      id: 9,
      name: "Trail Mix",
      price: 3.05,
      unit: "bag",
      image: "trail-mix.PNG",
      category: "Snacks"
    },
    {
      id: 10,
      name: "60% Dark Chocolate Bar",
      price: 2.51,
      unit: "bar",
      image: "dark-chocolate-bar.PNG",
      category: "Candy/Chocolate"
    },
    {
      id: 11,
      name: "Fresh Rainbow Bell Peppers",
      price: 5.95,
      unit: "bag",
      image: "rainbow-bell-peppers.PNG",
      category: "Produce"
    },
    {
      id: 12,
      name: "Vanilla Bean Ice Cream",
      price: 3.99,
      unit: "pint",
      image: "vanilla-bean-ice-cream.PNG",
      category: "Dairy"
    },
    {
      id: 13,
      name: "Ella's Rainbow Carrots",
      price: 2.99,
      unit: "bunch",
      image: "rainbow-carrots.PNG",
      category: "Produce"
    },
    {
      id: 14,
      name: "Local Hatch Chile Salsa",
      price: 4.23,
      unit: "jar",
      image: "hatch-chile-salsa.PNG",
      category: "Dips"
    },
    {
      id: 15,
      name: "Annie's Dark Chocolate Milk",
      price: 1.99,
      unit: "bottle",
      image: "dark-chocolate-milk.PNG",
      category: "Dairy"
    },
    {
      id: 16,
      name: "Fresh Mild Guacamole",
      price: 5.99,
      unit: "container",
      image: "mild-guacamole.PNG",
      category: "Dips"
    },
    {
      id: 17,
      name: "Annie's Shelled Edamame",
      price: 2.29,
      unit: "bag",
      image: "shelled-edamame.PNG",
      category: "Produce"
    },
    {
      id: 18,
      name: "Roasted Red Pepper Hummus",
      price: 3.95,
      unit: "container",
      image: "red-pepper-hummus.PNG",
      category: "Dips"
    },
    {
      id: 19,
      name: "Ella's Dried Pineapple",
      price: 3.39,
      unit: "bag",
      image: "pineapple-chunks.PNG",
      category: "Produce"
    },
    {
      id: 20,
      name: "Assorted Seasoning Pack",
      price: 29.99,
      unit: "set",
      image: "assorted-seasoning-pack.PNG",
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