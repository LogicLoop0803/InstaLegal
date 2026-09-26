import type { User, UserRole } from '../types';

const AUTH_USER_KEY = 'instalegal_active_user';

export const DEFAULT_DEMO_USER: User = {
  id: 'usr-demo-001',
  name: 'Advocate Vikram Mehta',
  email: 'vikram.mehta@instalegal-demo.in',
  role: 'Advocate',
  barNumber: 'D/1942/2014 (Demo)',
  organization: 'Supreme Court Bar Association',
  subscriptionTier: 'pro'
};

export const getStoredUser = (): User | null => {
  try {
    const raw = localStorage.getItem(AUTH_USER_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_DEMO_USER;
  } catch (e) {
    console.error('Error loading user from localStorage', e);
    return DEFAULT_DEMO_USER;
  }
};

export const saveUserToStorage = (user: User | null) => {
  if (user) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_USER_KEY);
  }
};

export const simulateLogin = (email: string, _password: string): User => {
  const existing = getStoredUser();
  if (existing && existing.email.toLowerCase() === email.toLowerCase()) {
    return existing;
  }
  const newUser: User = {
    id: `usr-${Date.now()}`,
    name: email.substring(0, email.indexOf('@')) || 'Legal Professional',
    email,
    role: 'Advocate',
    subscriptionTier: 'pro'
  };
  saveUserToStorage(newUser);
  return newUser;
};

export const simulateSignup = (name: string, email: string, role: UserRole): User => {
  const newUser: User = {
    id: `usr-${Date.now()}`,
    name,
    email,
    role,
    subscriptionTier: 'pro'
  };
  saveUserToStorage(newUser);
  return newUser;
};
