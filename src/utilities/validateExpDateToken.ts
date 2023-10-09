
export const validateExpDateToken = (exp: number) => {

    // Obtener la fecha de expiración como un objeto Date
    const expirationDate = new Date(exp * 1000); // Multiplicar por 1000 para convertir segundos en milisegundos
  
    // Obtener la fecha actual
    const currentDate = new Date();

    // Comparar la fecha actual con la fecha de expiración
    if (currentDate < expirationDate) {
      // El token no ha expirado
      return false
    } else {
      // El token ha expirado
      console.log('El token ha expirado');
      return true
    }
  }
