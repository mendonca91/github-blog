import moment from "moment";

export function DateFormatter(date: string) {
  return moment(date).fromNow();
}