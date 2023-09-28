// Función para obtener la fecha y hora actuales en formato inglés
export const getCurrentDateTime = () => {
    const currentDate = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false, // Usa el formato de 24 horas
    };
    const date = currentDate.toLocaleDateString("en-US", options);
    return {
      date,
      time: date.split(", ")[1], // Obtiene solo la hora
    };
  };

  export const getCurrentDateTimeUpdate = () => {
    const currentDate = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false, // Usa el formato de 24 horas
    };
    const date = currentDate.toLocaleDateString("en-US", options);
    return date
  };