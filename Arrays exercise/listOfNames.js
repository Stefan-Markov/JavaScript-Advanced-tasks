function solve(arr){

    arr.sort((a,b)=> a.localeCompare(b)).forEach((a,i)=>console.log(`${i+1}.${a}`))
}

solve(["John", "Bob", "Christina", "Ema"]);