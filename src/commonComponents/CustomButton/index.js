import PropTypes from "prop-types";

import Button from "@mui/material/Button";

const CustomButton = ({ text, onClick, color }) => {
  return (
    <Button onClick={onClick} color={color} variant="contained">
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default CustomButton;
