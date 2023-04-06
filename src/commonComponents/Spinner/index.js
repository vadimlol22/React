import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { styles } from "./styles";

const Spinner = () => {
  return (
    <Box sx={styles}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Spinner;
