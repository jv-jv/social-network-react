import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export function timePassed(timestamp) {
  return dayjs(timestamp).fromNow()
}
