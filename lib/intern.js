const Employee = require('./Employee')

class Intern extends Employee {
    constructor(id, name, email, school){
        super(id, name, email)
        this.school = school
        this.generateCard = this.generateCard.bind(this);
    }

    getSchool() {
        return this.school
    };

    getRole() {
        return 'Intern'
    }
    generateCard() {
        return `
        <h5 class="card-title">${this.getName()}</h5>
        <p class="card-text">${this.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.getId()}</li>
        <li class="list-group-item">Email: ${this.getEmail()}</li>
        <li class="list-group-item">School: ${this.getSchool()}</li>
        `
    }
}

module.exports = Intern; 