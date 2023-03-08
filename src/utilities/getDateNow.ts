import { convertDate } from "./convertDate"

export const getDateNow = () => {
  const date = new Date()
  const dateString = date.toISOString()
  
  return dateString
}