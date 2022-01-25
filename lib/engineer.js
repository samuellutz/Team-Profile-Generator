const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email, github){
        super(id, name, email)
        this.github = github
        this.generateCard = this.generateCard.bind(this);
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
    generateCard() {
        return `
        <h5 class="card-title">${this.getName()}</h5>
        <p class="card-text">${this.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${this.getId()}</li>
        <li class="list-group-item">Email: ${this.getEmail()}</li>
        <li class="list-group-item">GitHub: ${this.getGithub()}</li>
        `
    }
}

module.exports = Engineer;
