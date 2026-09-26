import type { Counsel, PracticeArea, CounselDesignation, ConsultationRequest } from '../types';
import { SEEDED_COUNSEL } from '../data/counselData';

const CUSTOM_COUNSEL_KEY = 'instalegal_custom_counsel';
const CONSULTATIONS_KEY = 'instalegal_consultation_requests';

export const getCustomCounsel = (): Counsel[] => {
  try {
    const raw = localStorage.getItem(CUSTOM_COUNSEL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const getAllCounsel = (): Counsel[] => {
  const custom = getCustomCounsel();
  return [...custom, ...SEEDED_COUNSEL];
};

export const getCounselById = (id: string): Counsel | undefined => {
  const all = getAllCounsel();
  return all.find(c => c.id === id);
};

export interface CounselFilterOptions {
  query?: string;
  designation?: string;
  practiceArea?: string;
  location?: string;
  minExperience?: number;
  isAoR?: boolean;
  isSeniorAdvocate?: boolean;
}

export const filterCounsel = (options: CounselFilterOptions): Counsel[] => {
  let list = getAllCounsel();

  if (options.query && options.query.trim() !== '') {
    const q = options.query.toLowerCase().trim();
    list = list.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      c.bio.toLowerCase().includes(q) ||
      c.barCouncilNo.toLowerCase().includes(q) ||
      c.practiceAreas.some(pa => pa.toLowerCase().includes(q))
    );
  }

  if (options.designation && options.designation !== 'All') {
    list = list.filter(c => c.designation === options.designation as CounselDesignation);
  }

  if (options.isAoR) {
    list = list.filter(c => c.isAoR === true);
  }

  if (options.isSeniorAdvocate) {
    list = list.filter(c => c.isSeniorAdvocate === true);
  }

  if (options.practiceArea && options.practiceArea !== 'All') {
    list = list.filter(c => c.practiceAreas.includes(options.practiceArea as PracticeArea));
  }

  if (options.location && options.location !== 'All') {
    const loc = options.location;
    list = list.filter(c => c.location.toLowerCase() === loc.toLowerCase());
  }

  if (options.minExperience && options.minExperience > 0) {
    list = list.filter(c => c.experienceYears >= options.minExperience!);
  }

  return list;
};

export const submitConsultationRequest = (req: ConsultationRequest): boolean => {
  try {
    const raw = localStorage.getItem(CONSULTATIONS_KEY);
    const list: ConsultationRequest[] = raw ? JSON.parse(raw) : [];
    list.unshift(req);
    localStorage.setItem(CONSULTATIONS_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    console.error('Error saving consultation request', e);
    return false;
  }
};

export const addCounsel = (newCounsel: Omit<Counsel, 'id' | 'isDemo'>): Counsel => {
  const item: Counsel = {
    ...newCounsel,
    id: `custom-counsel-${Date.now()}`,
    isDemo: true
  };
  const current = getCustomCounsel();
  const updated = [item, ...current];
  localStorage.setItem(CUSTOM_COUNSEL_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('instalegal_data_updated'));
  return item;
};
