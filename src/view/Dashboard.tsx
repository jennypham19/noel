import { Box, Typography, IconButton, Button } from "@mui/material";
import Snowfall from "react-snowfall";
import { useEffect, useRef, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import backgroundImg from "@/assets/imgs/images.jpg";
import treeImg from "@/assets/imgs/noel.jpg";
import musicMp3 from "@/assets/video/hoa-nhip-giang-sinh.mp3";

const Dashboard = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio(musicMp3);
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const startMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setUserInteracted(true);
    } catch (err) {
      console.warn("Autoplay bị chặn:", err);
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current || !userInteracted) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100svh",
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Snowfall
        snowflakeCount={120}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />

      {/* 🔊 Button toggle (sau khi đã click) */}
      {userInteracted && (
        <IconButton
          onClick={toggleMusic}
          sx={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 3,
            backgroundColor: "rgba(255,255,255,0.75)",
          }}
        >
          {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      )}

      {/* 🎄 Main content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box component="img" src={treeImg} sx={{ width: 150 }} />
      </Box>

      {/* 🚨 Overlay bật nhạc */}
      {!userInteracted && (
        <Box
          onClick={startMusic}
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 5,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              fontSize: 18,
              px: 4,
              py: 1.5,
              borderRadius: 3,
            }}
          >
            🎶 Click để bật nhạc Noel
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
