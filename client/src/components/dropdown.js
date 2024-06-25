import React from 'react';

const Dropdown = ({ label, options, selectedOption, onChange, disabled }) => {
  return (
    <div className="mb-4 w-full md:w-3/4 lg:w-1/2 px-2">
      <label className="block text-gray-700 font-bold mb-2">{label}</label>
      <select
        className={`block w-full bg-white border border-gray-300 rounded py-2 px-3 shadow-md focus:outline-none focus:ring focus:border-blue-300 ${
          disabled ? 'bg-gray-200 text-gray-500' : 'bg-white text-gray-700'
        }`}
        value={selectedOption}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
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
