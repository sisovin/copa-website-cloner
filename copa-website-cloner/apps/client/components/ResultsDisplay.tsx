import React from 'react';

interface ResultsDisplayProps {
  result: any;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md mt-4">
      <h2 className="text-lg font-bold">Cloning Results</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default ResultsDisplay;
