

function createContact(firstName, lastName, phoneNumber, emailAddress) {
    return {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
    };
  }
  
  let contacts = [];
  
  function displayContact() {
    const contactContainer = document.querySelector('#contacts');
    contactContainer.innerHTML = '';
  
    contacts.forEach((contact, index) => {
      const contactElement = document.createElement('div');
      contactElement.innerHTML =
        '<h3>' +
        contact.firstName +
        '</h3>' +
        '<h3>' +
        contact.lastName +
        '</h3>' +
        '<p>Phone: ' +
        contact.phoneNumber +
        '</p>' +
        '<p>Email: ' +
        contact.emailAddress +
        '</p>' +
        "<button onclick='editContact(" +
        index +
        ")'>Edit</button>" +
        "<button onclick='deleteContact(" +
        index +
        ")'>Delete</button>";
      contactContainer.appendChild(contactElement);
    });
  }
  
  function addContact(event) {
    event.preventDefault();
  
    const firstName = document.querySelector('#firstNameInput').value;
    const lastName = document.querySelector('#lastNameInput').value;
    const phoneNumber = document.querySelector('#phoneInput').value;
    const emailAddress = document.querySelector('#emailInput').value;
  
    const newContact = createContact(firstName, lastName, phoneNumber, emailAddress);
    contacts.push(newContact);
  
    displayContact();
    clearForm();
  }
  
  function editContact(index) {
    const contact = contacts[index];
  
    var firstName = prompt('Enter the new first name:', contact.firstName);
    var lastName = prompt('Enter the new last name:', contact.lastName);
    var phoneNumber = prompt('Enter the new phone number:', contact.phoneNumber);
    var emailAddress = prompt('Enter the new email address:', contact.emailAddress);
  
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.phoneNumber = phoneNumber;
    contact.emailAddress = emailAddress;
    displayContact();
  }
  
  function deleteContact(index) {
    var confirmDelete = confirm('Are you sure you want to delete this contact?');
  
    if (confirmDelete) {
      contacts.splice(index, 1);
      displayContact();
    }
  }
  
  document.querySelector('#form').addEventListener('submit', addContact);
  


  