import { Counter } from "./base/Counter";
import { CounterBy } from "./base/CounterBy";

function App() {
  return (
  <>
    <Counter initiaValue={15}/>
    <CounterBy />
  </>

  );
}

export default App;
