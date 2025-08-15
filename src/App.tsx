// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SequenceInput from './components/SequenceInput';
import DiseasePredictions from './components/DiseasePredictions';
import AnalysisDetails from './components/AnalysisDetails';
import Footer from './components/Footer';
import { AnalysisResults, DiseaseRisk } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sequence' | 'predictions' | 'details'>('sequence');
  const [analysisResults, setAnalysisResults] = useState<AnalysisResults | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Mock disease data generator
  const generateMockDiseaseRisks = (): DiseaseRisk[] => {
    const diseases = [
      {
        name: "Alzheimer's Disease",
        icon: 'brain',
        iconColor: 'bg-red-500',
        baseRisk: 15,
        baseConfidence: 85
      },
      {
        name: 'Type 2 Diabetes',
        icon: 'droplet',
        iconColor: 'bg-orange-500',
        baseRisk: 60,
        baseConfidence: 90
      },
      {
        name: 'Cardiovascular Disease',
        icon: 'heart',
        iconColor: 'bg-yellow-500',
        baseRisk: 40,
        baseConfidence: 85
      },
      {
        name: 'Breast Cancer',
        icon: 'shield',
        iconColor: 'bg-green-500',
        baseRisk: 8,
        baseConfidence: 75
      },
      {
        name: 'Hypertension',
        icon: 'heart',
        iconColor: 'bg-blue-500',
        baseRisk: 35,
        baseConfidence: 88
      },
      {
        name: 'Osteoporosis',
        icon: 'shield',
        iconColor: 'bg-purple-500',
        baseRisk: 22,
        baseConfidence: 82
      }
    ];

    // Randomize the risks slightly and pick 3-4 diseases
    const numDiseases = Math.floor(Math.random() * 2) + 3; // 3 or 4 diseases
    const selectedDiseases = diseases
      .sort(() => Math.random() - 0.5)
      .slice(0, numDiseases)
      .map((disease, index) => ({
        id: `disease-${index}`,
        name: disease.name,
        riskLevel: Math.max(5, disease.baseRisk + Math.floor(Math.random() * 20) - 10),
        confidence: Math.max(70, disease.baseConfidence + Math.floor(Math.random() * 10) - 5),
        icon: disease.icon,
        iconColor: disease.iconColor
      }))
      .sort((a, b) => b.riskLevel - a.riskLevel);

    return selectedDiseases;
  };

  const handleAnalyze = async (sequence: string, patientId?: string) => {
    setIsAnalyzing(true);
    console.log(patientId)
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));

    const mockResults: AnalysisResults = {
      diseaseRisks: generateMockDiseaseRisks(),
      modelPerformance: {
        accuracy: 92 + Math.random() * 6, // 92-98%
        processingTime: 1.5 + Math.random() * 2, // 1.5-3.5s
        sequenceLength: sequence.replace(/[^ATCGN]/gi, '').length,
        modelVersion: 'v2.1.0'
      },
      analysisSummary: {
        sequenceQuality: Math.random() > 0.2 ? 'Excellent' : 'Good',
        coverage: 95 + Math.random() * 4.8, // 95-99.8%
        variantsOfInterest: Math.floor(Math.random() * 5), // 0-4
        criticalMutations: Math.random() > 0.9 ? 1 : 0 // 10% chance of critical mutation
      }
    };

    setAnalysisResults(mockResults);
    setIsAnalyzing(false);
    setActiveTab('predictions');
  };

  const renderContent = () => {
    if (isAnalyzing) {
      return (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <h3 className="text-lg font-semibold text-gray-900">Analyzing DNA Sequence...</h3>
            <p className="text-gray-600">Processing genetic data using transformer models</p>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'sequence':
        return <SequenceInput onAnalyze={handleAnalyze} />;
      case 'predictions':
        return analysisResults ? (
          <DiseasePredictions diseaseRisks={analysisResults.diseaseRisks} />
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-gray-600">No analysis results available. Please analyze a DNA sequence first.</p>
          </div>
        );
      case 'details':
        return analysisResults ? (
          <AnalysisDetails 
            modelPerformance={analysisResults.modelPerformance}
            analysisSummary={analysisResults.analysisSummary}
          />
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
            <p className="text-gray-600">No analysis results available. Please analyze a DNA sequence first.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;