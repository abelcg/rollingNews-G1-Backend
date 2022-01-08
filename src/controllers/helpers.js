const campoRequerido = (valor) => {
    if (valor.trim().length > 0) {
      return true;
    } else {
      return false;
    }
  };
  
  const validarFecha = (valor) => {
    // validar con expresion regular
    let patron = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  
    if (patron.test(valor)) {
      return true;
    } else {
      return false;
    }
  };
  
  const validarURL = (valor) => {
    // validar URL con una expresión regular
  
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if (valor.trim().length != "" && patron.test(valor)) {
      return true;
    } else {
      return false;
    }
  };
  
  const validarRichText = (value) => {
    if (value != "") {
      return true;
    } else {
      return false;
    }
  };
  
  export { campoRequerido, validarFecha, validarRichText, validarURL };
  