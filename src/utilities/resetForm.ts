export const resetForm = (idForm: string) => {
  const reset = (
    document.getElementById(idForm) as HTMLFormElement
  ).reset();
  return reset;
};