class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        for (let arg of [username, salary, position, department]) {
            this.validate(arg);
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({username, salary, position, department});
        console.log(`New employee is hired. Name: ${username}. Position: ${position}"`)
    }

    validate(value) {
        if (!value || value < 0) {
            throw new Error('Invalid input!')
        }
    }

    bestDepartment() {
        let departments = {};
        Object.entries(this.departments).forEach(([department, employees]) => {
            let totalSalary = employees.map(e => e.salary).reduce((acc, curr) => acc += curr);
            departments[department] = totalSalary / employees.length;
        });
        let bestDepartment;
        let maxSalary = 0;
        Object.entries(departments).forEach(([department, salary]) => {

            if (salary > maxSalary) {
                maxSalary = salary;
                bestDepartment = department;
            }
        });
        console.log(`Best department is: ${bestDepartment}\nAverage salary: ${departments[bestDepartment]}`);

        this.departments[bestDepartment]
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
            .forEach(e => console.log(`${e.username} ${e.salary} ${e.position}`))
    }
}

function solve() {
    let c = new Company();
    c.addEmployee("Stanimir", 2000, "engineer", "Construction");
    c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
    c.addEmployee("Slavi", 500, "dyer", "Construction");
    c.addEmployee("Stan", 2000, "architect", "Construction");
    c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
    c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
    c.addEmployee("Gosho", 1350, "HR", "Human resources");
    console.log(c.bestDepartment());
}

solve();