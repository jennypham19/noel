import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface SentenceRevealLoopProps {
  sentences: string[];
  wordInterval?: number; // ms giữa các từ xuất hiện
  holdTime?: number;     // ms giữ nguyên câu cuối cùng
}

const SentenceRevealLoop = ({
  sentences,
  wordInterval = 500,
  holdTime = 3000,
}: SentenceRevealLoopProps) => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [visibleWords, setVisibleWords] = useState(1);
  const [showFull, setShowFull] = useState(false);

  const words = sentences[sentenceIndex].split(" ");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!showFull) {
      timer = setTimeout(() => {
        if (visibleWords < words.length) {
          setVisibleWords(visibleWords + 1);
        } else {
          setShowFull(true);
        }
      }, wordInterval);
    } else {
      timer = setTimeout(() => {
        // chuyển sang câu tiếp theo hoặc quay lại câu đầu
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
        setVisibleWords(1);
        setShowFull(false);
      }, holdTime);
    }

    return () => clearTimeout(timer);
  }, [visibleWords, showFull, sentenceIndex, words.length, sentences.length, wordInterval, holdTime]);

  return (
      <Typography fontSize='15px' sx={{ fontWeight: 700, lineHeight: 1.4, whiteSpace: 'pre-wrap' }}>
        {showFull
          ? sentences[sentenceIndex]
          : words.slice(0, visibleWords).join(" ")}
      </Typography>
  );
};

export default SentenceRevealLoop;
