import React from 'react';

const PartNumber = ({ partNumber }) => {
  return (
    <div className="mt-6 p-4 bg-orange-100 dark:bg-slate-100 border dark:border-slate-200 border-orange-200 rounded">
      <p className="text-orange-800 dark:text-gray-700 font-bold">Part Number: {partNumber}</p>
    </div>
  );
};

export default PartNumber;
