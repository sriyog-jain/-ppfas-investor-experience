import type { InvestorProfile } from '@/types';

export function validateInvestorProfile(
  profile: Partial<InvestorProfile>
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!profile.age || profile.age < 18 || profile.age > 100) {
    errors.push('Age must be between 18 and 100');
  }

  if (!profile.occupation) {
    errors.push('Occupation is required');
  }

  if (!profile.income || profile.income < 0) {
    errors.push('Income must be a positive number');
  }

  if (!profile.investmentAmount || profile.investmentAmount < 0) {
    errors.push('Investment amount must be positive');
  }

  if (!profile.investmentGoal) {
    errors.push('Investment goal is required');
  }

  if (!profile.riskAppetite) {
    errors.push('Risk appetite must be selected');
  }

  if (!profile.investmentHorizon || profile.investmentHorizon < 1) {
    errors.push('Investment horizon must be at least 1 year');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhoneNumber(phone: string): boolean {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
}

export function validatePincode(pincode: string): boolean {
  const re = /^[0-9]{6}$/;
  return re.test(pincode);
}

export function validatePAN(pan: string): boolean {
  const re = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return re.test(pan);
}
