import { useEffect, useState } from "react";
import { ColorCube } from "../cmps/ColorCube";
import { colorVotesService } from "../services/colorVotes.service";


export function FavoriteColor() {

    const [colorVotes, setColorVotes] = useState([])
    const [maxVotes, setMaxVotes] = useState([])

    useEffect(() => {
        getColorVotes()
    }, [])

    const getColorVotes = () => {
        let colorVotes = colorVotesService.getColorRate()
        let maxVotes = getMaxVote(colorVotes)
        setColorVotes(colorVotes)
        setMaxVotes(maxVotes)
    }

    const getMaxVote = (colorVotes) => {
        let maxVotes = 0
        colorVotes.map(colorData=>{
            if(maxVotes<colorData.votes) maxVotes = colorData.votes
        })
        return maxVotes;
    }

    return (
        <container className='favorite-color container'>
            <div className="title">Click on your favorite color:</div>
            <div className="cube-container">
                {colorVotes.map((colorData) => <ColorCube colorData={colorData} maxVotes={maxVotes} key={colorData.color} />)}
            </div>
        </container>
    )
}