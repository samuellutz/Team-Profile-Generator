const index = require('../index')

class Employee {
    constructor(name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

function getName() {
    console.log(this.name)
};

getName();