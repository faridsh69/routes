export type StopDetailsPropsType = {
  id: number;
  country: string;
  city: string;
  postalCode: number;
  title: string;
  openingHoursFrom: number;
  openingHoursTo: number;
  date: string | null;
  timeFrom: number | null;
  timeTo: number | null;
  canAddCargo: boolean;
};
