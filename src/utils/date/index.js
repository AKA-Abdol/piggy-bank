import { month } from "./statics";
export const getMonthName = (date) => month[date.getMonth()];