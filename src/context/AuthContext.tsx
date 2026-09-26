import React, { createContext, useContext, useState } from 'react';
import type { User, UserRole } from '../types';
import { getStoredUser, saveUserToStorage, simulateLogin, simulateSignup } from '../services/authService';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, role: UserRole) => void;
  logout: () => void;
  updateUser: (updatedData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => getStoredUser());

  const login = (email: string, password: string) => {
    const loggedInUser = simulateLogin(email, password);
    setUser(loggedInUser);
  };

  const signup = (name: string, email: string, role: UserRole) => {
    const newUser = simulateSignup(name, email, role);
    setUser(newUser);
  };

  const logout = () => {
    saveUserToStorage(null);
    setUser(null);
  };

  const updateUser = (updatedData: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...updatedData };
    saveUserToStorage(updated);
    setUser(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
