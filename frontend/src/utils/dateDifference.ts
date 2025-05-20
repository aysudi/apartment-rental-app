import dayjs from "dayjs";

function dateDifferenceInDays(date1: Date | null, date2: Date | null): number {
  if (!date1 || !date2) return NaN;

  const parsedDate1 = dayjs(date1);
  const parsedDate2 = dayjs(date2);

  return parsedDate2.diff(parsedDate1, "day") + 1;
}

export default dateDifferenceInDays;
