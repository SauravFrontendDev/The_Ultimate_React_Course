import { useState } from "react";
import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import ResultOutput from "./components/ResultOutput";

const App = () => {
  const [bill, setBill] = useState("");
  const [yourTip, setYourTip] = useState("");
  const [friendTip, setFriendTip] = useState("");

  const handleUpdateBill = (amount) => {
    setBill(amount);
  };

  const handleYourTipChange = (tip) => {
    setYourTip(tip);
  };
  const handleFriendTipChange = (tip) => {
    setFriendTip(tip);
  };

  const handleReset = () => {
    setBill("");
    setFriendTip("");
    setYourTip("");
  };

  const isChanged = bill || yourTip || friendTip;
  return (
    <div className="app">
      <form>
        <BillInput bill={bill} onBillChange={handleUpdateBill} />
        <SelectPercentage tip={yourTip} onTipChange={handleYourTipChange}>
          How did you like the service?
        </SelectPercentage>
        <SelectPercentage tip={friendTip} onTipChange={handleFriendTipChange}>
          How did your friend like the service?
        </SelectPercentage>
      </form>

      {isChanged && (
        <div>
          <ResultOutput bill={bill} yourTip={yourTip} friendTip={friendTip} />
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default App;
