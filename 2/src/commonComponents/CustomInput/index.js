import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CustomInput = ({ type, name, value, onChange }) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "32ch",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        color="secondary"
        id="outlined-basic"
        label="Task"
        variant="outlined"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default CustomInput;
