import { InteractiveMapContext } from '@/contexts/InteractiveMapContext';
import { useContext } from 'react';

export const useInteractiveMap = () => {
  const context = useContext(InteractiveMapContext);
  if (!context) {
    throw new Error('useInteractiveMap must be used within a InteractiveMapProvider');
  }
  return context;
};
