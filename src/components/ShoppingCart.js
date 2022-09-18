import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";

import Cart from "./Cart";
import ProductItem from "./ProductItem";
import { TYPES } from "../actions/shoppingActions";
import { useReducer } from "react";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <>
      <h3 className="text-2xl text-center mt-4 mb-4">Productos</h3>

      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      {cart.length > 0 ? (
        <Cart
          clearCart={clearCart}
          delFromCart={delFromCart}
          cart={cart}
          addToCart={addToCart}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ShoppingCart;
