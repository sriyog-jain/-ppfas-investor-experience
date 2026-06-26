import type { InvestorProfile, Recommendation, Fund } from '@/types';
import { PPFAS_SCHEMES } from './constants';

export function calculateSIPFutureValue(
  monthlyAmount: number,
  annualRate: number,
  years: number
): { futureValue: number; investedAmount: number; returns: number } {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;

  if (monthlyRate === 0) {
    return {
      futureValue: monthlyAmount * months,
      investedAmount: monthlyAmount * months,
      returns: 0,
    };
  }

  const futureValue =
    monthlyAmount *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate));
  const investedAmount = monthlyAmount * months;
  const returns = futureValue - investedAmount;

  return { futureValue, investedAmount, returns };
}

export function calculateLumpSumFutureValue(
  principal: number,
  annualRate: number,
  years: number
): { futureValue: number; investedAmount: number; returns: number } {
  const futureValue = principal * Math.pow(1 + annualRate / 100, years);
  const returns = futureValue - principal;

  return { futureValue, investedAmount: principal, returns };
}

export function calculateCAGR(
  startValue: number,
  endValue: number,
  years: number
): number {
  if (startValue <= 0 || years <= 0) return 0;
  return (Math.pow(endValue / startValue, 1 / years) - 1) * 100;
}

export function calculateInflationImpact(
  futureAmount: number,
  inflationRate: number,
  years: number
): number {
  return futureAmount / Math.pow(1 + inflationRate / 100, years);
}

export function generateProjections(
  monthlyAmount: number,
  annualRate: number,
  years: number,
  isLumpSum = false,
  lumpSumAmount = 0
): Array<{ year: number; amount: number; returns: number }> {
  const projections = [];
  const monthlyRate = annualRate / 12 / 100;

  for (let y = 0; y <= years; y++) {
    let amount = 0;
    let investedAmount = 0;

    if (isLumpSum && lumpSumAmount > 0) {
      amount = lumpSumAmount * Math.pow(1 + monthlyRate, y * 12);
      investedAmount = lumpSumAmount;
    } else {
      const months = y * 12;
      if (monthlyRate === 0) {
        amount = monthlyAmount * months;
      } else {
        amount =
          monthlyAmount *
          (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
            (1 + monthlyRate));
      }
      investedAmount = monthlyAmount * months;
    }

    projections.push({
      year: y,
      amount: Math.round(amount),
      returns: Math.round(amount - investedAmount),
    });
  }

  return projections;
}

export function calculateRiskScore(profile: Partial<InvestorProfile>): number {
  let score = 0;
  let weight = 0;

  if (profile.age) {
    if (profile.age < 30) score += 8 * 0.25;
    else if (profile.age < 40) score += 6.5 * 0.25;
    else if (profile.age < 50) score += 5 * 0.25;
    else score += 3 * 0.25;
    weight += 0.25;
  }

  if (profile.riskAppetite) {
    const riskMap = { low: 2, medium: 5, high: 8 };
    score += riskMap[profile.riskAppetite] * 0.35;
    weight += 0.35;
  }

  if (profile.investmentHorizon) {
    if (profile.investmentHorizon > 10) score += 7.5 * 0.2;
    else if (profile.investmentHorizon > 5) score += 5.5 * 0.2;
    else if (profile.investmentHorizon > 3) score += 4 * 0.2;
    else score += 2 * 0.2;
    weight += 0.2;
  }

  if (profile.income) {
    if (profile.income > 1500000) score += 7 * 0.1;
    else if (profile.income > 750000) score += 5.5 * 0.1;
    else if (profile.income > 350000) score += 4 * 0.1;
    else score += 2.5 * 0.1;
    weight += 0.1;
  }

  if (profile.emergencyFund !== undefined) {
    score += (profile.emergencyFund ? 1.5 : -1.5) * 0.1;
  }

  return weight > 0 ? Math.round((score / weight) * 10) / 10 : 5;
}

export function getInvestorType(
  profile: Partial<InvestorProfile>
): 'aggressive' | 'growth' | 'balanced' | 'conservative' | 'income' {
  const riskScore = calculateRiskScore(profile);

  if (riskScore >= 7.5) return 'aggressive';
  if (riskScore >= 5.5) return 'growth';
  if (riskScore >= 4) return 'balanced';
  if (riskScore >= 2) return 'conservative';
  return 'income';
}

export function calculateRecommendationScore(
  fund: Fund,
  profile: Partial<InvestorProfile>
): number {
  let score = 0;

  const investorRiskScore = calculateRiskScore(profile);
  const fundRiskMap = { low: 3, medium: 5.5, high: 8 };
  const fundRiskScore = fundRiskMap[fund.riskLevel];
  const riskAlignment = 10 - Math.abs(investorRiskScore - fundRiskScore) / 0.8;
  score += Math.max(0, riskAlignment) * 0.3;

  if (profile.investmentGoal === 'Retirement Planning' && fund.category === 'Equity') {
    score += 8 * 0.2;
  } else if (profile.investmentGoal === 'Tax Planning' && fund.id === 'elss') {
    score += 9 * 0.2;
  } else if (profile.investmentGoal === 'Income Generation' && fund.category === 'Hybrid') {
    score += 8 * 0.2;
  } else {
    score += 5 * 0.2;
  }

  if (profile.investmentHorizon && profile.investmentHorizon > 5) {
    if (fund.riskLevel === 'high') score += 8 * 0.25;
    else if (fund.riskLevel === 'medium') score += 7 * 0.25;
    else score += 5 * 0.25;
  } else if (profile.investmentHorizon && profile.investmentHorizon > 3) {
    if (fund.riskLevel === 'medium') score += 8 * 0.25;
    else if (fund.riskLevel === 'high') score += 5 * 0.25;
    else score += 6 * 0.25;
  } else {
    if (fund.riskLevel === 'low') score += 8 * 0.25;
    else if (fund.riskLevel === 'medium') score += 5 * 0.25;
    else score += 2 * 0.25;
  }

  if (profile.taxSavingRequired && fund.id === 'elss') {
    score += 2 * 0.25;
  } else if (!profile.taxSavingRequired && fund.id !== 'elss') {
    score += 1 * 0.25;
  }

  return Math.round(score * 10) / 10;
}

export function generateRecommendations(
  profile: Partial<InvestorProfile>
): Recommendation[] {
  const recommendations: Recommendation[] = [];

  PPFAS_SCHEMES.forEach((fund) => {
    const confidence = calculateRecommendationScore(fund, profile);

    if (confidence >= 5) {
      const riskAlignment =
        calculateRiskScore(profile) -
        (fund.riskLevel === 'low' ? 3 : fund.riskLevel === 'medium' ? 5.5 : 8);

      let reasoning = '';

      if (fund.id === 'elss' && profile.taxSavingRequired) {
        reasoning =
          'ELSS provides tax deduction under Section 80C with growth potential for wealth creation.';
      } else if (fund.id === 'flexi-cap' && confidence > 7) {
        reasoning = 'Flexi Cap offers maximum growth potential with experienced fund management.';
      } else if (fund.riskLevel === 'low' && calculateRiskScore(profile) < 4) {
        reasoning = 'Conservative investment aligned with your risk profile for stability.';
      } else if (fund.riskLevel === 'medium') {
        reasoning = 'Balanced approach suitable for moderate risk investors seeking growth and stability.';
      } else {
        reasoning = `${fund.name} aligns well with your investment goals and risk profile.`;
      }

      const allocation =
        confidence > 8 ? 0.4 : confidence > 6 ? 0.3 : confidence > 5 ? 0.2 : 0.1;

      recommendations.push({
        fundId: fund.id,
        fundName: fund.name,
        confidence: confidence,
        reasoning: reasoning,
        suggestedAllocation: allocation,
        investmentHorizon: profile.investmentHorizon || 5,
        riskAlignment: Math.abs(riskAlignment),
      });
    }
  });

  return recommendations.sort((a, b) => b.confidence - a.confidence);
}

export function calculatePortfolioMetrics(allocation: Record<string, number>) {
  let totalRisk = 0;
  let totalReturn = 0;
  let fundCount = 0;

  Object.entries(allocation).forEach(([fundId, percentage]) => {
    if (percentage > 0) {
      const fund = PPFAS_SCHEMES.find((f) => f.id === fundId);
      if (fund) {
        totalRisk += (fund.riskScore / 10) * (percentage / 100);
        totalReturn += (fund.cagr5Y || 10) * (percentage / 100);
        fundCount++;
      }
    }
  });

  const diversificationScore = Math.min(100, fundCount * 20);

  return {
    expectedReturn: Math.round(totalReturn * 10) / 10,
    riskScore: Math.round(totalRisk * 10) / 10,
    diversificationScore: Math.round(diversificationScore),
    fundCount,
  };
}
