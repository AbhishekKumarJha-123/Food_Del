

import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
   
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId) => {
    
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? Math.max(prev[itemId] - 1, 0) : 0,
    }));
  };

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    // here item is an id 
    for(const item in cartItems){
      if(cartItems[item]>0){

          let itemInfo=food_list.find((product)=>product._id===item);
          totalAmount+= itemInfo.price  * cartItems[item];
      }
    }
    return totalAmount;
  }
  //useEffect(() => {
  //  // console.log( cartItems); 
 //}, [cartItems]);

  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;



// import { createContext, useEffect, useState } from "react";
// import {food_list} from '../../assets/assets'


// export const StoreContext=createContext(null)

// const StoreContextProvider = (props) => {
//     const [cartItems,setCartItems]=useState({})

   

//     const addToCart = (itemId) =>{
//         if(!cartItems[itemId]){
//             setCartItems((prev)=>({...prev,[itemId]:1}))
//         }
//         else{
//             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         }
//     }

//     const removeFromCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }

//     useEffect(()=>{
//         if (cartItems) { // Check if cartItems has a value
//             console.log(cartItems);
//         }
//     },[cartItems])
    
//     const contextValue = {
//         food_list,
//         addToCart,
//         removeFromCart,
//         cartItems,
//         setCartItems
//     }
//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}

//         </StoreContext.Provider>
//     )
// }
// export default StoreContextProvider;