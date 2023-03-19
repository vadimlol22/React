import Button from "@mui/material/Button";

const CustomButton = ({ text, onClick, color }) => {
  return (
    <Button onClick={onClick} color={color} variant="contained">
      {text}
    </Button>
  );
};

export default CustomButton;

// CustomButton.propTypes = {
//   text: propTypes.string.isRequired,
//   onClick: propTypes.func.isRequired,
// };
