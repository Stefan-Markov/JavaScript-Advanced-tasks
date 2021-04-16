function solve() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error();
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            //  if (!(battery instanceof Battery)) {
            //      throw new TypeError();}
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(battery) {
            // if(battery.constructor.name !== 'Battery')...
            if (battery instanceof Battery) {
                this._battery = battery;
            } else {
                throw new TypeError();
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        set keyboard(keyboard) {
            if (keyboard.constructor.name !== 'Keyboard') {
                throw new Error();
            }
            this._keyboard = keyboard;
        }

        get keyboard() {
            return this._keyboard;
        }

        set monitor(monitor) {
            if (monitor.constructor.name !== 'Monitor') {
                throw new Error();
            }
            this._monitor = monitor;
        }

        get monitor() {
            return this._monitor;
        }
    }

    return {Keyboard, Monitor, Battery, Computer, Laptop, Desktop};
}

let app = solve();
