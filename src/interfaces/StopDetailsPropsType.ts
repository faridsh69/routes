import { ScheduleStrategyType } from "./ScheduleStrategyType";

export type StopDetailsPropsType = {
  id: number;
  country: string;
  city: string;
  postalCode: number;
  title: string;
  openingHoursFrom: string;
  openingHoursTo: string;
  date: string | null;
  timeFrom: string | null;
  timeTo: string | null;
  canAddCargo: boolean;
  scheduleStrategy: ScheduleStrategyType;
  index: number;
  isLastStop: boolean;
};
