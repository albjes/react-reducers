const ProductItem = ({ data, addToCart }) => {
  let { id, name, price, img } = data;
  return (
    <div key={id} className="group relative border-2 border-gray-800">
      <a href="#2">
        <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={`${img}`}
            alt="#2"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      </a>
      <div className="flex justify-between items-center bg-gray-800 p-4">
        <div>
          <h3 className="text-sm text-white">
            <a href="#2">
              <span aria-hidden="true" className="inset-0" />
              {name}
            </a>
          </h3>
          <p className="text-sm font-medium text-gray-300">{price} €</p>
        </div>
        <button
          onClick={() => addToCart(id)}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded"
        >
          Añadir
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
