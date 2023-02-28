export function ifNullElseString(value: any){

  if(value === null){
    return '-'
  }
  return value
}