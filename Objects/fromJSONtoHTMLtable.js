function fromJSON(input) {

    let jsonData = input.shift();
    let students = JSON.parse(jsonData);

    let html = '<table>\n';

    let first = students[0];

    html += `<tr>${Object.keys(first).map(x => `<th>${x}</th>`).join('')}</tr>`;
    html+= '\n';
    students.forEach(element => {
        html += `<tr>`

        html+= Object.values(element).map(x => `<td>${x}</td>`).join("");
        html+= `</tr>\n`;
    });
    html += '</table';
    
    console.log(html);
}

fromJSON(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);