import type { NewsArticle, NewsCategory } from '../types';
import { SEEDED_NEWS } from '../data/newsData';

const CUSTOM_NEWS_KEY = 'instalegal_custom_news';

export const getCustomNews = (): NewsArticle[] => {
  try {
    const raw = localStorage.getItem(CUSTOM_NEWS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const getAllNews = (): NewsArticle[] => {
  const custom = getCustomNews();
  return [...custom, ...SEEDED_NEWS];
};

export const getNewsById = (id: string): NewsArticle | undefined => {
  const all = getAllNews();
  return all.find(n => n.id === id);
};

export interface NewsFilterOptions {
  query?: string;
  category?: string;
  sortBy?: 'latest' | 'oldest';
}

export const filterNews = (options: NewsFilterOptions): NewsArticle[] => {
  let list = getAllNews();

  if (options.query && options.query.trim() !== '') {
    const q = options.query.toLowerCase().trim();
    list = list.filter(n =>
      n.headline.toLowerCase().includes(q) ||
      n.summary.toLowerCase().includes(q) ||
      n.fullContent.toLowerCase().includes(q) ||
      n.category.toLowerCase().includes(q) ||
      n.author.toLowerCase().includes(q)
    );
  }

  if (options.category && options.category !== 'All') {
    list = list.filter(n => n.category === options.category as NewsCategory);
  }

  if (options.sortBy === 'oldest') {
    list.sort((a, b) => new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime());
  } else {
    list.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  }

  return list;
};

export const addNewsArticle = (newArticle: Omit<NewsArticle, 'id' | 'isDemo'>): NewsArticle => {
  const item: NewsArticle = {
    ...newArticle,
    id: `custom-news-${Date.now()}`,
    isDemo: true
  };
  const current = getCustomNews();
  const updated = [item, ...current];
  localStorage.setItem(CUSTOM_NEWS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('instalegal_data_updated'));
  return item;
};
