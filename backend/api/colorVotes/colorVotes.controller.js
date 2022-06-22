const colorVotesService = require('./colorVotes.service')

module.exports = {
    getColorVotes,
    addColorVotes,
    updateColorVotes
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

async function addColorVotes(req,res) {
    try{
        let colorVotes = {colorVotes: req.body}
        console.log(colorVotes);
        await colorVotesService.add(colorVotes)
        res.json(colorVotes)
    } catch (err) {
        console.log('Cannot add colorVotes', err);
        res.status(500).send({ err: 'Failed to add colorVotes' });
      }
}


async function updateColorVotes (req,res){
    try{
        let colorVotes = req.body
        const savedColorVotes = await colorVotesService.update(colorVotes)
        res.json(savedColorVotes)
    }  catch (err) {
        console.log('Failed to update colorVotes', err);
        res.status(500).send({ err: 'Failed to update colorVotes' });
      }
}