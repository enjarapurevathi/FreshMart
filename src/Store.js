import { configureStore, createSlice, current } from '@reduxjs/toolkit';


const productSlice = createSlice({
  name: 'products',
  initialState: {
    Veg: [
      { id: 1, name: 'Tomato', price: 20, image: '/images/tomatos.jpg' },
      { id: 2, name: 'Potato', price: 50, image: '/images/potato.jpg' },
      { id: 3, name: 'Carrot', price: 25, image: '/images/carrot.jpg' },
      { id: 4, name: 'Spinach', price: 100, image: '/images/spinach.jpg' },
      { id: 5, name: 'Cabbage', price: 52, image: '/images/cabbage.jpg' },
      { id: 6, name: 'Onion', price: 22, image: '/images/onion.jpg' },
      { id: 7, name: 'Capsicum', price: 200, image: '/images/capsicum.jpg' },
      { id: 8, name: 'Broccoli', price: 35, image: '/images/broccoli.jpg' },
      { id: 9, name: 'Cauliflower', price: 102, image: '/images/cauliflower.jpg' },
      { id: 10, name: 'Beans', price: 240, image: '/images/beans.jpg' },
       { id: 11, name: 'Greenpeas', price: 24, image: '/images/greenpeas.jpg' },
       { id: 12, name: 'MungBeans', price: 100, image: '/images/mungbeans.jpg' },
       { id: 13, name: 'RedBeans', price: 45, image: '/images/redbeans.jpg' },
       { id: 14, name: 'Dholedal', price: 80, image: '/images/dholedal.jpg' },
       { id: 15, name: 'Cucumber', price: 24, image: '/images/cucumber.jpg' },
    ],
    Nonveg: [
      { id: 11, name: 'ChickenCurry', price: 180, image: '/images/chickencurry.jpg',rating:5  },
      { id: 12, name: 'MuttonCurry', price: 550, image: '/images/muttoncurry.jpg' ,rating:5 },
      { id: 13, name: 'FishCurry', price: 300, image: '/images/fishcurry.jpg',rating:3.5 },
      { id: 14, name: 'PrawnsCurry', price: 400, image: '/images/prawnscurry.jpg',rating:5  },
      { id: 15, name: 'CrabCurry', price: 350, image: '/images/crabcurry.jpg' ,rating:5 },
      { id: 16, name: 'TurkeyCurry', price: 450, image: '/images/turkychicken.jpg',rating:4.2  },
      { id: 17, name: 'LambCurry', price: 500, image: '/images/lambcurry2.jpg' ,rating:5 },
      { id: 18, name: 'BeefCurry', price: 480, image: '/images/beefcurry.jpg',rating:4  },
      { id: 19, name: 'EggsCurry', price: 60, image: '/images/eggcurry.jpg' ,rating:5 },
      { id: 20, name: 'Chickenwings', price: 60, image: '/images/chickenwings.jpg',rating:5  },
      { id: 21, name: 'ChickenAngara', price: 60, image: '/images/chickenangara.jpg',rating:5  },
      { id: 22, name: 'MuttonShankcurry', price: 60, image: '/images/muttonshank.jpg',rating:4.4 },
      { id: 23, name: 'Tandoori', price: 60, image: '/images/Tandoori.jpg' ,rating:5 },
      { id: 24, name: 'RoastedChickenthigh', price: 60, image: '/images/chickenthigh.jpg',rating:5  },
      { id: 25, name: 'Chickenlolipop', price: 60, image: '/images/chickenlolipop.jpg' ,rating:4 },


    ],
   milkProducts: [
  { id: 1, name: 'Whole Milk', price: 60, description: 'Rich and creamy milk with full fat content, ideal for coffee and cereal.', image: '/images/wholemilk.jpg' },
  { id: 2, name: 'Skim Milk', price: 50, description: 'Fat-free milk, perfect for those watching their calorie intake.', image: '/images/skimmilk.jpg' },
  { id: 3, name: 'Almond Milk', price: 90, description: 'Lactose-free plant-based milk with a light, nutty flavor.', image: '/images/almondmilk.jpg' },
  { id: 4, name: 'Soy Milk', price: 70, description: 'Protein-rich milk alternative made from soybeans.', image: '/images/soy-milk.jpg' },
  { id: 5, name: 'Amul Butter', price: 55, description: 'Creamy, salted butter from Amul, perfect for spreading and cooking.', image: '/images/amulbutter.jpg' },
  { id: 6, name: 'Amul Cheese', price: 80, description: 'Processed cheese cubes from Amul, ideal for sandwiches and snacks.', image: '/images/amulcheese.jpg' },
  { id: 7, name: 'Amul Paneer', price: 85, description: 'Fresh, soft paneer perfect for Indian curries and tikkas.', image: '/images/amulpaneer.jpg' },
  { id: 8, name: 'Heritage Milk', price: 58, description: 'Premium-quality pasteurized milk from Heritage, rich in taste and nutrition.', image: '/images/heritagemilk.jpg' },
  { id: 9, name: 'Heritage Curd', price: 35, description: 'Thick and creamy curd made from fresh Heritage milk.', image: '/images/heritagecurd.jpg' },
  { id: 10, name: 'MilkyMist', price: 60, description: 'High-quality dairy product offering smooth and pure milk.', image: '/images/milkymist.jpg' },
  { id: 11, name: 'Pinar Yogurt', price: 50, description: 'Turkish-style creamy yogurt rich in probiotics and flavor.', image: '/images/pinaryogurt.jpg' },
  { id: 12, name: 'Dahi', price: 30, description: 'Traditional Indian curd, smooth and naturally fermented.', image: '/images/dahi.jpg' },
  { id: 13, name: 'Natural Paneer', price: 90, description: 'Fresh, organic paneer made without preservatives or additives.', image: '/images/paneer.jpg' },
  { id: 14, name: 'Malai Paneer', price: 95, description: 'Extra creamy and soft paneer ideal for rich gravies.', image: '/images/malaipaneer.jpg' },
  { id: 15, name: 'Cheese', price: 75, description: 'Classic dairy cheese with smooth texture and savory flavor.', image: '/images/cheese.jpg' },
],

  chocolateItems: [
  { id: 101, name: 'KitKat Chocolate', image: '/images/kitkat.jpg', price: 30, description: 'Crispy wafer fingers coated with smooth milk chocolate.',rating:4 },
  { id: 102, name: 'Dairy Milk Chocolate', image: '/images/dairymilk.jpg', price: 40, description: 'Rich and creamy milk chocolate from Cadbury.',rating:5 },
  { id: 103, name: 'Perk Chocolate', image: '/images/perk.jpg', price: 10, description: 'Light wafer layers covered in delicious chocolate.' ,rating:3},
  { id: 104, name: 'Toblerone Chocolate', image: '/images/Tonlerone.jpg', price: 120, description: 'Triangular Swiss chocolate with honey and almond nougat.',rating:4 },
  { id: 105, name: 'Crispello Chocolate', image: '/images/crispello.jpg', price: 35, description: 'Light crispy shells with a creamy chocolate center.' ,rating:5},
  { id: 106, name: 'Fuse Chocolate', image: '/images/fuse.jpg', price: 35, description: 'A mix of crunchy nuts and caramel covered in chocolate.' ,rating:4},
  { id: 107, name: 'Granola Dark Chocolate', image: '/images/granoladark.jpg', price: 90, description: 'Dark chocolate blended with crunchy granola for a healthy snack.',rating:4 },
  { id: 108, name: 'Milkybar Chocolate', image: '/images/milkybar.jpg', price: 20, description: 'Smooth and creamy white chocolate loved by kids.' ,rating:3},
  { id: 109, name: 'Nutties Chocolate', image: '/images/nutties.jpg', price: 50, description: 'Chocolate-coated crunchy nuts for a rich treat.',rating:5 },
  { id: 110, name: 'Snickers Chocolate', image: '/images/snikers.jpg', price: 45, description: 'Chocolate bar filled with nougat, caramel, and peanuts.',rating:5 },
  { id: 111, name: '5 Star Chocolate', image: '/images/5star.jpg', price: 25, description: 'Chewy caramel and nougat center wrapped in chocolate.',rating:3 },
  { id: 112, name: 'Munch Chocolate', image: '/images/munch.jpg', price: 10, description: 'Crispy wafer coated with a chocolate layer, perfect for quick bites.',rating:5 },
  { id: 113, name: 'Bournville Dark Chocolate', image: '/images/bournville.jpg', price: 100, description: 'Premium dark chocolate with a rich, intense flavor.',rating:5 },
  { id: 114, name: 'Ferrero Rocher', image: '/images/ferrero.jpg', price: 300, description: 'Luxury hazelnut chocolates in a crisp shell and gold wrapping.',rating:4 }
],

  },
  reducers: {},
});
const savedcart=localStorage.getItem("cart");
const localStoragecart=savedcart?JSON.parse(savedcart):[]


const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isAuthenticated: false,
    currentUser: null,
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, inputData) => {
      
      const foundUser = state.users.find(
        user => user.username ===inputData.payload.username && user.password ===inputData.payload.password
      );
      if (foundUser) {
        state.currentUser = foundUser;
        state.isAuthenticated = true;
      }
      else{
        alert("Invalid Credentials");
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    
  },
});



const cartSlice = createSlice({
  name: 'cart',
  initialState: localStoragecart,
  reducers: {
    AddToCart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.push({ ...action.payload, quantity: 1 }); 
      }
    },
    RemoveFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id); 
    },
    ClearCart: () => [],
    IncrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1; 
      }
    },
    DecrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1; 
      }
    }
  },
});
   const orderSlice=createSlice({
      name:'Orders',
      initialState:[],
      reducers:{
        orderDetails:(state,action)=>{
          state.push(action.payload)
        }
      }
    })

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    orders:orderSlice.reducer,
    users:userSlice.reducer
  },
});


store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart));
});
;

// export const saveUser = (user) => {
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   users.push(user);
//   localStorage.setItem("users", JSON.stringify(users));
// };

// export const getUser = (email, password) => {
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   return users.find((user) => user.email === email && user.password === password);
// };

// export const updateUser = (updatedUser) => {
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   const index = users.findIndex((user) => user.email === updatedUser.email);
//   if (index !== -1) {
//     users[index] = updatedUser;
//     localStorage.setItem("users", JSON.stringify(users));
//   }
// };

// export const getUserByEmail = (email) => {
//   const users = JSON.parse(localStorage.getItem("users")) || [];
//   return users.find((user) => user.email === email);
// };

// export const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("currentUser"));
// };

// export const setCurrentUser = (user) => {
//   localStorage.setItem("currentUser", JSON.stringify(user));
// };

// export const clearCurrentUser = () => {
//   localStorage.removeItem("currentUser");
// };

export const { registeruser, loginUser, logoutUser } = userSlice.actions;


export const{orderDetails}=orderSlice.actions;

export const { AddToCart, RemoveFromCart, ClearCart, IncrementQuantity, DecrementQuantity } = cartSlice.actions;
