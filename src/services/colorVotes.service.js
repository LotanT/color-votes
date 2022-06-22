import { utils } from "./utils.service";

export const colorVotesService = {
    getColorRate,
}

const KEY = 'color-rate';

function getColorRate() {
    let colorRate = utils.loadFromStorage(KEY)
    if (!colorRate) colorRate = getStarter()
    return colorRate
}

function getStarter() {
    const colorRate = [
        {color: 'red', votes: 10},
        {color: 'yellow', votes: 80},
        {color: 'blue', votes: 150},
        {color: 'orange', votes: 10},
        {color: 'purple', votes: 50},
        {color: 'green', votes: 30},
        {color: 'white', votes: 70},
        {color: 'black', votes: 66},
    ]
    return colorRate
}