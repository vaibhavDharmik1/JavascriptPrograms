const prompt = require("prompt-sync")();
const validateContact = require("./ValidateContacts.js");
const fs = require('fs')
function readfile() 
{
  let raw = fs.readFileSync('./add.json','utf8');
  let save= JSON.parse(raw);
  console.log(save);
  console.log("raw",raw);
  return save;
  
}
function write(save){
  let data = JSON.stringify(save);
  console.log("data",data);
 return fs.writeFileSync('./add.json', data);
  
}

let patientBookArray = [];
var personInfo;
class PersonInfo {
  firstName;
  lastName;
  address;
  city;
  state;
  weight;
  phoneNumber;
  gender;
  constructor(firstName,lastName,address,city,state,weight,phoneNumber,gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.weight = weight;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
  }
  toString() {
    return (
      "First Name = " +
      this.firstName +
      ", Last Name = " +
      this.lastName +
      ",Address = " +
      this.address +
      ",City = " +
      this.city +
      ",State = " +
      this.state +
      ",weight = " +
      this.weight +
      ",Phone Number = " +
      this.phoneNumber +
      ",gender = " +
      this.gender
    );
  }
}
function addPatientInfo() {
  let firstName = prompt("Enter Your First Name ");
  let lastName = prompt("Enter Your Last Name ");
  let address = prompt("Enter Your address ");
  let city = prompt("Enter Your city ");
  let state = prompt("Enter Your state ");
  let weight = prompt("Enter Your weight ");
  let phNumber = prompt("Enter Your Mobile Number ");
  let gender = prompt("Enter Your gender ");
  personInfo = new PersonInfo(firstName,lastName,address,city,state,weight,phNumber,gender);
  try {
    validateContact.validateFirstName(personInfo.firstName);
    validateContact.validateLastName(personInfo.lastName);
    validateContact.validateAddress(personInfo.address);
    validateContact.validateCity(personInfo.city);
    validateContact.validateState(personInfo.state);
    // validateContact.validateweight(personInfo.weight);
    validateContact.validatePhoneNumber(personInfo.phoneNumber);
    validateContact.validategender(personInfo.gender);
    let myjson = readfile();
    console.log(" before push", myjson);
    myjson.push(personInfo);
    console.log("personInfo",personInfo);
    console.log("after push",myjson);
    write(myjson);
    console.log(myjson);
  } catch (invalid) {
    console.error(invalid);
    addPatientInfo();
  }
}
function editPatientInfo() {
  let contactFound = 0;
  let name = prompt("Enter Your First Name of the person to edit ");
  let myjson = readfile();
  for (let i = 0; i < myjson.length; i++) {
    if (myjson[i].firstName == name) {
      contactFound = 1;
      console.log(
        "Enter 1 to edit First Name, 2 for lastName, 3 for address, 4 for city"
      );
      console.log(
        " Enter 5 for state, 6 for weight, 7 for phone number, 8 for gender"
      );
      let choiceEdit = prompt("Enter Your choice to edit ");
      switch (choiceEdit) {
        case "1":
          let firstNameEdit = prompt("Enter Your First Name ");
          try {
            validateContact.validateFirstName(firstNameEdit);
          } catch (invalid) {
            console.error(invalid);
            editPatientInfo();
          }
        console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "2":
          let lastNameEdit = prompt("Enter Your Last Name ");
          try {
            validateContact.validateLastName(lastNameEdit);
          } catch (invalid) {
            console.error(invalid);
            editPatientInfo();
          }
          myjson[i].lastName = lastNameEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "3":
          let addressEdit = prompt("Enter Your address ");
          try {
            validateContact.validateAddress(addressEdit);
          } catch (invalid) {
            console.error(invalid);
            editPatientInfo();
          }
          myjson[i].address = addressEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "4":
          let cityEdit = prompt("Enter Your city ");
          try {
            validateContact.validateCity(cityEdit);
          } catch (invalid) {
            console.error(invalid);
            editPatientInfo();
          }
          myjson[i].city = cityEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "5":
          let stateEdit = prompt("Enter Your state ");
          try {
            validateContact.validateState(stateEdit);
          } catch (invalid) {
            console.error(invalid);
            editPatientInfo();
          }
          myjson[i].state = stateEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "6":
          let weightEdit = prompt("Enter Your weight");
          // try {
          //   validateContact.validateweight(weightEdit);
          // } catch (invalid) {
          //   console.error(invalid);
            editPatientInfo();
          // }
          myjson[i].weight = weightEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        case "7":
          let phNumberEdit = prompt("Enter Your Mobile Number ");
          try {
            validateContact.validatePhoneNumber(phNumberEdit);
          } catch (invalid) {
            console.error(invalid);
            editPatientInfo();
          }
          myjson[i].phoneNumber = phNumberEdit;
          console.log(myjson);
          console.log(personInfo.toString());
          break;
        
      }
    }
  }
  write(myjson);
  console.log(myjson);
if (contactFound == 0) 
  console.log("Contact Not Found");
}
function deletePatientInfo(){
  let patientFoundDeleted = 0;
  let name = prompt("Enter Your First Name of the person to delete ");
  let myjson = readfile();
  for (let i = 0; i < myjson.length; i++) {
    if (myjson[i].firstName == name) {
      myjson.splice(i,1);
      console.log("Contact Deleted");
      break;
    }
  }
  write(myjson);
  console.log(myjson);
  if (patientFoundDeleted == 0)
   console.log("Patient Not Found");
}
function patientCount(){
  return patientBookArray.length;
}

let i = 0;
while (i == 0) {
  console.log("Enter 1 to add Patient  info, 2 to edit Patient Info, 3 to patientCount , 4 to Delete Patient Info, 5 to Exit");
  let choice = prompt("Enter your choice ");
  switch (choice) {
    case "1":
      addPatientInfo();
      patientBookArray.push(personInfo);
      break;
    case "2":
      editPatientInfo();
      break;
    case "3":
      console.log("The number of Contacts in the address book are: "+patientCount());
      break;
    case "4":
      deletePatientInfo();
      break;
    case "5":
      console.log("Exicted");
        process.exit(1)
      default:
        console.log("Invalid input");
        break;
  }
}
console.log(patientBookArray);