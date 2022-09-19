import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import CrudApi from "./components/CrudApi";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewExercise from "./components/NewExercise";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <NewExercise msg="REACT REDUCERS CRUD API" flexType="flex-col">
        <CrudApi />
      </NewExercise>
      <NewExercise msg="REACT REDUCERS CARRITO DE COMPRA" flexType="flex-col">
        <ShoppingCart />
      </NewExercise>
      <NewExercise msg="REACT REDUCERS CONTADORES" flexType="flex-col">
        <ContadorMejorado />
        <Contador />
      </NewExercise>
    </div>
  );
}

export default App;
