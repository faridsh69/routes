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
  } = props;

  return (
    <Grid mb={5}>
      <Typography component="p">{`${postalCode} ${city}, ${country}`}</Typography>
      <Typography component="p">{title}</Typography>
      <Typography component="p">
        Opening hours:
        <span>
          {openingHoursFrom}-{openingHoursTo}
        </span>
      </Typography>
      <input defaultValue={date} />
      <input defaultValue={timeFrom} />
      <input defaultValue={timeTo} />
      {canAddCargo ? "canAddCargo" : "no cargo"}
    </Grid>
  );
};

export { StopDetails };
