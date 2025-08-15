// src/components/AnalysisDetails.tsx
import React from 'react';
import { ModelPerformance, AnalysisSummary } from '../types';

interface AnalysisDetailsProps {
  modelPerformance: ModelPerformance;
  analysisSummary: AnalysisSummary;
}

const AnalysisDetails: React.FC<AnalysisDetailsProps> = ({ modelPerformance, analysisSummary }) => {
  const getQualityColor = (quality: string): string => {
    switch (quality) {
      case 'Excellent': return 'text-green-600 bg-green-50';
      case 'Good': return 'text-blue-600 bg-blue-50';
      case 'Fair': return 'text-yellow-600 bg-yellow-50';
      case 'Poor': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (hasIssue: boolean) => {
    if (hasIssue) {
      return (
        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L1 21h22L12 2zm0 3l8.5 15h-17L12 5zm-1 6h2v4h-2v-4zm0 6h2v2h-2v-2z"/>
          </svg>
        </div>
      );
    }
    return (
      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
        </svg>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Model Performance */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-4">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">Model Performance</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Accuracy</span>
            <span className="font-semibold text-green-600">{modelPerformance.accuracy.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Processing Time</span>
            <span className="font-semibold text-gray-900">{modelPerformance.processingTime}s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Sequence Length</span>
            <span className="font-semibold text-gray-900">{modelPerformance.sequenceLength} bp</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Model Version</span>
            <span className="font-semibold text-gray-900">{modelPerformance.modelVersion}</span>
          </div>
        </div>
      </div>

      {/* Analysis Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-4">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900">Analysis Summary</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Sequence quality:</span>
            <span className={`px-2 py-1 rounded-full text-sm font-medium ${getQualityColor(analysisSummary.sequenceQuality)}`}>
              {analysisSummary.sequenceQuality}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Coverage:</span>
            <div className="flex items-center space-x-2">
              {getStatusIcon(false)}
              <span className="font-semibold text-gray-900">{analysisSummary.coverage}%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">{analysisSummary.variantsOfInterest} variants of interest found</span>
            {getStatusIcon(analysisSummary.variantsOfInterest > 0)}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">No critical mutations detected</span>
            {getStatusIcon(analysisSummary.criticalMutations === 0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDetails;