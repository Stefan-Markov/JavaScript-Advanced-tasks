function mixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        };
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            let manufacturer = this.manufacturer;
            return this.keyboard.manufacturer === manufacturer && this.monitor.manufacturer === manufacturer;
        };

        classToExtend.prototype.isClassy = function () {
            return (this.battery.expectedLife >= 3) && (this.color === 'Silver' || this.color === 'Black') && (this.weight < 3);
        };
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}