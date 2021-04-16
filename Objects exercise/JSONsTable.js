function table(input) {

    let output = "<table>\n"
    let employees = [];
    input.forEach(el => {
        employees.push(JSON.parse(el))
    });
    output += arrayAsTable(employees) + '</table>';

    console.log(output)

    function arrayAsTable(employees) {
        let result = '';

        employees.forEach(el => {
            result += '\t<tr>\n';
            Object.values(el).forEach(e => {
                result += `\t\t<td>${e}</td>\n`;
            });
            result += '\t<\\tr>\n';
        });
        return result;
    }
}

table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);