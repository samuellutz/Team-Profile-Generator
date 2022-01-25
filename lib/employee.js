const index = require('../index')

class Employee {
    constructor(name, id, email) {
        console.log(name, id, email)
        this.id = id;
        this.name = name;
        this.email = email;
    }


    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}
module.exports = Employee;