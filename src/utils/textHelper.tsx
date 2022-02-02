import { Box, Typography } from "@mui/material";
import { FieldError } from "react-hook-form";

const HelperText = ({ msg }: { msg: string }) => {
  return (
    <Box display="inline" fontWeight="400">
      <Typography variant="subtitle1">{msg}</Typography>
    </Box>
  );
};

export const textFieldError = (error?: FieldError) => {
  return error?.message
    ? { error: true, helperText: <HelperText msg={error.message} /> }
    : {};
};
