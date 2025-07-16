import { createContext, type ReactNode, useCallback, useState } from 'react';

type DashboardContextValue = {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
};

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prev) => !prev);
  }, []);

  return (
    <DashboardContext.Provider value={{ areValuesVisible, toggleValuesVisibility }}>
      {children}
    </DashboardContext.Provider>
  );
}
