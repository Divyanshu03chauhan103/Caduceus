export interface DiseaseRisk {
  id: string;
  name: string;
  riskLevel: number;
  confidence: number;
  icon: string;
  iconColor: string;
}

export interface ModelPerformance {
  accuracy: number;
  processingTime: number;
  sequenceLength: number;
  modelVersion: string;
}

export interface AnalysisSummary {
  sequenceQuality: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  coverage: number;
  variantsOfInterest: number;
  criticalMutations: number;
}

export interface AnalysisResults {
  diseaseRisks: DiseaseRisk[];
  modelPerformance: ModelPerformance;
  analysisSummary: AnalysisSummary;
}