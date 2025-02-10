import { createContext, useContext, useState, ReactNode } from "react";

interface SongContextType {
  songName: string;
  setSongName: (msg: string) => void;
}

const SongContext = createContext<SongContextType | undefined>(undefined);

export const SongProvider = ({ children }: { children: ReactNode }) => {
  const [songName, setSongName] = useState<string>("");
  
  
  if (songName != "") {
    localStorage.setItem('song', songName)
  }
  

  return (
    <SongContext.Provider value={{ songName, setSongName }}>
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
