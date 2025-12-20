import { Box, Typography } from "@mui/material"
import image from "@/assets/imgs/d.jpg";
import image_1 from "@/assets/imgs/d.jpg";
import image_2 from "@/assets/imgs/d-2.jpg";
import image_3 from "@/assets/imgs/d-3.jpg";
import image_4 from "@/assets/imgs/d-4.jpg";
import image_5 from "@/assets/imgs/d-5.jpg";
import image_6 from "@/assets/imgs/d-6.jpg";
import image_7 from "@/assets/imgs/d-7.jpg";
import image_8 from "@/assets/imgs/d-8.jpg";
import image_9 from "@/assets/imgs/d-9.jpg";
import ImageSlideshow from "./components/ImageSlideshow";
import SentenceRevealLoop from "./components/SentenceRevealLoop";

const images = [image, image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9]

const PageThree = () => {
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
                        "Chúc mày một Giáng sinh ngập tràn yêu thương và những cái ôm ấm áp 🤗🎄",
                        "Mong Noel này sẽ là khởi đầu cho một năm mới thật rực rỡ ✨🎉",
                        "Chúc mày luôn mạnh mẽ, dịu dàng và hạnh phúc theo cách riêng của mình 🌸💖",
                        "Giáng sinh vui vẻ nhé, mong mọi buồn phiền đều ở lại phía sau 🚶‍♀️🌙",
                        "Chúc mày luôn có người đồng hành và không bao giờ cảm thấy cô đơn 🤍👫",
                        "Noel đến rồi, mong cuộc sống của mày lúc nào cũng ngọt ngào và ấm áp 🍰🔥"
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

export default PageThree