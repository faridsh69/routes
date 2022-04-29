import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MuiTextFieldProps } from "@mui/x-date-pickers/internals/components/PureDateInput";

import { TimeFieldPropsType } from "@interfaces/TimeFieldPropsType";
import { MobileTimePicker } from "@mui/x-date-pickers";

const TimeField: FC<TimeFieldPropsType> = (props) => {
  const { defaultTime, label } = props;

  const [time, setTime] = useState<string | null>(defaultTime);

  const handleChange = (time: string | null) => {
    setTime(time);
  };

  const handleRenderInput = (props: MuiTextFieldProps) => <TextField {...props} />;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileTimePicker
        label={label}
        value={time}
        onChange={handleChange}
        renderInput={handleRenderInput}
      />
    </LocalizationProvider>
  );
};

export { TimeField };
