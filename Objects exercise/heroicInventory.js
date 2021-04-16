function heroes(input) {
    let hero = [];

    input.forEach(line => {

        let [name, level, items] = line.split(" / ");

        level = Number(level);
        items = items !== undefined ? items.split(", ") : [];

        let heroData = {name, level, items};
        hero.push(heroData);
    });
    console.log(JSON.stringify(hero))
}

heroes(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

heroes(['Jake / 1000 / Gauss, HolidayGrenade']);