import React, { ChangeEvent, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { SCHEDULE_STRATEGIES, SCHEDULE_STRATEGY_FIXED } from "@constants/strategySchedules";
import { ScheduleStrategyType } from "@interfaces/ScheduleStrategyType";
import { stopsData } from "@constants/stopsData";
import { StopDetails } from "./StopDetails";

const RouteDetails = () => {
  const [scheduleStrategy, setScheduleStrategy] =
    useState<ScheduleStrategyType>(SCHEDULE_STRATEGY_FIXED);
  const [canAddCargo, setCanAddCargo] = useState<boolean>(false);

  const handleChangeCargoCheckbox = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setCanAddCargo(checked);
  };

  const handleChangeScheduleStrategy = (event: SelectChangeEvent<ScheduleStrategyType>) => {
    setScheduleStrategy(event.target.value as ScheduleStrategyType);
  };

  return (
    <>
      <Typography variant="h5">Route</Typography>

      <FormGroup>
        <FormControlLabel
          control={<Checkbox value={canAddCargo} onChange={handleChangeCargoCheckbox} />}
          label="Can Add Cargo"
        />
      </FormGroup>

      <FormControl>
        <InputLabel>Schedule Strategy</InputLabel>
        <Select
          value={scheduleStrategy}
          label="Schedule Strategy"
          onChange={handleChangeScheduleStrategy}
        >
          {SCHEDULE_STRATEGIES.map((scheduleStrategy) => (
            <MenuItem key={scheduleStrategy} value={scheduleStrategy}>
              {scheduleStrategy}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <hr />
      {stopsData.map((stopData) => {
        return <StopDetails key={stopData.id} {...stopData} canAddCargo />;
      })}
    </>
  );
};

export { RouteDetails };
