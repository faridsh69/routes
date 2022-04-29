import React, { ChangeEvent, FC, useState } from "react";
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

import { StopDetails } from "@components/StopDetails";
import { SCHEDULE_STRATEGIES, SCHEDULE_STRATEGY_FLEXIBLE } from "@constants/strategySchedules";
import { ScheduleStrategyType } from "@interfaces/ScheduleStrategyType";
import { RouteDetailsPropsType } from "@interfaces/RouteDetailsPropsType";

const RouteDetails: FC<RouteDetailsPropsType> = (props) => {
  const { stops } = props;

  const [scheduleStrategy, setScheduleStrategy] = useState<ScheduleStrategyType>(
    SCHEDULE_STRATEGY_FLEXIBLE
  );
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
      {stops.map((stopData, index) => {
        const isLastStop = stops.length === index + 1;
        const StopDetailsProps = { ...stopData, scheduleStrategy, canAddCargo, index, isLastStop };

        return <StopDetails key={stopData.id} {...StopDetailsProps} />;
      })}
    </>
  );
};

export { RouteDetails };
