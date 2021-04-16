function solve() {
    class Balloons {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        };

    }

    class PartyBalloon extends Balloons {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbon = {color: ribbonColor, length: ribbonLength};
        }

        get _ribbon() {
            return this.ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get _text() {
            return this.text;
        }
    }

    return {
        Balloons,
        PartyBalloon,
        BirthdayBalloon
    }
}

