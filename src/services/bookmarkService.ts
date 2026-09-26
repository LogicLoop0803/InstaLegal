import type { Bookmark } from '../types';

const BOOKMARKS_STORAGE_KEY = 'instalegal_bookmarks';

export const getStoredBookmarks = (): Bookmark[] => {
  try {
    const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveBookmarksToStorage = (bookmarks: Bookmark[]) => {
  try {
    localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
  } catch {
    // Ignore storage quota or permission errors silently
  }
};

export const isItemBookmarked = (type: 'judgment' | 'news' | 'counsel', itemId: string): boolean => {
  const list = getStoredBookmarks();
  return list.some(b => b.type === type && b.itemId === itemId);
};

export const toggleBookmark = (type: 'judgment' | 'news' | 'counsel', itemId: string): boolean => {
  const list = getStoredBookmarks();
  const index = list.findIndex(b => b.type === type && b.itemId === itemId);
  let updated: Bookmark[];
  let isAdded = false;

  if (index >= 0) {
    updated = list.filter((_, i) => i !== index);
  } else {
    const newBookmark: Bookmark = {
      id: `bm-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      type,
      itemId,
      createdAt: new Date().toISOString()
    };
    updated = [newBookmark, ...list];
    isAdded = true;
  }

  saveBookmarksToStorage(updated);
  window.dispatchEvent(new Event('instalegal_bookmarks_updated'));
  return isAdded;
};
