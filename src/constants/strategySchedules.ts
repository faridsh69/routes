import { ScheduleStrategyType } from "@interfaces/ScheduleStrategyType";

const SCHEDULE_STRATEGY_FIXED: ScheduleStrategyType = "Fixed";
const SCHEDULE_STRATEGY_SEMI_FLEXIBLE: ScheduleStrategyType = "Semi Flexible";
const SCHEDULE_STRATEGY_FLEXIBLE: ScheduleStrategyType = "Flexible";

const SCHEDULE_STRATEGIES: ScheduleStrategyType[] = [
  SCHEDULE_STRATEGY_FIXED,
  SCHEDULE_STRATEGY_SEMI_FLEXIBLE,
  SCHEDULE_STRATEGY_FLEXIBLE,
];

export {
  SCHEDULE_STRATEGIES,
  SCHEDULE_STRATEGY_FIXED,
  SCHEDULE_STRATEGY_SEMI_FLEXIBLE,
  SCHEDULE_STRATEGY_FLEXIBLE,
};
