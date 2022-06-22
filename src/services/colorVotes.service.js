import { utils } from "./utils.service";
import { httpService } from './http.service';

export const colorVotesService = {
    getColorVotes,
    updateColorVotes
}

const KEY = 'color-rate';

async function getColorVotes() {
    let colorVotes = await httpService.get('colorvotes')
    if (!colorVotes) {
        colorVotes = utils.loadFromStorage(KEY)
        if (!colorVotes) {
            let starter = getStarter()
            colorVotes = await httpService.post('colorvotes', starter)
            utils.storeToStorage(KEY, colorVotes)
        }
    }
return colorVotes[0]
}

async function updateColorVotes(colorVotes) {
    utils.storeToStorage(KEY, colorVotes)
    await httpService.put(`colorvotes/${colorVotes._id}`, colorVotes)
}

function getStarter() {
    const colorRate = [
        { color: 'red', votes: 10 },
        { color: 'yellow', votes: 80 },
        { color: 'blue', votes: 150 },
        { color: 'orange', votes: 10 },
        { color: 'purple', votes: 50 },
        { color: 'green', votes: 30 },
        { color: 'white', votes: 70 },
        { color: 'black', votes: 66 },
    ]
    return colorRate
}