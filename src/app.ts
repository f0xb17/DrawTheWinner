import { GetWinners } from "./getwinner";

const date = new Date();

try {
    const read = new GetWinners("./src/test.txt")

    read.createParticipantsArray()

    for (let x = 0; x < read.getParticipantsArray().length; x++) {
        console.log('Participant ' + (x + 1) + ': ' + read.getParticipant(x, read.getParticipantsArray()))
    }

    console.log('---------------------------------------------')

    console.log('Report generated: ' + date.toUTCString())

    console.log('---------------------------------------------')

    read.createWinnersArray(2)
    for (let x = 0; x < read.getWinnersArray().length; x++) {
        console.log('Winner ' + (x + 1) + ': ' + read.getParticipant(x, read.getWinnersArray()))
    }
} catch (err: any) {
    console.log(err)
}

