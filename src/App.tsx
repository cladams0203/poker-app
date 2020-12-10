import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { SHUFFLE } from "./state/actions/gameActions";

function App() {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: SHUFFLE })}>Shuffle</button>
    </div>
  );
}

export default App;
