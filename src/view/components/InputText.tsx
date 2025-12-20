import { TextField } from "@mui/material";

interface InputTextProps{
    onInputChange: (value: any) => void;
    name: string,
    value: string;
    error?: boolean,
    helperText?: string;
    label: string;
    disabled?: boolean;
    placeholder?: string;
}

const InputText = (props: InputTextProps) => {
    const { onInputChange, name, value, error, helperText, label, disabled, placeholder = 'Nhập thông tin' } = props;
    return (
        <TextField
            placeholder={placeholder}
            label={label}
            name={name}
            type="text"
            value={value}
            error={error}
            helperText={helperText}
            disabled={disabled}
            onChange={(e) => onInputChange(e.target.value)}
            InputProps={{
                sx:{
                    "& .MuiOutlinedInput-notchedOutline":{
                        border: "1px solid rgb(53, 50, 50)",
                        borderRadius:"8px",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid rgb(53, 50, 50)",
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: "1px solid rgb(53, 50, 50)",
                    },
                    color: 'black',
                },
            }} 
        />
    )
}

export default InputText