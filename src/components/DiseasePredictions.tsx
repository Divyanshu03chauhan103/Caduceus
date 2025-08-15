// src/components/DiseasePredictions.tsx
import React from 'react';
import { DiseaseRisk } from '../types';

interface DiseasePredictionsProps {
  diseaseRisks: DiseaseRisk[];
}

const DiseasePredictions: React.FC<DiseasePredictionsProps> = ({ diseaseRisks }) => {
  const getRiskColor = (riskLevel: number): string => {
    if (riskLevel >= 60) return 'bg-red-500';
    if (riskLevel >= 40) return 'bg-orange-500';
    if (riskLevel >= 20) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getRiskBgColor = (riskLevel: number): string => {
    if (riskLevel >= 60) return 'bg-red-50 border-red-200';
    if (riskLevel >= 40) return 'bg-orange-50 border-orange-200';
    if (riskLevel >= 20) return 'bg-yellow-50 border-yellow-200';
    return 'bg-green-50 border-green-200';
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h2 className="text-lg font-semibold text-gray-900">Disease Risk Predictions</h2>
        </div>
        <p className="text-sm text-gray-600">AI-powered analysis of genetic disease susceptibility</p>
      </div>

      <div className="space-y-4">
        {diseaseRisks.map((disease) => (
          <div
            key={disease.id}
            className={`p-4 rounded-lg border border-l-4 ${getRiskBgColor(disease.riskLevel)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${disease.iconColor}`}>
                  {disease.icon === 'brain' && (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  )}
                  {disease.icon === 'heart' && (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  )}
                  {disease.icon === 'droplet' && (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2C20 10.48 17.33 6.55 12 2z"/>
                    </svg>
                  )}
                  {disease.icon === 'shield' && (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{disease.name}</h3>
                  <p className="text-sm text-gray-600">Confidence: {disease.confidence}%</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{disease.riskLevel}%</div>
                <div className="text-xs text-gray-500">Risk Level</div>
              </div>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${getRiskColor(disease.riskLevel)}`}
                  style={{ width: `${disease.riskLevel}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiseasePredictions;