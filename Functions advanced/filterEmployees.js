function filterEmployee(inputJSON, filterBy) {
    let arrayOfEmployees = JSON.parse(inputJSON);
    let [property, value] = filterBy.split('-');
    arrayOfEmployees = arrayOfEmployees.filter(employee => employee[property] === value);
    let counter = 0;
    for (const employee of arrayOfEmployees) {
        console.log(`${counter}. ${employee.first_name + ' ' + employee.last_name} - ${employee.email}`);
        counter++;
    }
}

filterEmployee(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,

    'gender-Female');

//0. Ardine Bassam - abassam0@cnn.com
// 1. Kizzee Jost - kjost1@forbes.com


filterEmployee(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson');

//0. Kaylee Johnson - k0@cnn.com
// 1. Kizzee Johnson - kjost1@forbes.com
// 2. Evanne Johnson - ev2@hostgator.com