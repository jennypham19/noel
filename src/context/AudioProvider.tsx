import { AudioContext } from "./AudioContext";
import { useEffect, useRef, useState } from "react";
import musicMp3 from "@/assets/video/hoa-nhip-giang-sinh.mp3";

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(musicMp3);
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    // 🔑 Nếu đã từng bật nhạc → thử autoplay
    const enabled = localStorage.getItem("noel_music_enabled") === "true";
    if (enabled) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // browser chặn → chờ click
        const resume = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            document.removeEventListener("click", resume);
          } catch {}
        };
        document.addEventListener("click", resume);
      });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const play = async () => {
    if (!audioRef.current) return;
    await audioRef.current.play();
    setIsPlaying(true);
    localStorage.setItem("noel_music_enabled", "true");
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
    localStorage.removeItem("noel_music_enabled");
  };

  const toggle = async () => {
    if (!audioRef.current) return;
    if (isPlaying) pause();
    else await play();
  };

  return (
    <AudioContext.Provider value={{ play, pause, toggle, isPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};
