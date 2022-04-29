import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { SCHEDULE_STRATEGIES, SCHEDULE_STRATEGY_FIXED } from "@constants/strategySchedules";
import { ScheduleStrategyType } from "@interfaces/ScheduleStrategyType";

const RouteDetails = () => {
  const [scheduleStrategy, setScheduleStrategy] =
    useState<ScheduleStrategyType>(SCHEDULE_STRATEGY_FIXED);

  const handleChangeScheduleStrategy = (event: SelectChangeEvent<ScheduleStrategyType>) => {
    setScheduleStrategy(event.target.value as ScheduleStrategyType);
  };
  return (
    <>
      <Typography variant="h5" component="div" gutterBottom sx={{ fontSize: "2rem" }}>
        Route
      </Typography>
      <FormControl sx={{ minWidth: 140 }} size="small">
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
    </>
  );
};

export { RouteDetails };
