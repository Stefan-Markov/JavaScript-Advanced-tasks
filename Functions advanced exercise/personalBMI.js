function BMI(name, age, weight, height) {

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        }
    };
    person.BMI = Math.round(Number(weight) / (Number(height) / 100) ** 2);
    if (person.BMI < 18.5) {
        person.status = 'underweight';
    } else if (person.BMI < 25) {
        person.status = 'normal';
    } else if (person.BMI < 30) {
        person.status = 'overweight';
    } else {
        person.status = 'obese';
        person.recommendation = 'admission required';
    }

    console.log(person);
}

BMI(`Peter`, 29, 75, 182);

BMI('Honey Boo Boo', 9, 57, 137);