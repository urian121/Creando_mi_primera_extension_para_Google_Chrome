const nombrePersonas = [
  "Any",
  "Urian",
  "Brenda",
  "Uriany",
  "Juan",
  "María",
  "Pedro",
  "Ana",
  "Luis",
  "Laura",
  "Diego",
  "Marta",
  "Carlos",
  "Sofía",
];
const arrayTextarea = [
  "La constancia vence lo que la dicha no alcanza",
  "A veces es cuestion de dejarse llevar",
  "Por algo se empieza cuando se persigue un sueño",
];
const arrayURL = [
  "https://google.com",
  "https://youtube.com",
  "https://urianviera.com",
  "https://facebook.com",
];
const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

const fillInputs = (inputs) => {
  inputs.forEach((input) => {
    const inputType = input.type.toLowerCase();
    switch (inputType) {
      case "text":
        input.value = randomItem(nombrePersonas);
        break;
      case "textarea":
        input.value = randomItem(arrayTextarea);
        break;
      case "password":
        input.value = generarPassword(5);
        break;
      case "number":
      case "tel":
        // generando un numero aleatorio entero de 4 digitos
        input.value = Math.floor(Math.random() * 9000) + 1000;
        break;
      case "search":
        input.value = `Buscando a ${randomItem(nombrePersonas)}`;
        break;
      case "url":
        input.value = randomItem(arrayURL);
        break;
      case "time":
        input.value = randomTime();
        break;
      case "month":
        input.value = inputsMonth();
        break;
    }
    if (inputType == "checkbox" || inputType == "radio") {
      input.style.backgroundColor = "#0d6efd";
    } else {
      input.style.backgroundColor = "#f2f4f6";
    }
  });
};

/**
 * Funcion para generar email aleatorios
 */
const nombres = [
  "Urian",
  "Any",
  "Brenda",
  "Uriany",
  "Juan",
  "Pedro",
  "Maria",
  "Ana",
  "Luis",
  "Carlos",
  "WebDeveloper",
];
const proveedoresCorreo = ["gmail.com", "hotmail.com", "yahoo.com"];
const generarEmailAleatorio = () => {
  const proveedorIndex = Math.floor(Math.random() * proveedoresCorreo.length);
  const proveedor = proveedoresCorreo[proveedorIndex];
  const nombre = generarNombreAleatorio();

  let inputEmails = document.querySelectorAll('input[type="email"]');
  inputEmails.forEach((emails) => {
    emails.value = `${nombre}@${proveedor}`;
  });
};

function generarNombreAleatorio() {
  const index = Math.floor(Math.random() * nombres.length);
  return nombres[index];
}
//Fin de la funcion para generar emails aleatorios

/**
 * Funcion para generar password aleatoria,
 * Recibe una longitud
 */
const generarPassword = (longitud) => {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  const caracteresLength = caracteres.length;
  let resultado = "";

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteresLength);
    resultado += caracteres.charAt(indice);
  }

  return resultado;
};

/**
 * Llenado input[type="month"]
 */
const inputsMonth = () => {
  // Obtener el elemento de entrada
  let inputMonth = document.querySelectorAll('input[type="month"]');
  inputMonth.forEach((month_input) => {
    // Generar un año aleatorio entre 2020 y 2030
    let year = Math.floor(Math.random() * 11) + 2020;
    // Generar un mes aleatorio entre 1 y 12
    let month = Math.floor(Math.random() * 12) + 1;
    // Si el mes tiene un solo dígito, agregar un cero delante
    if (month < 10) {
      month = "0" + month;
    }
    // Construir la fecha en formato YYYY-MM
    let date = year + "-" + month;
    // Establecer el valor del input actual
    month_input.value = date;
  });
};

/**
 * Llenando input[type="time"]
 */
const randomTime = () => {
  const hours = String(Math.floor(Math.random() * 24)).padStart(2, "0");
  const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0");
  return `${hours}:${minutes}`;
};

/**
 * Llenado input[type=year]
 */
const randomYear = () => {
  const startYear = 2000;
  const endYear = new Date().getFullYear();
  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
  const randomIndex = Math.floor(Math.random() * years.length);
  const randomYear = years[randomIndex];

  return document.querySelectorAll("input[type=year]").forEach((year) => {
    year.value = randomYear;
    year.style.backgroundColor = "#f2f4f6";
  });
};

/**
 * Lenar todo los input[type="file"]
 */
const llenarInputsFile = () => {
  // Crear una imagen aleatoria utilizando una API
  fetch("https://picsum.photos/200")
    .then((response) => response.blob())
    .then((blob) => {
      // Seleccionar los inputs de tipo file
      const fileInputs = document.querySelectorAll('input[type="file"]');
      for (let i = 0; i < fileInputs.length; i++) {
        const fileInput = fileInputs[i];
        // Crear un objeto Blob con la imagen y establecer el valor del input de tipo file
        const fileBlob = new Blob([blob], { type: "image/jpeg" });
        const fileOptions = { type: "image/jpeg", lastModified: Date.now() };
        const imageFile = new File([fileBlob], "random_image.jpg", fileOptions);
        const fileList = new DataTransfer();
        fileList.items.add(imageFile);
        fileInput.files = fileList.files;
      }
    });
};


/**
 * Llenando todos los input[type=date]
 */
const inputsDate = () => {
  var inputDates = document.querySelectorAll('input[type="date"]');
  inputDates.forEach(function (inputDate) {
    // Generar un año aleatorio entre 2020 y 2030
    let year = Math.floor(Math.random() * 11) + 2020;
    // Generar un mes aleatorio entre 1 y 12
    let month = Math.floor(Math.random() * 12) + 1;
    // Generar un día aleatorio entre 1 y 28 (para evitar problemas con febrero)
    let day = Math.floor(Math.random() * 28) + 1;
    // Si el mes tiene un solo dígito, agregar un cero delante
    if (month < 10) {
      month = "0" + month;
    }
    // Si el día tiene un solo dígito, agregar un cero delante
    if (day < 10) {
      day = "0" + day;
    }
    // Construir la fecha en formato YYYY-MM-DD
    let date = year + "-" + month + "-" + day;
    // Establecer el valor del input
    inputDate.value = date;
  });
};

/**
 * Llenando todos los input[type=datetime-local]
 */
const inputsDatetimeLocal = () => {
  // Obtener todos los elementos de entrada de tipo "datetime-local"
  let inputDateTimeAll = document.querySelectorAll(
    'input[type="datetime-local"]'
  );

  // Recorrer todos los elementos de entrada de tipo "datetime-local"
  inputDateTimeAll.forEach((inputDateTime) => {
    // Generar un año aleatorio entre 2020 y 2030
    let year = Math.floor(Math.random() * 11) + 2020;
    // Generar un mes aleatorio entre 1 y 12
    let month = Math.floor(Math.random() * 12) + 1;
    // Generar un día aleatorio entre 1 y 28 (para evitar problemas con febrero)
    let day = Math.floor(Math.random() * 28) + 1;
    // Generar una hora aleatoria entre 0 y 23
    let hour = Math.floor(Math.random() * 24);
    // Generar un minuto aleatorio entre 0 y 59
    let minute = Math.floor(Math.random() * 60);
    // Si el mes tiene un solo dígito, agregar un cero delante
    if (month < 10) {
      month = "0" + month;
    }
    // Si el día tiene un solo dígito, agregar un cero delante
    if (day < 10) {
      day = "0" + day;
    }
    // Si la hora tiene un solo dígito, agregar un cero delante
    if (hour < 10) {
      hour = "0" + hour;
    }
    // Si el minuto tiene un solo dígito, agregar un cero delante
    if (minute < 10) {
      minute = "0" + minute;
    }
    // Construir la fecha en formato YYYY-MM-DDTHH:mm (formato requerido por datetime-local)
    let date = year + "-" + month + "-" + day + "T" + hour + ":" + minute;
    // Establecer el valor del input
    inputDateTime.value = date;
  });
};

/***
 * Agregar atributo selectd a la lista de option de forma aleatoria
 */
const marcarTodosSelect = () => {
  let selectsDom = Object.values(document.querySelectorAll("select"));
  selectsDom.forEach((items) => {
    let nameSelectDom = items.name;
    let selectNameDom = document.querySelector(
      `select[name='${nameSelectDom}']`
    );
    totalSelectOptionDom = selectNameDom.options.length;
    const randomSelectDom =
      Math.floor(Math.random() * totalSelectOptionDom) + 1;
    if (randomSelectDom < totalSelectOptionDom) {
      selectNameDom.options.item(randomSelectDom).selected = "selected";
    } else {
      selectNameDom.options.item(2).selected = "selected";
    }
  });
};

/**
 * Funcion para marcar y llenar checkbox y radios
 */
const marcarTodosCheckBoxsRadios = () => {
  // Recorriendo todos los checkbox y radios
  let inputsChecboxRadios = document.querySelectorAll(
    "input[type='checkbox'], input[type='radio']"
  );
  inputsChecboxRadios.forEach((input) => {
    input.checked = true;
  });
};

let llenarCampos = true;
window.document.querySelector(".miButton").addEventListener("click", (e) => {
  e.preventDefault();
  loader(true);

  if (llenarCampos) {
    document.querySelector(".miButton").innerHTML = "Limpiar mi formulario";
    const inputs = document.querySelectorAll(
      "input[type=text], input[type='checkbox'], " +
        "input[type='radio'], input[type='url'], " +
        "input[type='password'], input[type='search'], " +
        "input[type='time'], " +
        "input[type='number'], " +
        "input[type='month'], " +
        "input[type=tel], textarea"
    );

    fillInputs(inputs);
    marcarTodosSelect();
    randomYear();
    inputsMonth();
    inputsDate();
    inputsDatetimeLocal();
    marcarTodosCheckBoxsRadios();
    llenarInputsFile();
    generarEmailAleatorio();
    llenarCampos = false;
  } else {
    document.querySelector(".miButton").innerHTML = "Llenar mi formulario";
    limpiarCampos();
    llenarCampos = true;
  }

  setTimeout(function () {
    loader(false);
  }, 500);
});

const loader = (valor) => {
  let body = document.body;
  if (valor) {
    body.style.backgroundColor = "#fff";
    body.style.opacity = "0.5";
  } else {
    body.style.backgroundColor = "";
    body.style.opacity = "";
  }
};

function limpiarCampos() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    switch (input.type) {
      case "checkbox":
      case "radio":
        input.checked = false;
        input.style.backgroundColor = "";
        break;
      case "file":
        input.value = "";
        input.style.backgroundColor = "";
        break;
      default:
        input.value = "";
        input.style.backgroundColor = "";
        break;
    }
  });

  const selects = document.querySelectorAll("select");
  selects.forEach((select) => {
    select.selectedIndex = 0;
  });

  const textareas = document.querySelectorAll("textarea");
  textareas.forEach((textarea) => {
    textarea.value = "";
  });
}
