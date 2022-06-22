const dbService = require('../../services/db.service')


module.exports = {
    query,
    // add,
    // save
}

async function query(){
    try{
        const collection = await dbService.getCollection('colorVotes')
        let colorVotes = await collection.find({}).toArry()
        return colorVotes
    } catch (err) {
        console.log('cannot find colorVotes', err)
        throw err
    }
}