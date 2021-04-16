function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }


        //   toString() {   let props = [];
        //             for (const key in this) {
        //                 props.push(`${key}: ${this[key]}`);}
        //             return `${this.constructor.name} (${props.join(', ')})`;}

        toString() {
            return `Name:${this.name}, Mail: ${this.email}`;
        }

    }


    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return `Name: ${this.name}, Mail: ${this.email}, Subject: ${this.subject}`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return `Name: ${this.name},Mail: ${this.email}, Course: ${this.course}`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let builder = personAndTeacher();

let personBuilder = builder.Person;
let teacherBuilder = builder.Teacher;
let studentBuilder = builder.Student;

let teacher = new teacherBuilder("Nika", 'nika@abv.bg', "AI");
console.log(teacher.toString());
