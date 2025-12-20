import { Box, Button } from "@mui/material";
import Snowfall from "react-snowfall";
import { useEffect, useRef, useState } from "react";

import backgroundImg from "@/assets/imgs/images.jpg";
import musicMp3 from "@/assets/video/hoa-nhip-giang-sinh.mp3";
import snow from "@/assets/imgs/hoa-tuyet.png";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [userInteracted, setUserInteracted] = useState(false);

    // useEffect(() => {
    //     const audio = new Audio(musicMp3);
    //     audio.loop = true;
    //     audio.volume = 0.6;
    //     audioRef.current = audio;

    //     return () => {
    //     audio.pause();
    //     audioRef.current = null;
    //     };
    // }, []);

    const startMusic = async () => {
        if (!audioRef.current) return;

        try {
        await audioRef.current.play();
        setUserInteracted(true);
        } catch (err) {
        console.warn("Autoplay bị chặn:", err);
        }
    };

    const snowflake1 = document.createElement('img')
    snowflake1.src = snow;
    const snowflake2 = document.createElement('img')
    snowflake2.src = snow

    const images = [snowflake1, snowflake2]
    return(
        <Box
            sx={{
                position: "relative",
                height: "100%",
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
            }}
        >
            <Snowfall
                snowflakeCount={120}
                color="#dee4fd"
                style={{
                    position: "fixed",
                    zIndex: 1,
                }}
                radius={[2,18]}
                images={images}
            />

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
                <Outlet/>
            </Box>

            {/* 🚨 Overlay bật nhạc */}
            {/* {!userInteracted && (
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
            )} */}
        </Box>
    )
}

export default DashboardLayout;