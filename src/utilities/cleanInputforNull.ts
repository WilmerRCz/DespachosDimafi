export function cleanInputForNull(inputValue : string | null){
  

  if (inputValue === '') {
    inputValue = null;
  }
  
  return inputValue
}