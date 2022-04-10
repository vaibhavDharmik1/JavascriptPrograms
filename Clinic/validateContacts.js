//First Name validation
let validateFirstName = (fname) => {
    let fnameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (fnameRegex.test(fname)) return true;
    else throw "First Name is Incorrect";
};
//Last Name validation
let validateLastName = (lname) => {
    let lnameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (lnameRegex.test(lname)) return true;
    else  throw("Last Name is Incorrect");
};
//Address validation
let validateAddress = (address) => {
    let addressRegex = RegExp("[a-z]{4,}");
    if (addressRegex.test(address)) return true;
    else throw("Address is Incorrect");
};
//City validation
let validateCity = (city) => {
    let cityRegex = RegExp("[a-z]{4,}");
    if (cityRegex.test(city)) return true;
    else throw("City is Incorrect");
};
//State validation
let validateState = (state) => {
    let stateRegex = RegExp("[a-z]{4,}");
    if (stateRegex.test(state)) return true;
    else throw("State is Incorrect");
};
// weight
// let validateweight = (weight) => {
//     let weightRegex = RegExp("(?:\d+\.)?\d+ \w{3}");
//     if (weightRegex.test(weight)) return true;
//     else throw("weight Code is Incorrect");
// };
//Email validation
let validategender = (gender) => {
    let genderRegex = RegExp(
      "^(?:m|M|male|Male|f|F|female|Female)$");
    if (genderRegex.test(gender)) return true;
    else throw("gender is Incorrect");
};
//Telephone number validation
let validatePhoneNumber = (tel) => {
    let telRegex = RegExp("^[0-9]{2} [0-9]{10}$");
    if (telRegex.test(tel)) return true;
    else throw("Phone Number is Incorrect");
};
module.exports = {
    validateFirstName,
    validateLastName,
    validateAddress,
    validateCity,
    validateState,
    validatePhoneNumber,
    validategender,
  };