import { Box, Button, TextField, MenuItem } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import { timezones } from "mocks/timezones";

import { textFieldError } from "utils/textHelper";

import { User } from "../../types/user";

import {
  required,
  firstName,
  lastName,
  userName,
  phoneNumber,
} from "utils/validations";

type FormProps = {
  onSubmit: (values: User) => void;
  onClose: () => void;
};

const Form = ({ onSubmit, onClose }: FormProps) => {
  const { control, handleSubmit } = useForm<User>({
    defaultValues: {
      firstName: "",
      lastName: "",
      timezone: "",
      userName: "",
      phoneNumber: "",
      aboutMe: "",
    },
  });

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        rules={{
          ...required,
          ...firstName,
        }}
        render={({ field, fieldState }) => (
          <Box display="flex" flexDirection="column" width="100%">
            <TextField
              label="First Name"
              required
              margin="dense"
              {...textFieldError(fieldState.error)}
              {...field}
            />
          </Box>
        )}
      />
      <Controller
        name="lastName"
        control={control}
        rules={{
          ...lastName,
        }}
        render={({ field, fieldState }) => (
          <Box display="flex" flexDirection="column" width="100%">
            <TextField
              label="Last Name"
              margin="dense"
              {...textFieldError(fieldState.error)}
              {...field}
            />
          </Box>
        )}
      />
      <Controller
        name="timezone"
        control={control}
        render={({ field, fieldState }) => (
          <Box display="flex" flexDirection="column" width="100%">
            <TextField
              label="Time zone"
              margin="dense"
              select
              {...textFieldError(fieldState.error)}
              {...field}
            >
              {timezones.map((timezone) => (
                <MenuItem key={timezone} value={timezone}>
                  {timezone}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}
      />

      <Controller
        name="userName"
        control={control}
        rules={{
          ...required,
          ...userName,
        }}
        render={({ field, fieldState }) => (
          <Box display="flex" flexDirection="column" width="100%">
            <TextField
              label="User Name"
              required
              margin="dense"
              {...textFieldError(fieldState.error)}
              {...field}
            />
          </Box>
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        rules={{
          ...phoneNumber,
        }}
        render={({ field, fieldState }) => (
          <Box display="flex" flexDirection="column" width="100%">
            <TextField
              label="Phone number"
              margin="dense"
              {...textFieldError(fieldState.error)}
              {...field}
            />
          </Box>
        )}
      />

      <Controller
        name="aboutMe"
        control={control}
        rules={{
          maxLength: {
            value: 1000,
            message: "About me should be less than 1000 symbols",
          },
        }}
        render={({ field, fieldState }) => (
          <Box display="flex" flexDirection="column" width="100%">
            <TextField
              label="About me"
              margin="dense"
              multiline
              rows={5}
              {...textFieldError(fieldState.error)}
              {...field}
            />
          </Box>
        )}
      />

      <Box display="flex" justifyContent="space-between" mt={3}>
        <Box>
          <Button type="button" variant="contained" onClick={onClose}>
            Close
          </Button>
        </Box>
        <Box>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Form;
