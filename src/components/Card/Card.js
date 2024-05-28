import './Card.css'

export function Card({stance, name, obstacle, tutorial}){
    return(
        <div className='card'>
            <p>{stance}</p>
            <p>{name}</p>
            <p>{obstacle}</p>
            <p>Link to tutorial: {tutorial}</p>
        </div>
    )
}