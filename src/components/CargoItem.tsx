import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CargoItem = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleCargoForm = () => {
    setOpen(!open);
  };

  return (
    <>
      {!open ? (
        <Button color="warning" onClick={toggleCargoForm}>
          + Add Cargo
        </Button>
      ) : (
        <Divider />
      )}

      {open ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="p" variant="h6" color="secondary">
              Cargo Item
            </Typography>
          </Grid>
          <Grid item sm={5} xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor="unloading-stop">Unloading stop</FormLabel>
              <Select id="unloading-stop" displayEmpty>
                <MenuItem disabled>
                  <em>Please select an option</em>
                </MenuItem>
                {["Unloading stop 1", "Unloading stop 2", "Unloading stop 3"].map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControl fullWidth>
              <FormLabel htmlFor="type">Type</FormLabel>
              <Select id="type" displayEmpty>
                <MenuItem disabled>
                  <em>Please select an option</em>
                </MenuItem>
                {["Unloading stop 1", "Unloading stop 2", "Unloading stop 3"].map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={3} sm={3} xs={12}>
            <FormControl variant="standard" fullWidth>
              <FormLabel htmlFor="po-number">PO number</FormLabel>
              <TextField id="po-number" type="integer" />
            </FormControl>
          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            <FormControl variant="standard" fullWidth>
              <FormLabel htmlFor="quantity">Quantity</FormLabel>
              <TextField id="quantity" type="integer" />
            </FormControl>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <FormControl
              variant="outlined"
              fullWidth
              style={{ borderRight: "2px solid #eee", paddingRight: "10px" }}
            >
              <FormLabel htmlFor="total-weight">Total weight:</FormLabel>
              <OutlinedInput
                id="total-weight"
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              />
            </FormControl>
          </Grid>
          <Grid item md={7} xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <FormLabel htmlFor="length">Length</FormLabel>
                  <OutlinedInput
                    id="length"
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={4} xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <FormLabel htmlFor="width">Width</FormLabel>
                  <OutlinedInput
                    id="width"
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={4} xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <FormLabel htmlFor="height">Height</FormLabel>
                  <OutlinedInput
                    id="height"
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={3}>
            <Button onClick={toggleCargoForm}>Save</Button>
            <Button onClick={toggleCargoForm} color="secondary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
      <Divider />
    </>
  );
};

export { CargoItem };
