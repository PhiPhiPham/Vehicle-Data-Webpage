import React from 'react';

const PartNumber = ({ partNumber }) => {
  return (
    <div className="mt-6 p-4 bg-blue-100 border border-blue-200 rounded">
      <p className="text-blue-800 font-bold">Part Number: {partNumber}</p>
    </div>
  );
};

export default PartNumber;
