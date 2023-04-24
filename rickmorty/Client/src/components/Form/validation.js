const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex = /^(?=.*\d)[A-Za-z\d]{6,10}$/;

export default function validate(userData) {
  const errors = {};
  if (!userData.name) {
    errors.name = "Se requiere un nombre";
  }

  if (!regexEmail.test(userData.username)) {
    errors.username = "Debe ser un correo electrónico";
  }
  if (userData.username.length >= 35) {
    errors.username = "usuario muy largo";
  }
  if (!passwordRegex.test(userData.password)) {
    errors.password =
      "la contraseña tiene que tener al menos un número.la contraseña tiene que tener al menos un número.";
  }

  return errors;
}
