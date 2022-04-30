import { FC } from "react";
import { Badge, Grid, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { DateField } from "@components/partials/DateField";
import { TimeField } from "@components/partials/TimeField";
import { CargoItem } from "@components/CargoItem";
import {
  SCHEDULE_STRATEGY_FLEXIBLE,
  SCHEDULE_STRATEGY_SEMI_FLEXIBLE,
} from "@constants/strategySchedules";
import { StopDetailsPropsType } from "@interfaces/StopDetailsPropsType";

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
  const dateTimeFieldsGridSize = editableTime ? 4 : 12;

  return (
    <Grid container mt={5} mb={5} columnSpacing={{ xs: 1, sm: 2 }}>
      <Grid item md={5}>
        <Grid container>
          <Grid item xs={1}>
            <Badge badgeContent={isLastStop ? "Final" : index + 1} color="secondary">
              <LocationOnIcon color="action" />
            </Badge>
          </Grid>
          <Grid item xs={11}>
            <Typography
              component="p"
              variant="h6"
            >{`${postalCode} ${city}, ${country}`}</Typography>
            <Typography component="p">{title}</Typography>
            <Typography component="p">
              <Typography component="span" mr={2}>
                Opening hours:
              </Typography>
              <Typography component="span">
                {openingHoursFrom}-{openingHoursTo}
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={7}>
        <Grid container columnSpacing={{ xs: 1 }}>
          {editableDate ? (
            <Grid item xs={dateTimeFieldsGridSize}>
              <DateField defaultDate={date} label={index === 0 ? "Pick up date" : "Arrival date"} />
            </Grid>
          ) : (
            "Estimated arrival - "
          )}

          {editableTime ? (
            <>
              <Grid item xs={dateTimeFieldsGridSize}>
                <TimeField defaultTime={timeFrom} label="From" />
              </Grid>
              <Grid item xs={dateTimeFieldsGridSize}>
                <TimeField defaultTime={timeTo} label="To" />
              </Grid>
            </>
          ) : (
            ""
          )}
        </Grid>
        <Grid container mt={3} mb={5}>
          <Button color="warning">+ Gate reference</Button>
        </Grid>
      </Grid>
      <Grid xs={12}>{canAddCargo ? <CargoItem /> : ""}</Grid>
    </Grid>
  );
};

export { StopDetails };
