function length(first, second, third) {
    let sum = first.length + second.length + third.length;
    let average = Math.floor(sum / 3);
    console.log(sum, '\n', average);
}

length('chocolate', 'ice cream', 'cake');