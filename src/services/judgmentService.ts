import type { Judgment, PracticeArea, CaseType } from '../types';
import { SEEDED_JUDGMENTS } from '../data/judgmentsData';

const CUSTOM_JUDGMENTS_KEY = 'instalegal_custom_judgments';

export const getCustomJudgments = (): Judgment[] => {
  try {
    const raw = localStorage.getItem(CUSTOM_JUDGMENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const getAllJudgments = (): Judgment[] => {
  const custom = getCustomJudgments();
  return [...custom, ...SEEDED_JUDGMENTS];
};

export const getJudgmentById = (id: string): Judgment | undefined => {
  const all = getAllJudgments();
  return all.find(j => j.id === id);
};

export interface JudgmentFilterOptions {
  query?: string;
  practiceArea?: string;
  caseType?: string;
  isConstitutional?: boolean;
  bench?: string;
  sortBy?: 'latest' | 'oldest' | 'relevance';
}

export const filterJudgments = (options: JudgmentFilterOptions): Judgment[] => {
  let list = getAllJudgments();

  if (options.query && options.query.trim() !== '') {
    const q = options.query.toLowerCase().trim();
    list = list.filter(j =>
      j.caseTitle.toLowerCase().includes(q) ||
      j.caseNumber.toLowerCase().includes(q) ||
      j.summary.toLowerCase().includes(q) ||
      j.ratioDecidendi.toLowerCase().includes(q) ||
      j.practiceArea.toLowerCase().includes(q) ||
      j.citation.toLowerCase().includes(q) ||
      j.judges.some(judge => judge.toLowerCase().includes(q)) ||
      j.keyIssues.some(issue => issue.toLowerCase().includes(q))
    );
  }

  if (options.practiceArea && options.practiceArea !== 'All') {
    list = list.filter(j => j.practiceArea === options.practiceArea as PracticeArea);
  }

  if (options.caseType && options.caseType !== 'All') {
    list = list.filter(j => j.caseType === options.caseType as CaseType);
  }

  if (options.isConstitutional) {
    list = list.filter(j => j.isConstitutional === true);
  }

  if (options.bench && options.bench !== 'All') {
    list = list.filter(j => j.bench === options.bench);
  }

  if (options.sortBy === 'oldest') {
    list.sort((a, b) => new Date(a.judgmentDate).getTime() - new Date(b.judgmentDate).getTime());
  } else {
    list.sort((a, b) => new Date(b.judgmentDate).getTime() - new Date(a.judgmentDate).getTime());
  }

  return list;
};

export const addJudgment = (newJudgment: Omit<Judgment, 'id' | 'isDemo'>): Judgment => {
  const item: Judgment = {
    ...newJudgment,
    id: `custom-sc-${Date.now()}`,
    isDemo: true
  };
  const current = getCustomJudgments();
  const updated = [item, ...current];
  localStorage.setItem(CUSTOM_JUDGMENTS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('instalegal_data_updated'));
  return item;
};
