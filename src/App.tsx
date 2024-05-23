import { Counter } from "./base/Counter";
import { CounterBy } from "./base/CounterBy";
import { CounterEffect } from "./base/CounterEffect";

function App() {
  return (
  <>
    <Counter initiaValue={15}/>
    <CounterBy />
    <CounterEffect/>
  </>

  );
}

export default App;
