{/* Practice 3: Making Things Move (Counter with useState) */}
import { useState } from "react";
import Stopwatch from "./Stopwatch";
import Calculator from "./Calculator";
import SmartCalculator from "./SmartCalculator";

function App() {
  return (
    <div>
      {/* <Stopwatch /> */}
      <Calculator />
      <SmartCalculator />
    </div>
  )
}
export default App;