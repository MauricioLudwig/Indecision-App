const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1));

const user = {
    name: 'Damien',
    cities: ['New York', 'Dublin', 'Stockholm'],
    printPlacesLived: function () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};

console.log(multiplier.multiply());