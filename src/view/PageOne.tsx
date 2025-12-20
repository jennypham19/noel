import { Box, Typography } from "@mui/material"
import image from "@/assets/imgs/b.jpg";
import image_1 from "@/assets/imgs/b.jpg";
import image_2 from "@/assets/imgs/b-2.jpg";
import image_3 from "@/assets/imgs/b-3.jpg";
import image_4 from "@/assets/imgs/b-4.jpg";
import image_5 from "@/assets/imgs/b-5.jpg";
import image_6 from "@/assets/imgs/b-6.jpg";
import image_7 from "@/assets/imgs/b-7.jpg";
import image_8 from "@/assets/imgs/b-8.jpg";
import image_9 from "@/assets/imgs/b-9.jpg";
import ImageSlideshow from "./components/ImageSlideshow";
import SentenceRevealLoop from "./components/SentenceRevealLoop";

const images = [image, image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9]

const PageOne = () => {
    return(
        <Box p={1} gap={2} display='flex' flexDirection='column'>
            <Box flexDirection='row' display='flex' alignItems='center' justifyContent='center'>
                🎄<Typography sx={{ color: '#832811ff' }} fontFamily='fantasy' mx={1.5} fontSize='30px'>
                    Merry Christmas
                </Typography>🎄
            </Box>
            <ImageSlideshow
                images={images}
                interval={4000}
            />
                <SentenceRevealLoop
                    sentences={[
                        "Chúc Bae một mùa Giáng sinh an lành, trái tim luôn ấm áp và ngập tràn tiếng cười 🎄😊",
                        "Mong Noel này mang đến cho Bae thật nhiều may mắn và những điều bất ngờ dễ thương ❄️🎁",
                        "Cảm ơn vì đã luôn ở bên cạnh suốt những năm qua, chúc tình bạn mình mãi bền lâu 💖🤝",
                        "Chúc Bae đạt được mọi điều mong muốn và luôn vững vàng trước mọi thử thách 🌟💪",
                        "Noel đến rồi, mong Bae luôn được yêu thương theo cách dịu dàng nhất 🎅💝",
                        "Chúc cô gái của chị một mùa đông không lạnh vì luôn có hạnh phúc bên cạnh ☃️🔥"
                    ]}
                    wordInterval={600} // thời gian từng từ xuất hiện
                    holdTime={3000}    // giữ nguyên câu cuối vài giây
                />
            <style>
                {`
                    @keyframes fadeIn {
                        to { opacity: 1; }
                    }
                `}
            </style>
        </Box>
    )
}

export default PageOne