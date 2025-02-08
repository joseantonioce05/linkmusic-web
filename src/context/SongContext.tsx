import { createContext, useContext, useState, ReactNode } from "react";

interface SongContextType {
  song: string;
  setSong: (msg: string) => void;
}

const SongContext = createContext<SongContextType | undefined>(undefined);

export const SongProvider = ({ children }: { children: ReactNode }) => {
  const [song, setSong] = useState<string>("");
  
  if (song != "") {
    localStorage.setItem('song', song)
  }
  

  return (
    <SongContext.Provider value={{ song, setSong }}>
      {children}
      
    </SongContext.Provider>
  );
};

export const useSong = () => {
  const context = useContext(SongContext);
  if (!context) {
    throw new Error("useSong debe usarse dentro de un SongProvider");
  }
  return context;
};
