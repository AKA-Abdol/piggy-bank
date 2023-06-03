import { getMonthName } from "../../utils/date";
import { trimName } from "../../utils/common";

const MONTH_TO_WORD_COUNT = 3;
const MONTH_MAX_WORD_COUNT = 5;

function DateShow({ date }) {
  return (
    <div className="flex flex-col border-2 border-white text-white py-2 px-4 bg-secondary rounded-2xl items-center">
      <div className="font-bold">
        {trimName(
          getMonthName(date),
          MONTH_MAX_WORD_COUNT,
          MONTH_TO_WORD_COUNT
        )}
      </div>
      <div className="text-xs">{date.getFullYear()}</div>
      <div className="text-2xl font-bold">{date.getDate()}</div>
    </div>
  );
}

export default DateShow;
