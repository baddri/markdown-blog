import dateFormat from "dateformat"

export default function formatTime(time) {
  return dateFormat(Date.parse(time), "d mmmm yyyy")
}
