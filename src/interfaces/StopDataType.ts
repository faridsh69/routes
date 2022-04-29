import { StopDetailsPropsType } from "./StopDetailsPropsType";

export type StopDataTyp = Omit<
  StopDetailsPropsType,
  "canAddCargo" | "scheduleStrategy" | "index" | "isLastStop"
>;
