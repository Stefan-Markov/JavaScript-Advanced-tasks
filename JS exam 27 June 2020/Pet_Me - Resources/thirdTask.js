class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkLoad = 0;
    }

    getClient(ownerName) {
        return this.clients.find(x => x.ownerName === ownerName);
    }

    getOwner(owner, petName) {
        if (!owner) {
            return;
        }
        return owner.pets.find(x => x.petName === petName);
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.currentWorkLoad >= this.capacity) {
            throw new Error()
        }

        let currentOwner = this.getClient(ownerName);
        let currentPet = this.getOwner(currentOwner, petName);
        if (currentOwner && currentPet) {
            if (currentPet.procedures.length > 0) {
                throw new Error();
            } else {
                currentPet.procedures = procedures;
            }
        } else if (!currentOwner) {
            currentOwner = {
                ownerName: ownerName,
                pets: [],
            }
            this.clients.push(currentOwner);
        }
        currentOwner.pets.push({
            petName,
            kind,
            procedures
        })
        this.currentWorkLoad++;
        return `Welcome ${petName}`;
    }

    onLeaving(ownerName, petName) {
        let currentOwner = this.getClient(ownerName);
        if (!currentOwner) {
            throw new Error();
        }
        let currentPet = this.getOwner(currentOwner, petName);
        if (!currentPet || currentPet.procedures.length === 0) {
            throw new Error();
        }
        this.totalProfit += currentPet.procedures.length * 500;
        this.currentWorkLoad--;
        currentPet.procedures = [];
        return `Goodbye ${currentPet.petName}. Stay safe!`
    }

    toString() {
        let result = '';
        let busyness = Math.floor(this.currentWorkLoad / this.capacity * 100);
        result += `${this.clinicName} is ${busyness}% busy today!\n`
        result += `Total profit: ${this.totalProfit.toFixed(2)}$\n`

        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));
        for (const client of this.clients) {
            client.pets.sort((a, b) => a.petName.localeCompare(b.petName));
            result += `${client.ownerName} with:\n`
            for (const pet of client.pets) {
                result += `---${pet.petName} - a ${pet.kind.toLocaleLowerCase()} that needs: ${pet.procedures.join(", ")}\n`;
            }
        }
        return result.trim();
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());
