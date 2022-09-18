import { useEffect, useState } from "react";

const CartItem = ({ index, data, delFromCart, addToCart }) => {
  const { id, name, price, img, quantity } = data;
  const [numItem, setNumItem] = useState(1);

  useEffect(() => {
    if (quantity) {
      setNumItem(quantity);
    }
  }, [quantity]);

  const sumar = () => {
    setNumItem(numItem + 1);
    addToCart(id);
  };
  const restar = () => {
    setNumItem(numItem - 1);
    delFromCart(id);
  };

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={img} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{name}</span>
          <p
            onClick={() => delFromCart(id, true)}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs hover:cursor-pointer"
          >
            Eliminar
          </p>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg
          onClick={restar}
          className="fill-current text-gray-600 w-3 hover:cursor-pointer"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input
          className="mx-2 border text-center w-8 disable"
          type="text"
          value={numItem}
          onChange={setNumItem}
          disabled
        />

        <svg
          onClick={sumar}
          className="fill-current text-gray-600 w-3 hover:cursor-pointer"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        {price}€ x {numItem}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        {price * numItem} €
      </span>
    </div>
  );
};

export default CartItem;
