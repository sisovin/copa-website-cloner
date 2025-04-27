import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClonerForm from '../components/ClonerForm';
import ResultsDisplay from '../components/ResultsDisplay';

const HomePage: React.FC = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <ClonerForm setResult={setResult} />
        {result && <ResultsDisplay result={result} />}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
