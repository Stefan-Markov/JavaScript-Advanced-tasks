function systemComponents(input) {
    let result = {};
    for (const line of input) {
        let [system, component, subComponent] = line.split(' | ');
        if (!result.hasOwnProperty(system)) {
            let compObj = {};
            compObj[component] = [subComponent];
            result[system] = compObj;
        } else {
            if (!result[system].hasOwnProperty(component)) {
                result[system][component] = [subComponent];
            } else {
                if (!result[system][component].includes(subComponent)) {
                    result[system][component].push(subComponent);
                }
            }
        }
    }
    let keySorted = Object.keys(result).sort((a, b) => {
        if (Object.keys(result[b]).length === Object.keys(result[a]).length) {
            return a.localeCompare(b);
        }
        return Object.keys(result[b]).length - Object.keys(result[a]).length;
    });

    for (const key of keySorted) {
        console.log(key);
        for (const comp of Object.keys(result[key])
            .sort((a, b) => result[key][b].length - result[key][a].length)) {
            console.log(`|||${comp}`);
            for (const subComp of result[key][comp]) {
                console.log(`||||||${subComp}`);
            }
        }
    }
}

systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);

