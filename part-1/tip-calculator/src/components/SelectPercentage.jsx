import React, { useState } from "react";

const SelectPercentage = ({ children, tip, onTipChange }) => {
  const handleTipChange = (e) => {
    onTipChange(Number(e.target.value));
  };
  return (
    <div>
      <label htmlFor="select-label">{children}</label>
      <select id="select-label" value={tip} onChange={handleTipChange}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely awesome!! (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
