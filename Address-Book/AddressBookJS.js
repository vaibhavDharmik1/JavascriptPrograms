const prompt = require("prompt-sync")();
const validateContact = require("./ValidateContacts.js");
const fs = require('fs')
function readfile() 
{
  let raw = fs.readFileSync('./add.json','utf8');
  let punishments= JSON.parse(raw);
  console.log(punishments);
  console.log("raw",raw);
  return punishments;
  
}
function write(punishments){
  let data = JSON.stringify(punishments);
  console.log("data",data);
 return fs.writeFileSync('./add.json', data);
  
}
let addressBookArray = [];
var personInfo;
class PersonInfo {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phoneNumber;
  email;
  constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
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
      ",Zip = " +
      this.zip +
      ",Phone Number = " +
      this.phoneNumber +
      ",Email = " +
      this.email
    );
  }
}
function addContact() {
  let firstName = prompt("Enter Your First Name ");
  let lastName = prompt("Enter Your Last Name ");
  let address = prompt("Enter Your address ");
  let city = prompt("Enter Your city ");
  let state = prompt("Enter Your state ");
  let zip = prompt("Enter Your Zip Code ");
  let phNumber = prompt("Enter Your Mobile Number ");
  let email = prompt("Enter Your email ");
  personInfo = new PersonInfo(firstName,lastName,address,city,state,zip,phNumber,email);
  try {
    validateContact.validateFirstName(personInfo.firstName);
    validateContact.validateLastName(personInfo.lastName);
    validateContact.validateAddress(personInfo.address);
    validateContact.validateCity(personInfo.city);
    validateContact.validateState(personInfo.state);
    validateContact.validateZip(personInfo.zip);
    validateContact.validatePhoneNumber(personInfo.phoneNumber);
    validateContact.validateEmail(personInfo.email);
    let myjson = readfile();
    console.log(" before push", myjson);
    myjson.push(personInfo);
    console.log("personInfo",personInfo);
    console.log("after push",myjson);
    write(myjson);
    console.log(myjson);
  } catch (invalid) {
    console.error(invalid);
    addContact();
  }
}
function editContact() {
  let contactFound = 0;
  let name = prompt("Enter Your First Name of the person to edit ");
  for (let i = 0; i < addressBookArray.length; i++) {
    if (addressBookArray[i].firstName == name) {
      contactFound = 1;
      console.log(
        "Enter 1 to edit First Name, 2 for lastName, 3 for address, 4 for city"
      );
      console.log(
        " Enter 5 for state, 6 for Zip Code, 7 for phone number, 8 for email"
      );
      let choiceEdit = prompt("Enter Your choice to edit ");
      switch (choiceEdit) {
        case "1":
          let firstNameEdit = prompt("Enter Your First Name ");
          try {
            validateContact.validateFirstName(firstNameEdit);        
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].firstName = firstNameEdit;
          // let myjson = readfile();
          console.log(addressBookArray);
          console.log(personInfo.toString());
          break;
        case "2":
          let lastNameEdit = prompt("Enter Your Last Name ");
          try {
            validateContact.validateLastName(lastNameEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].lastName = lastNameEdit;
          console.log(addressBookArray);
          console.log(personInfo.toString());
          break;
        case "3":
          let addressEdit = prompt("Enter Your address ");
          try {
            validateContact.validateAddress(addressEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].address = addressEdit;
          console.log(addressBookArray);
          console.log(personInfo.toString());
          break;
        case "4":
          let cityEdit = prompt("Enter Your city ");
          try {
            validateContact.validateCity(cityEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].city = cityEdit;
          console.log(addressBookArray);
          console.log(personInfo.toString());
          break;
        case "5":
          let stateEdit = prompt("Enter Your state ");
          try {
            validateContact.validateState(stateEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].state = stateEdit;
          console.log(addressBookArray);
          console.log(personInfo.toString());
          break;
        case "6":
          let zipEdit = prompt("Enter Your Zip Code ");
          try {
            validateContact.validateZip(zipEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].zip = zipEdit;
          console.log(addressBookArray);
          console.log(personInfo.toString());
          break;
        case "7":
          let phNumberEdit = prompt("Enter Your Mobile Number ");
          try {
            validateContact.validatePhoneNumber(phNumberEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].phoneNumber = phNumberEdit;
          console.log(addressBookArray);
          console.log(personInfo.toString());
          break;
        case "8":
          let emailEdit = prompt("Enter Your email ");
          try {
            validateContact.validateEmail(emailEdit);
          } catch (invalid) {
            console.error(invalid);
            editContact();
          }
          addressBookArray[i].email = emailEdit;
          console.log(addressBookArray);
          console.log(personInfo.toString());
          break;
      }
    }
  }
  if (contactFound == 0) 
  console.log("Contact Not Found");
}
function deleteContact(){
  let contactFoundDelete = 0;
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

  if (contactFoundDelete == 0) console.log("Contact Not Found");
}
function countContact(){
  return addressBookArray.length;
}

let i = 0;
while (i == 0) {
  console.log("Enter 1 to add contacts, 2 to edit Contacts, 3 to Delete Contacts, 4 to Count no of Contacts , 5 to exit");
  let choice = prompt("Enter your choice ");
  switch (choice) {
    case "1":
      addContact();
      addressBookArray.push(personInfo);
      break;
    case "2":
      editContact();
      break;
    case "3":
      deleteContact();
      break;
      case "4":
        countContact();
        break;
      case "5":
        console.log("Exicted");
        process.exit(1)
  
      default:
        console.log("Invalid input");
        break;
  }
}
console.log(addressBookArray);
