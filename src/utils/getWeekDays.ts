export const getWeekDays = (date: Date): Date[] =>
  Array.from({ length: 7 }).map((_, index) => {
    const day = new Date(date);
    day.setDate(day.getDate() + index + 1);
    return day;
  });

export default getWeekDays;
