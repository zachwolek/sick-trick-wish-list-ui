import './Tricks.css'
import { Card } from '../Card/Card'

export function Tricks({tricks}){
    const trickCards = tricks.map(trick => {
       return <Card 
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
        />
    })
    return(
        <div className='tricks-container'>
            {trickCards}
        </div>
    )
}