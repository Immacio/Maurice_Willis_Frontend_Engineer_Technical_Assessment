/* eslint-disable no-param-reassign */
const convertNumToTime = (number: number): string => {
  // Separate the int from the decimal part
  const hour = Math.floor(number);
  let decpart = number - hour;

  const min = 1 / 60;
  // Round to nearest minute
  decpart = min * Math.round(decpart / min);

  let minute = `${Math.floor(decpart * 60)}`;

  // Add padding if need
  if (minute.length < 2) {
    minute = `0${minute}`;
  }

  // Concat hours and minutes
  const time = `${hour}:${minute}`;

  return time;
};

export default convertNumToTime;
