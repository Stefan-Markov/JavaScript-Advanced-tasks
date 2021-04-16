function extendClass(classToExtend) {
    classToExtend.prototype.species = "Galactic";
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()
        }`;
    };
}