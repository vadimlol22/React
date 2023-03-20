import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import PropTypes from "prop-types";

const CustomIconButton = ({ onClick, color }) => {
  return (
    <IconButton onClick={onClick} aria-label="delete" color={color}>
      <DeleteIcon />
    </IconButton>
  );
};

CustomIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default CustomIconButton;
