import { createContext, useContext } from "react";

export interface AudioContextType {
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => Promise<void>;
  isPlaying: boolean;
}

export const AudioContext = createContext<AudioContextType | null>(null);

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error("useAudio must be used inside AudioProvider");
  }
  return ctx;
};
