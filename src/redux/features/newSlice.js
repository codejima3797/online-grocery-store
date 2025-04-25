import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      name: "Organic Avocado Oil",
      price: 8.99,
      unit: "bottle",
      image: "avocado-oil.PNG",
      category: "Oils"
    },
    {
      id: 2,
      name: "Matcha Green Tea Powder",
      price: 12.99,
      unit: "bag",
      image: "matcha-green-tea.PNG",
      category: "Beverages"
    },
    {
      id: 3,
      name: "Vegan Cheddar Cheese Slices",
      price: 4.99,
      unit: "package",
      image: "vegan-cheddar-cheese.PNG",
      category: "Vegan Alternatives"
    },
    {
      id: 4,
      name: "Plant-Based Protein Powder",
      price: 24.99,
      unit: "container",
      image: "plant-protein-powder.PNG",
      category: "Supplements"
    },
    {
      id: 5,
      name: "Organic Turmeric Root",
      price: 3.49,
      unit: "root",
      image: "turmeric-root.PNG",
      category: "Produce"
    },
    {
      id: 6,
      name: "Pecan Milk",
      price: 3.99,
      unit: "bottle",
      image: "pecan-milk.PNG",
      category: "Vegan Alternatives"
    },
    {
      id: 7,
      name: "Cold-Pressed Pineapple Juice",
      price: 5.99,
      unit: "bottle",
      image: "pressed-pineapple-juice.PNG",
      category: "Beverages"
    },
    {
      id: 8,
      name: "Raspberry Coco Milk Yogurt",
      price: 4.99,
      unit: "cup",
      image: "coconut-milk-yogurt.PNG",
      category: "Vegan Alternatives"
    },
    {
      id: 9,
      name: "Durian",
      price: 4.49,
      unit: "durian",
      image: "durian.PNG",
      category: "Produce"
    },
    {
      id: 10,
      name: "Plant-Based Burger Patties",
      price: 6.99,
      unit: "package",
      image: "plant-based-burgers.PNG",
      category: "Vegan Alternatives"
    }
  ],
  loading: false,
  error: null
};

export const newSlice = createSlice({
  name: 'new',
  initialState,
  reducers: {
    setNewItems: (state, action) => {
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

export const { setNewItems, setLoading, setError } = newSlice.actions;
export default newSlice.reducer; 