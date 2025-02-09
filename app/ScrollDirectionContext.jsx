"use client";

import { createContext, useState } from "react";

export const ScrollDirectionContext = createContext({
  direction: 1,
  setDirection: () => {},
});

export function ScrollDirectionProvider({ children }) {
  const [direction, setDirection] = useState(1);
  return (
    <ScrollDirectionContext.Provider value={{ direction, setDirection }}>
      {children}
    </ScrollDirectionContext.Provider>
  );
}
