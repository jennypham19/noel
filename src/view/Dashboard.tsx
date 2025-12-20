import { Box, Button, Typography } from "@mui/material";
import treeImg from "@/assets/imgs/noel.png";
import InputText from "./components/InputText";
import { useState } from "react";
import santa from "@/assets/imgs/santa.png";
import { useNavigate } from "react-router-dom";
import { useAudio } from "@/context/AudioContext";

const Dashboard = () => {
  const navigate = useNavigate()
  const [dob, setDob] = useState<string>('');
  const [dobError, setDobError] = useState<string>('');
  const [showSanta, setShowSanta] = useState(false);
  const { play } = useAudio();

  // Kiểm tra định dạng DD/MM/YYYY và hợp lệ về ngày/tháng/năm
  const isValidBirthDate = (input: string): boolean => {
    // Regex: ngày (01-31), tháng (01-12), năm (4 chữ số)
    const regex = /^(\d{2})\-(\d{2})\-(\d{4})$/;
    const match = input.match(regex);

    if (!match) return false;

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    // Kiểm tra tháng
    if (month < 1 || month > 12) return false;

    // Kiểm tra năm (ví dụ tuổi < 150 và < ngày hiện tại)
    const today = new Date();
    if (year < today.getFullYear() - 150 || year > today.getFullYear()) return false;

    // Kiểm tra ngày theo tháng
    const daysInMonth = new Date(year, month, 0).getDate(); // ngày cuối cùng của tháng
    if (day < 1 || day > daysInMonth) return false;

    // Kiểm tra không được lớn hơn ngày hiện tại
    const birthDate = new Date(year, month - 1, day);
    if (birthDate > today) return false;

    return true;
  }
  
  const handleClick = async() => {
    if(dob === ''){
        setDobError('Nhập thông tin ngày tháng năm sinh nhé')
        setShowSanta(true); // hiện ông già Noel
        return;
    }

    if (!isValidBirthDate(dob)) {
      setDobError("Ngày sinh không hợp lệ. Vui lòng nhập theo định dạng DD-MM-YYYY");
      return;
    }
    await play();
    switch (dob) {
      case '22-06-2001':
        return navigate(`/noel/page-one/${dob}`)
      case '30-04-2001':
        return navigate(`/noel/page-two/${dob}`);
      case '10-01-2001':
      default:
        return navigate(`/noel/page-three/${dob}`);
    }
  }

  return (
    <Box p={1} gap={2} display='flex' flexDirection='column'>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Box component="img" src={treeImg} sx={{ width: 300, height: 300 }} />
        </Box>
        <InputText
          label="Nhập thông tin"
          value={dob}
          name="dob"
          onInputChange={(value: any) => {
            setDob(value);
            setShowSanta(false);
            setDobError('')
          }}
          error={!!dobError}
          helperText={dobError}
        />
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: '#416327'}}
            onClick={handleClick}
          >
            Click
          </Button>          
        </Box>

        {/* Hiển thị ông già Noel khi input trống */}
        {showSanta && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 50,
              left: 0,
              animation: 'moveSanta 4s infinite alternate',
            }}
          >
            <Box position="relative">
              <Box component="img" src={santa} sx={{ width: 120, height: 120 }} />

              {/* Notification bubble lớn hơn */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -60,
                  right: -90,
                  width: 100,
                  minHeight: 70,
                  bgcolor: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  padding: '5px',
                  fontSize: '0.85rem',
                  lineHeight: 1.1,
                  boxShadow: '0 0 5px rgba(0,0,0,0.5)',
                  cursor: 'pointer',
                  wordWrap: 'break-word',
                }}
                onClick={() => setShowSanta(false)}
              >
                <Typography p={1} fontSize='13px'>Hãy nhập thông tin ngày tháng năm sinh vào ô input!</Typography>
              </Box>
            </Box>
          </Box>
        )}

        {/* CSS animation keyframes */}
        <style>
          {`
            @keyframes moveSanta {
              0% { left: 0; }
              50% { left: 50%; }
              100% { left: 80%; }
            }
          `}
        </style>
    </Box>
  );
};

export default Dashboard;
