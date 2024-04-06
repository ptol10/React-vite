import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [ convertedAmount, setConvertedAmount] = useState()

  return (
    <>
      <h1 className="text-center bg-gray-600 text-yellow-200">
        Currency converter
      </h1>
    </>
  );
}

export default App;
