export function cleanInputForNull(inputValue : string | undefined){
  

  if (inputValue === undefined) {
    inputValue = undefined;
  }
  
  return inputValue
}