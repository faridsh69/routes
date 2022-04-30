import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MuiTextFieldProps } from "@mui/x-date-pickers/internals/components/PureDateInput";

import { DateFieldPropsType } from "@interfaces/DateFieldPropsType";

const DateField: FC<DateFieldPropsType> = (props) => {
  const { defaultDate, label } = props;

  const [date, setDate] = useState<string | null>(defaultDate);

  const handleChange = (date: string | null) => {
    setDate(date);
  };

  const handleRenderInput = (props: MuiTextFieldProps) => (
    <TextField sx={{ width: "100%" }} {...props} />
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        label={label}
        value={date}
        onChange={handleChange}
        renderInput={handleRenderInput}
      />
    </LocalizationProvider>
  );
};

export { DateField };
