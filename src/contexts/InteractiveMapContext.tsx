import { CAMPING_OBJECT_ENUM } from '@/constants/camping-object';
import { CampingObject } from '@/entities/CampingObject';
import { createContext, useState } from 'react';

interface InteractiveMapProviderProps {
  children: React.ReactNode;
}

interface InteractiveMapContextValue {
  selectedTool: CAMPING_OBJECT_ENUM | null;
  items: CampingObject[];

  setSelectedTool: (toolType: CAMPING_OBJECT_ENUM | null) => void;
  addItems: (object: CampingObject) => void;
}

export const InteractiveMapContext = createContext<InteractiveMapContextValue | null>(null);

export const InteractiveMapProvider = ({ children }: InteractiveMapProviderProps) => {
  const [selectedTool, setSelectedTool] = useState<CAMPING_OBJECT_ENUM | null>(null);
  const [items, setItems] = useState<CampingObject[]>([]);

  const addItems = (object: CampingObject) => {
    setItems((prevItems) => [...prevItems, object]);
  };

  return (
    <InteractiveMapContext.Provider
      value={{
        selectedTool,
        items,
        setSelectedTool: (type: CAMPING_OBJECT_ENUM | null) => setSelectedTool(type),
        addItems,
      }}
    >
      {children}
    </InteractiveMapContext.Provider>
  );
};
