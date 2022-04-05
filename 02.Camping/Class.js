class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.findIndex(a => a.name == name) > -1) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const personIndex = this.listOfParticipants.findIndex(a => a.name == name);
        if (personIndex == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        this.listOfParticipants.splice(personIndex, 1);
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const player1Index = this.listOfParticipants.findIndex(a => a.name == participant1);
        const player2Index = this.listOfParticipants.findIndex(a => a.name == participant2);
        if (typeOfGame == 'WaterBalloonFights' && player2Index == -1) {
            throw new Error('Invalid entered name/s.');
        }
        if (player1Index == -1) {
            throw new Error('Invalid entered name/s.');
        }
        if (typeOfGame == 'WaterBalloonFights' && this.listOfParticipants[player1Index].condition != this.listOfParticipants[player2Index].condition) {
            throw new Error('Choose players with equal condition.');
        }
        if (typeOfGame == 'Battleship') {
            this.listOfParticipants[player1Index].power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }

        if (this.listOfParticipants[player1Index].power > this.listOfParticipants[player2Index].power) {
            this.listOfParticipants[player1Index].wins += 1;
            return `The ${participant1} is winner in the game ${typeOfGame}.`;
        } else if (this.listOfParticipants[player1Index].power < this.listOfParticipants[player2Index].power) {
            this.listOfParticipants[player2Index].wins += 1;
            return `The ${participant2} is winner in the game ${typeOfGame}.`;
        } else {
            return 'There is no winner.';
        }
    }

    toString() {
        const result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(player=>{
                result.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`);
            });
        return result.join('\n');
    }

}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
