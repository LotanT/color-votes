const colorVotesService = require('./colorVotes.service')

module.exports = {
    getColorVotes,
    // addColorVotes,
    // updateColorVotes
}

async function getColorVotes(req, res){
    try{
        const colorVotes = await colorVotesService.query()
        res.send(colorVotes)
    } catch (err) {
        console.log('Cannot get colorVotes', err);
        res.status(500).send({ err: 'Failed to get colorVotes' });
      }
}