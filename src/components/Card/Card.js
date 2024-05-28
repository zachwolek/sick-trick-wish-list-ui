import './Card.css'

export function Card({stance, name, obstacle, tutorial}){
    return(
        <div className='card'>
            <p>{stance}</p>
            <p>{name}</p>
            <p>{obstacle}</p>
            <p>Tutorial: {tutorial}</p>
        </div>
    )
}