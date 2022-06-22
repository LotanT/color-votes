import { useEffect, useState } from "react";
import { ColorCube } from "../cmps/ColorCube";
import { colorVotesService } from "../services/colorVotes.service";


export function FavoriteColor() {

    const [colorVotes, setColorVotes] = useState([])
    const [maxVotes, setMaxVotes] = useState([])

    useEffect(() => {
        getColorVotes()
    },[])

    const getColorVotes = () => {
        let colorVotes = colorVotesService.getColorVotes()
        setMaxVote(colorVotes)
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
        let updatedColorVotes = colorVotes.map(colorData=>{
            if(colorData.color === color) colorData.votes++
            return colorData
        })
        colorVotesService.updateColorVotes(updatedColorVotes)
        setColorVotes(updatedColorVotes)
        setMaxVote(updatedColorVotes)
    }
   
    return (
        <container className='favorite-color container'>
            <div className="title">Click on your favorite color:</div>
            <div className="cube-container">
                {colorVotes.map((colorData) => <ColorCube addVote={addVote} colorData={colorData} maxVotes={maxVotes} key={colorData.color} />)}
            </div>
        </container>
    )
}