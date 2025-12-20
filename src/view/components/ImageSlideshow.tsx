import { Box } from "@mui/material";
import { useEffect, useState } from "react";

interface ImageSlideshowProps {
  images: string[];
  interval?: number; // thời gian đổi ảnh (ms)
}

const ImageSlideshow = ({
  images,
  interval = 3000,
}: ImageSlideshowProps) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false); // bắt đầu fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setVisible(true); // fade in ảnh mới
      }, 500); // thời gian fade out
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 300, md: 500 },
        position: "relative",
        overflow: "hidden",
        borderRadius: 5
      }}
    >
      <Box
        component="img"
        src={images[index]}
        alt=""
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
          transition: "all 0.5s ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-50px)"
        }}
      />
    </Box>
  );
};

export default ImageSlideshow;
