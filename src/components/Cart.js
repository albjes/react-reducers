import CartItem from "./CartItem";

const Cart = ({ clearCart, delFromCart, addToCart, cart }) => {
  let totalAmount = cart.reduce((acc, curVal) => {
    return acc + curVal.price * curVal.quantity;
  }, 0);

  let totalQuantity = cart.reduce((acc, curVal) => {
    return acc + curVal.quantity;
  }, 0);

  return (
    <div className="container mx-auto ">
      <h3 className="text-2xl text-center mt-12">Carrito</h3>
      <div className="flex shadow-md ">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{totalQuantity} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Detalles
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Cantidad
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Precio
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Total
            </h3>
          </div>
          {/* Map de productos */}
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              delFromCart={delFromCart}
              addToCart={addToCart}
            />
          ))}
          {/* Fin Map de productos */}
          <button
            onClick={clearCart}
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded"
          >
            Vaciar Carrito
          </button>
        </div>
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              {totalQuantity} Items
            </span>
            <span className="font-semibold text-sm">{totalAmount} €</span>
          </div>

          <div className="border-t mt-8">
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
