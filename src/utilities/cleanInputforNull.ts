export function cleanInputForNull(inputValue : string | undefined){
  

  if (inputValue === '') {
    inputValue = undefined;
  }
  
  return inputValue
}