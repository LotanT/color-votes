import { useEffect, useState } from "react";
import { ColorCube } from "../cmps/ColorCube";
import { colorVotesService } from "../services/colorVotes.service";


export function FavoriteColor() {

    const [colorVotes, setColorVotes] = useState({})
    const [maxVotes, setMaxVotes] = useState([])

    useEffect(() => {
        getColorVotes()
    },[])

    const getColorVotes = async () => {
        let colorVotes = await colorVotesService.getColorVotes()
        setMaxVote(colorVotes.colorVotes)
        setColorVotes(colorVotes)
    }

    const setMaxVote = (colorVotes) => {
        let maxVotes = 0
        colorVotes.forEach(colorData => {
            if (maxVotes < colorData.votes) maxVotes = colorData.votes
        })
        setMaxVotes(maxVotes)
    }

    const addVote = (color)=>{
        const updatedColorVotes = colorVotes.colorVotes.map(colorData=>{
            if(colorData.color === color) colorData.votes++
            return colorData
        })
        const newColorVotes = {_id: colorVotes._id, colorVotes: updatedColorVotes}
        colorVotesService.updateColorVotes(newColorVotes)
        setColorVotes(newColorVotes)
        setMaxVote(updatedColorVotes)
    }
    
    const colorVotesData = colorVotes.colorVotes
    if(!colorVotesData) return
    return (
        <div className='favorite-color container'>
            <div className="title">Click on your favorite color:</div>
            <div className="cube-container">
                {colorVotesData.map((colorData) => <ColorCube addVote={addVote} colorData={colorData} maxVotes={maxVotes} key={colorData.color} />)}
            </div>
        </div>
    )
}