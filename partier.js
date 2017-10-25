function Partier(first, last, email, phone, message, attending) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.phoneNumber = phone;
    this.message = message;
    this.attending = attending;
    this.fullName = this.firstName + " " + this.lastName;
}