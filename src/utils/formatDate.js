import { format } from "date-fns";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return format(date, "MMM dd yyyy KK:mm aa");
};

export default formatDate;
