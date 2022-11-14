import fs from 'fs';

export class GetWinners {

    /**
     * path = filepath\to\file
     * participants = empty array of participants. Later used to fill with all the participants from the csv
     * winners = empty array of winners. Later used to fill with winners.
     */
    private path: string = ''
    private participants: string[] = []
    private winners: string[] = []
    
    /**
     * Constructor of the class. Takes one string path which is the filepath to the file
     * @param path path to file
     */
    constructor(path: string) {
        if (path === '') throw new Error('Filepath is empty!')
        this.path = path
    }

    /**
     * @returns the filepath to the file
     */
    getPath(): string {
        return this.path
    }

    /**
     * @returns the array of participants
     */
    getParticipantsArray(): string[] {
        return this.participants;
    }

    /**
     * @returns the array of winners
     */
    getWinnersArray(): string[] {
        return this.winners
    }

    /**
     * @param x index of an array
     * @param arr an array of strings
     * @returns the entry on position x of the arr
     */
    getParticipant(x: number, arr: string[]): string {
        return arr[x]
    }
    
    /**
     * Stores every entry of the file into the array of participants
     */
    createParticipantsArray(): void {
        try {
            let data: string = fs.readFileSync(this.path, 'utf-8')
            this.participants = data.split(',')
            if (data === '') throw new Error('Given Source is empty or contains empty line.')
        } catch (err: any) {
            throw new Error('Error while reading CSV: \n' + err)
        }
    }

    /**
     * Takes random entries from the array of participants and add them to the array of winners. 
     * Only adds an entry when the entry is not inside already.
     * @param runtime contains the number of entries that should be added the winners array
     */
    createWinnersArray(runtime: number): void {
        try {
            for(let x = 0; x < runtime; x++) {
                let rand = Math.floor(Math.random() * this.getParticipantsArray().length)
                if (this.getWinnersArray().includes(this.getParticipantsArray()[rand])) {
                    x--
                } else {
                    this.getWinnersArray().push(this.getParticipantsArray()[rand])
                }
            }
        } catch (err: any) {
            throw new Error('Error while collecting winners: \n' + err)
        }
    }
}