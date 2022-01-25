const Employee = require('./Employee')

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber
        this.generateCard = this.generateCard.bind(this);
    }

    officeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
    generateCard() {
        return `
        <h5 class="card-title">${this.getName()}</h5>
        <p class="card-text">${this.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.getId()}</li>
        <li class="list-group-item">Email: ${this.getEmail()}</li>
        <li class="list-group-item">Office Number: ${this.officeNumber()}</li>
        `
    }
}
module.exports = Manager;