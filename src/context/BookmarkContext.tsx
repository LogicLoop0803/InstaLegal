import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Bookmark } from '../types';
import { getStoredBookmarks, toggleBookmark as toggleBookmarkFn } from '../services/bookmarkService';

interface BookmarkContextType {
  bookmarks: Bookmark[];
  isBookmarked: (type: 'judgment' | 'news' | 'counsel', itemId: string) => boolean;
  toggle: (type: 'judgment' | 'news' | 'counsel', itemId: string) => boolean;
  totalCount: number;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => getStoredBookmarks());

  const refreshBookmarks = () => {
    setBookmarks(getStoredBookmarks());
  };

  useEffect(() => {
    const handleUpdate = () => {
      refreshBookmarks();
    };
    window.addEventListener('instalegal_bookmarks_updated', handleUpdate);
    return () => window.removeEventListener('instalegal_bookmarks_updated', handleUpdate);
  }, []);

  const isBookmarked = (type: 'judgment' | 'news' | 'counsel', itemId: string) => {
    return bookmarks.some(b => b.type === type && b.itemId === itemId);
  };

  const toggle = (type: 'judgment' | 'news' | 'counsel', itemId: string) => {
    const res = toggleBookmarkFn(type, itemId);
    refreshBookmarks();
    return res;
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        isBookmarked,
        toggle,
        totalCount: bookmarks.length
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};
