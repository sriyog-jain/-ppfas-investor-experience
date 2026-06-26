import type { InvestorProfile, ExhibitionSession } from '@/types';

const STORAGE_KEYS = {
  INVESTOR_PROFILE: 'ppfas_investor_profile',
  EXHIBITION_SESSION: 'ppfas_exhibition_session',
  VISITOR_COUNT: 'ppfas_visitor_count',
  USER_ACHIEVEMENTS: 'ppfas_user_achievements',
  SOUND_SETTINGS: 'ppfas_sound_settings',
  THEME_PREFERENCE: 'ppfas_theme_preference',
};

export function saveInvestorProfile(profile: InvestorProfile): void {
  try {
    localStorage.setItem(STORAGE_KEYS.INVESTOR_PROFILE, JSON.stringify(profile));
  } catch (error) {
    console.error('Error saving investor profile:', error);
  }
}

export function getInvestorProfile(): InvestorProfile | null {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.INVESTOR_PROFILE);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving investor profile:', error);
    return null;
  }
}

export function clearInvestorProfile(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.INVESTOR_PROFILE);
  } catch (error) {
    console.error('Error clearing investor profile:', error);
  }
}

export function saveExhibitionSession(session: ExhibitionSession): void {
  try {
    localStorage.setItem(STORAGE_KEYS.EXHIBITION_SESSION, JSON.stringify(session));
  } catch (error) {
    console.error('Error saving exhibition session:', error);
  }
}

export function getExhibitionSession(): ExhibitionSession | null {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.EXHIBITION_SESSION);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving exhibition session:', error);
    return null;
  }
}

export function incrementVisitorCount(): number {
  try {
    const current = parseInt(localStorage.getItem(STORAGE_KEYS.VISITOR_COUNT) || '0', 10);
    const newCount = current + 1;
    localStorage.setItem(STORAGE_KEYS.VISITOR_COUNT, newCount.toString());
    return newCount;
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    return 0;
  }
}

export function getVisitorCount(): number {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEYS.VISITOR_COUNT) || '0', 10);
  } catch (error) {
    console.error('Error getting visitor count:', error);
    return 0;
  }
}

export function getSoundSettings() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SOUND_SETTINGS);
    return data
      ? JSON.parse(data)
      : { enabled: false, volume: 0.5, clickSound: true, successSound: true };
  } catch (error) {
    console.error('Error getting sound settings:', error);
    return { enabled: false, volume: 0.5, clickSound: true, successSound: true };
  }
}

export function saveSoundSettings(settings: any): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SOUND_SETTINGS, JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving sound settings:', error);
  }
}
