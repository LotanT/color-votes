


export function ColorCube({ colorData, maxVotes, addVote }) {

    const getWidth = () => {
        let width = 200 * (colorData.votes / maxVotes)
        return `${width}px`
    }

    return (
        <container className="cube" onClick={()=>addVote(colorData.color)} style={{ 'backgroundColor': colorData.color }}>
            <div className="scale" style={{ 'width': getWidth() }}>{colorData.votes}</div>
        </container>
    )
}