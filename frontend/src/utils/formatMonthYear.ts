export function formatMonthYear(isoDate: string): string {
  const [year, month] = isoDate.split("T")[0].split("-");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthIndex = parseInt(month, 10) - 1;

  if (monthIndex < 0 || monthIndex > 11 || !year) return "Invalid date";

  return `${monthNames[monthIndex]} ${year}`;
}
