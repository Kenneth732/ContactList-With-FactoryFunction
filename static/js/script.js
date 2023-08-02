var personActions = {
    getFullName() {
        return this.firstName + ' ' + this.lastName + ' ' + this.phoneNumber + ' ' + this.emailAddress
    },
};

function createPerson(firstName, lastName, phoneNumber, emailAddress) {
    let person = Object.create(personActions);
    person.firstName = firstName;
    person.lastName = lastName;
    person.phoneNumber = phoneNumber;
    person.emailAddress = emailAddress
    return person;
}

let contacts = []

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

    const newContact = createPerson(firstName, lastName, phoneNumber, emailAddress);
    contacts.push(newContact);

    displayContact();
    clearForm();
}
