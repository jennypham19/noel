import { Box} from "@mui/material";
import Snowfall from "react-snowfall";
import backgroundImg from "@/assets/imgs/images.jpg";
import snow from "@/assets/imgs/hoa-tuyet.png";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
                    p: 1.5,
                }}
            >
                <Outlet/>
            </Box>
        </Box>
    )
}

export default DashboardLayout;