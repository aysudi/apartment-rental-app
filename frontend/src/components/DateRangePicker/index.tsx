import { useState } from "react";
import dayjs from "dayjs";
import getDaysInMonth from "@/utils/getDaysInMonth";

const isSameDate = (d1: Date, d2: Date) =>
  d1.toDateString() === d2.toDateString();

const isInRange = (date: Date, start: Date | null, end: Date | null) => {
  if (!start || !end) return false;
  return date > start && date < end;
};

type Props = {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
};

const DateRangeCalendar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Props) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());

  const days = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (day: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day < startDate) {
      setStartDate(day);
      setEndDate(null);
    } else {
      setEndDate(day);
    }
  };

  return (
    <div className="p-4 w-full max-w-md bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Select Date Range</h2>

      <div className="flex justify-between mb-2">
        <select
          className="border px-2 py-1 rounded"
          value={currentMonth}
          onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {dayjs(new Date(currentYear, i)).format("MMMM")}
            </option>
          ))}
        </select>
        <select
          className="border px-2 py-1 rounded"
          value={currentYear}
          onChange={(e) => setCurrentYear(parseInt(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={today.getFullYear() + i}>
              {today.getFullYear() + i}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600 font-medium">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2 text-center">
        {[...Array(firstDayIndex)].map((_, idx) => (
          <div key={idx}></div>
        ))}
        {days.map((day, idx) => {
          const isSelected =
            (startDate && isSameDate(day, startDate)) ||
            (endDate && isSameDate(day, endDate));
          const inRange = isInRange(day, startDate, endDate);

          return (
            <div
              key={idx}
              onClick={() => handleDateClick(day)}
              className={`py-2 rounded-full cursor-pointer transition-all 
                ${
                  isSelected
                    ? "bg-[#FF9A1E] text-white font-bold"
                    : inRange
                    ? "bg-yellow-100"
                    : "hover:bg-gray-200"
                }`}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DateRangeCalendar;
