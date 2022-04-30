import React, { ChangeEvent, FC, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { StopDetails } from "@components/StopDetails";
import { SCHEDULE_STRATEGIES, SCHEDULE_STRATEGY_FLEXIBLE } from "@constants/strategySchedules";
import { ScheduleStrategyType } from "@interfaces/ScheduleStrategyType";
import { RouteDetailsPropsType } from "@interfaces/RouteDetailsPropsType";

const RouteDetails: FC<RouteDetailsPropsType> = (props) => {
  const { stops } = props;

  const [scheduleStrategy, setScheduleStrategy] = useState<ScheduleStrategyType>(
    SCHEDULE_STRATEGY_FLEXIBLE
  );
  const [canAddCargo, setCanAddCargo] = useState<boolean>(true);

  const handleChangeCargoCheckbox = (event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setCanAddCargo(checked);
  };

  const handleChangeScheduleStrategy = (event: SelectChangeEvent<ScheduleStrategyType>) => {
    setScheduleStrategy(event.target.value as ScheduleStrategyType);
  };

  return (
    <>
      <Grid container mt={5} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={4} md={6}>
          <Typography variant="h4">Route</Typography>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <FormControl sx={{ minWidth: "10rem" }}>
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
        </Grid>
        <Grid item xs={12} md={3}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={canAddCargo} onChange={handleChangeCargoCheckbox} />}
              label="Can Add Cargo"
            />
          </FormGroup>
        </Grid>
      </Grid>

      {stops.map((stopData, index) => {
        const isLastStop = stops.length === index + 1;
        const StopDetailsProps = { ...stopData, scheduleStrategy, canAddCargo, index, isLastStop };

        return <StopDetails key={stopData.id} {...StopDetailsProps} />;
      })}
    </>
  );
};

export { RouteDetails };
