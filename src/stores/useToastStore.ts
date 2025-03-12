import { create } from 'zustand';

interface IToastState {
  message: string;
  isOpen: boolean;
  type: 'success' | 'error' | 'warning';
  setAlert: (message: string, type?: 'success' | 'error' | 'warning') => void;
  closeAlert: () => void;
}

export const useAlertStore = create<IToastState>(set => ({
  message: '',
  isOpen: false,
  type: 'error',
  setAlert: (message, type = 'error') => set({ message, isOpen: true, type }),
  closeAlert: () => set({ message: '', isOpen: false }),
}));
