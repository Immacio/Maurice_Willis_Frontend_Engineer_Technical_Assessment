const sortDays = (a: string, b: string): number => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const aIndex = days.indexOf(a);
  const bIndex = days.indexOf(b);

  if (aIndex === bIndex) {
    return 0;
  }

  return aIndex < bIndex ? 0 : 1;
};

export default sortDays;
