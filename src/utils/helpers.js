export const getFullTime = (dateTimeStr) => {
  const date = new Date(dateTimeStr);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const timeStr = `${hours}:${minutes}`;
  return timeStr;
};
