import Header from "./components/Header";
import Nav from "./components/Nav";
import NewExercise from "./components/NewExercise";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <NewExercise msg="REACT REDUCERS" flexType="flex-col"></NewExercise>
    </div>
  );
}

export default App;
