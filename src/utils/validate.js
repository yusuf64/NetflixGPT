export const checkValidData = (email, password, name) => {
  const errors = {};

  const emailData = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordData =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // console.log(name);

  if (name !== "") {
    const nameData = /^[a-zA-Z ]{2,30}$/.test(name);

    if (!nameData) {
      errors.name = "Name is not Valid";
    }
  }

  if (!emailData) {
    errors.email = "Email is Invalid";
  }

  if (!passwordData) {
    errors.password = "Password is Invalid";
  }

  return errors;
};
