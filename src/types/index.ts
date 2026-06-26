export type InvestorProfile = {
  age: number;
  occupation: string;
  income: number;
  investmentAmount: number;
  investmentGoal: string;
  riskAppetite: 'low' | 'medium' | 'high';
  investmentHorizon: number;
  taxSavingRequired: boolean;
  emergencyFund: boolean;
  internationalExposure: boolean;
};

export type Fund = {
  id: string;
  name: string;
  category: string;
  aum: number;
  nav: number;
  expenseRatio: number;
  expenseType: 'Direct' | 'Regular';
  exitLoad: number;
  riskLevel: 'low' | 'medium' | 'high';
  benchmark: string;
  cagr1Y?: number;
  cagr3Y?: number;
  cagr5Y?: number;
  fundManager: string;
  objective: string;
  inception?: string;
  launchDate: string;
  amfiCode: string;
  fundSizeRank: number;
  assetAllocation: Record<string, number>;
  sectorAllocation: Record<string, number>;
  holdings: Holding[];
  minSIP?: number;
  minLumpSum?: number;
  riskScore: number;
  returnsRating: number;
  consistencyRating: number;
  icon: string;
};

export type Holding = {
  symbol: string;
  name: string;
  percentage: number;
};

export type FundManager = {
  id: string;
  name: string;
  title: string;
  experience: string;
  expertise: string[];
  philosophy: string;
  achievements: string;
  image: string;
  joinDate: string;
  qualification: string;
};

export type Recommendation = {
  fundId: string;
  fundName: string;
  confidence: number;
  reasoning: string;
  suggestedAllocation: number;
  investmentHorizon: number;
  riskAlignment: number;
};

export type PortfolioAllocation = {
  equity: number;
  debt: number;
  hybrid: number;
  liquid: number;
  elss: number;
  gold: number;
  international: number;
  realEstate: number;
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  progress: number;
};

export type InvestorType = 'aggressive' | 'growth' | 'balanced' | 'conservative' | 'income';

export type CalculationResult = {
  investedAmount: number;
  returns: number;
  futureValue: number;
  cagr: number;
  projections: ProjectionData[];
};

export type ProjectionData = {
  year: number;
  amount: number;
  returns: number;
};

export type AMCComparison = {
  name: string;
  aum: number;
  fundCount: number;
  averageExpenseRatio: number;
  averageReturn3Y: number;
  averageReturn5Y: number;
  fundQuality: number;
  consistencyRating: number;
  customerService: number;
};

export type SchemeFactsheet = {
  fundId: string;
  fundName: string;
  benchmark: string;
  fundSize: number;
  fundManager: string;
  fundHouse: string;
  expense: number;
  exitLoad: number;
  minInvestment: number;
};

export type DashboardMetrics = {
  totalInvested: number;
  currentValue: number;
  gains: number;
  gainPercentage: number;
  cagr: number;
  diversificationScore: number;
  riskScore: number;
  portfolioHealth: number;
};

export type RiskAssessment = {
  riskScore: number;
  volatility: number;
  sharpeRatio: number;
  maxDrawdown: number;
  betaToMarket: number;
  riskLevel: 'low' | 'medium' | 'high';
  riskDescription: string;
};

export type SIPProjection = {
  year: number;
  monthlyInvestment: number;
  cumulativeInvestment: number;
  projectedValue: number;
  gain: number;
  gainPercentage: number;
};

export type PerformanceMetrics = {
  returns1Y?: number;
  returns3Y?: number;
  returns5Y?: number;
  returns10Y?: number;
  cagr: number;
  sharpeRatio: number;
  sortino: number;
  maxDrawdown: number;
};

export type BenchmarkComparison = {
  fund: {
    returns: number;
    volatility: number;
    sharpe: number;
  };
  benchmark: {
    returns: number;
    volatility: number;
    sharpe: number;
  };
  outperformance: number;
};

export type VisitorAnalytics = {
  totalVisitors: number;
  activeSession: number;
  avgSessionDuration: number;
  profilesCreated: number;
  recommendationsGenerated: number;
  quizzesCompleted: number;
};

export type ExhibitionSession = {
  sessionId: string;
  startTime: Date;
  lastActivityTime: Date;
  visitorProfile?: InvestorProfile;
  recommendations?: Recommendation[];
  achievements: Achievement[];
};

export type SoundSettings = {
  enabled: boolean;
  volume: number;
  clickSound: boolean;
  successSound: boolean;
};
