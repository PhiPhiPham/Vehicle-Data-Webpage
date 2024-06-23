import React from 'react';

const Dropdown = ({ label, options, selectedOption, onChange, disabled }) => {
  return (
    <div>
      <label>{label}</label>
      <select value={selectedOption} onChange={(e) => onChange(e.target.value)} disabled={disabled}>
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
