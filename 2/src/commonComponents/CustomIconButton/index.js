import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomIconButton = ({ onClick, color }) => {
  return (
    <IconButton onClick={onClick} aria-label="delete" color={color}>
      <DeleteIcon />
    </IconButton>
  );
};

export default CustomIconButton;
