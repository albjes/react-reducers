import "./Header.css";

function Header() {
  let style = `gallery md:w-1/2 w-auto`;

  return (
    <div className="flex flex-col justify-around items-center md:flex-row">
      <div className={`${style} justify-start`}>
        <img
          src="https://picsum.photos/id/1040/300/300"
          alt="a house on a mountain"
        />
        <img
          src="https://picsum.photos/id/106/300/300"
          alt="sime pink flowers"
        />
        <img
          src="https://picsum.photos/id/136/300/300"
          alt="big rocks with some trees"
        />
        <img
          src="https://picsum.photos/id/1039/300/300"
          alt="a waterfall, a lot of tree and a great view from the sky"
        />
        <img
          src="https://picsum.photos/id/110/300/300"
          alt="a cool landscape"
        />
        <img
          src="https://picsum.photos/id/1047/300/300"
          alt="inside a town between two big buildings"
        />
        <img
          src="https://picsum.photos/id/1057/300/300"
          alt="a great view of the sea above the mountain"
        />
      </div>
      <div className="w-full">
        <h2 className="text-3xl w-full text-center bg-gray-200 text-gray-700 p-8">
          Ejercicios con React
        </h2>
      </div>
      <div className={`${style} justify-end`}>
        <img
          src="https://picsum.photos/id/1040/300/300"
          alt="a house on a mountain"
        />
        <img
          src="https://picsum.photos/id/106/300/300"
          alt="sime pink flowers"
        />
        <img
          src="https://picsum.photos/id/136/300/300"
          alt="big rocks with some trees"
        />
        <img
          src="https://picsum.photos/id/1039/300/300"
          alt="a waterfall, a lot of tree and a great view from the sky"
        />
        <img
          src="https://picsum.photos/id/110/300/300"
          alt="a cool landscape"
        />
        <img
          src="https://picsum.photos/id/1047/300/300"
          alt="inside a town between two big buildings"
        />
        <img
          src="https://picsum.photos/id/1057/300/300"
          alt="a great view of the sea above the mountain"
        />
      </div>
    </div>
  );
}

export default Header;
