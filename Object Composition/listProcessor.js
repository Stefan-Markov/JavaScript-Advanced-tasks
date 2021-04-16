function listProcessor(input) {
    const listProcess = function () {
        let list = [];
        return {
            add: text => list.push(text),
            remove: text => list.splice(list.indexOf(text), 1),
            print: () => console.log(list.join(",")),
        };
    }
    let process = listProcess();
    input
        .map(x => x
            .split(" "))
        .forEach(([command, argument]) => process[command](argument));
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);