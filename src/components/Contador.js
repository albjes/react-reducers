import { useReducer } from "react";

const initialState = { contador: 0 };
const init = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const sumar = () => dispatch({ type: TYPES.INCREMENT });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div className="mb-11">
      <h2 className="text-3xl text-center">Contador</h2>
      <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
        <button
          onClick={restar}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <button
          onClick={restar5}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          -5
        </button>
        <button
          onClick={sumar}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
        <button
          onClick={sumar5}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          +5
        </button>
      </nav>
      <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
        <span className="font-bold text-3xl ">{state.contador}</span>
      </nav>
      <nav className="mt-4 flex items-baseline space-x-2 justify-evenly">
        <button
          onClick={reset}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          RESET
        </button>
      </nav>
    </div>
  );
};

export default Contador;
