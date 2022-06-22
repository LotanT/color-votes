import { ColorCube } from "../cmps/ColorCube";



export function FavoriteColor() {
    return (
        <container className='favorite-color container'>
            <div className="title">Click on your favorite color:</div>
            <div className="cube-container">
                <ColorCube />
            </div>
        </container>
    )
}