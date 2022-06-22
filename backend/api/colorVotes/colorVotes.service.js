const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId


module.exports = {
    query,
    add,
    update
}

async function query(){
    try{
        const collection = await dbService.getCollection('colorVotes')
        let colorVotes = await collection.find({}).toArray()
        return colorVotes
    } catch (err) {
        console.log('cannot find colorVotes', err)
        throw err
    }
}

async function add(colorVotes){
    try{
        const collection = await dbService.getCollection('colorVotes')
        const addedColorVotes = collection.insertOne(colorVotes)
        return addedColorVotes
    } catch (err) {
        console.log('cannot insert colorVotes', err)
        throw err
    }
}

async function update (colorVotes){
    try {
        const prevId = colorVotes._id
        const id = ObjectId(colorVotes._id)
        delete colorVotes._id
        const collection = await dbService.getCollection('colorVotes')
        await collection.findOneAndUpdate({ _id: id}, { $set: {...colorVotes} })
        colorVotes._id = prevId
        return colorVotes;
    } catch (err) {
        logger.error(`cannot update colorVotes ${colorVotes._id}`, err)
        throw err
    }
}