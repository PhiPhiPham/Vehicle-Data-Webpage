import React from 'react';

const PartNumber = ({ partNumber }) => {
  return (
    <div className="mt-6 p-4 bg-orange-100 border border-orange-200 rounded">
      <p className="text-orange-800 font-bold">Part Number: {partNumber}</p>
    </div>
  );
};

export default PartNumber;
