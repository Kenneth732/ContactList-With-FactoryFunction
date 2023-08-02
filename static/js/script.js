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

}
