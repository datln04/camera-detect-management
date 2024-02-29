import { format, parseISO } from "date-fns";

export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const formatDate = (originalDateString) => {
  const date = parseISO(originalDateString);

  // Formatting the Date object into the desired format
  // "HH:mm:ss dd/MM/yyyy" will create a time like "00:00:00 01/01/0001"
  return format(date, "HH:mm:ss dd/MM/yyyy");
};
