import { useState } from "react";
import {CounterDisplay} from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="text-center *:mt-3">
      <h2 className="text-2xl font-bold">Simple Counter App</h2>
      <CounterDisplay count={count} />
      <CounterButtons action={decrease} content="-"/>
      <CounterButtons action={increase} content="+"/>
      <CounterButtons action={reset} content="reset"/>
    </div>
  );
}

export default App;
