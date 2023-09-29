import React from "react";

const ResultOutput = ({ bill, yourTip, friendTip }) => {
  const finalTipPercentage = (yourTip + friendTip) / 2;

  const finalTip = (bill * finalTipPercentage) / 100;
  return (
    <div>
      <h2>
        You pay ${bill + finalTip} (${bill} + ${finalTip} tip)
      </h2>
    </div>
  );
};

export default ResultOutput;
