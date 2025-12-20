import { Box, Typography } from "@mui/material"
import image from "@/assets/imgs/t.jpg";
import image_1 from "@/assets/imgs/t-1.jpg";
import image_2 from "@/assets/imgs/t-2.jpg";
import image_3 from "@/assets/imgs/t-3.jpg";
import image_4 from "@/assets/imgs/t-4.jpg";
import image_5 from "@/assets/imgs/t-5.jpg";
import image_6 from "@/assets/imgs/t-6.jpg";
import image_7 from "@/assets/imgs/t-7.jpg";
import image_8 from "@/assets/imgs/t-8.jpg";
import image_9 from "@/assets/imgs/t-9.jpg";
import image_10 from "@/assets/imgs/t-10.jpg";
import image_11 from "@/assets/imgs/t-11.jpg";
import ImageSlideshow from "./components/ImageSlideshow";
import SentenceRevealLoop from "./components/SentenceRevealLoop";

const images = [image, image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10, image_11]

const PageTwo = () => {
    return(
        <Box sx={{ width: { xs: '100%', md: 430 } }} p={1} gap={2} display='flex' flexDirection='column'>
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
                        "Giáng sinh này chúc cậu luôn cười thật tươi và sống đúng với những gì mình yêu thích 😄🎄",
                        "Mong những điều tốt đẹp nhất sẽ gõ cửa nhà cậu trong mùa lễ hội này 🚪✨",
                        "Chúc cậu luôn giữ được năng lượng tích cực và niềm tin vào bản thân 💫🌈",
                        "Noel an lành nhé, mong mọi áp lực đều tan biến như tuyết ❄️😌",
                        "Chúc cậu có thật nhiều khoảnh khắc ấm áp bên gia đình và bạn bè 🏡❤️",
                        "Cầu mong mọi giấc mơ của cậu sẽ từng bước trở thành hiện thực 🎯🌟"
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

export default PageTwo