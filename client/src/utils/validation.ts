import { RegisterPayload } from "features/auth/authSlice";

interface Validate {
  checkFirstName: boolean;
  checkLastName: boolean;
  checkEmail: boolean;
  checkPassword: boolean;
  checkPhone: boolean;
}
export interface ValidateRegister {
  method: string;
  checkedResult: Validate;
  result: boolean;
}

//Just basic validation
function Validator(data: RegisterPayload): Validate {
  let validateResult: Validate = {
    checkFirstName: false,
    checkLastName: false,
    checkEmail: false,
    checkPassword: false,
    checkPhone: false,
  };
  if (data.method === "email") {
    validateResult.checkPhone = true;
    if (data.registerData.firstName) validateResult.checkFirstName = true;
    if (data.registerData.lastName) validateResult.checkLastName = true;
    if (data.registerData.email) validateResult.checkEmail = true;
    if (data.registerData.password) validateResult.checkPassword = true;
  } else if (data.method === "phone") {
    validateResult.checkEmail = true;
    validateResult.checkFirstName = true;
    validateResult.checkLastName = true;
    validateResult.checkPassword = true;
    if (data.registerData.phone) validateResult.checkPhone = true;
  }

  return validateResult;
}

export function validateRegisterData(data: RegisterPayload): boolean {
  const {
    checkFirstName,
    checkLastName,
    checkEmail,
    checkPassword,
    checkPhone,
  } = Validator(data);
  let result = false;
  if (data.method === "email") {
    if (checkFirstName && checkLastName && checkEmail && checkPassword)
      result = true;
  } else if (data.method === "phone") {
    if (checkPhone) result = true;
  }

  return result;
}
