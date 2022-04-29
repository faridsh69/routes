import {
  SCHEDULE_STRATEGY_FLEXIBLE,
  SCHEDULE_STRATEGY_SEMI_FLEXIBLE,
} from "@constants/strategySchedules";
import { StopDetailsPropsType } from "@interfaces/StopDetailsPropsType";
import { Grid, Typography } from "@mui/material";
import { FC } from "react";

const StopDetails: FC<StopDetailsPropsType> = (props) => {
  const {
    country,
    city,
    postalCode,
    title,
    openingHoursFrom,
    openingHoursTo,
    date,
    timeFrom,
    timeTo,
    canAddCargo,
    scheduleStrategy,
    index,
    isLastStop,
  } = props;

  const editableDate: boolean = scheduleStrategy === SCHEDULE_STRATEGY_FLEXIBLE || index === 0;
  const editableTime: boolean =
    scheduleStrategy === SCHEDULE_STRATEGY_FLEXIBLE ||
    (index === 0 && scheduleStrategy === SCHEDULE_STRATEGY_SEMI_FLEXIBLE);

  return (
    <Grid mb={5}>
      {isLastStop ? "Final" : index + 1}
      <Typography component="p">{`${postalCode} ${city}, ${country}`}</Typography>
      <Typography component="p">{title}</Typography>
      <Typography component="p">
        Opening hours:
        <span>
          {openingHoursFrom}-{openingHoursTo}
        </span>
      </Typography>
      {editableDate ? (
        <>
          {index === 0 ? "Pick up date" : "Arrival date"}
          <input defaultValue={date as string} />
        </>
      ) : (
        "Estimated arrival - "
      )}
      {editableTime ? (
        <>
          <input defaultValue={timeFrom as number} />
          <input defaultValue={timeTo as number} />
        </>
      ) : (
        ""
      )}
      <button>+ Gate reference</button>
      {canAddCargo ? "canAddCargo" : "no cargo"}
    </Grid>
  );
};

export { StopDetails };
