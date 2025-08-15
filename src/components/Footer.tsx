// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div>
          Caduceus DNA Analysis - Advanced genomic disease prediction
        </div>
        <div>
          Powered by transformer-based DNA sequence modeling
        </div>
      </div>
    </footer>
  );
};

export default Footer;