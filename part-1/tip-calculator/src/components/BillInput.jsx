const BillInput = ({ bill, onBillChange }) => {
  const handleBill = (e) => {
    onBillChange(Number(e.target.value));
  };
  return (
    <div>
      <label htmlFor="bill-input">How much was the bill?</label>
      <input type="number" id="bill-input" value={bill} onChange={handleBill} />
    </div>
  );
};

export default BillInput;
