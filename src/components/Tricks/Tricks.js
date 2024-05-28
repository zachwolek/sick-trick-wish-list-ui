import './Tricks.css'
import { Card } from '../Card/Card'

export function Tricks({tricks}){
    console.log(tricks)
    console.log(tricks[0])
    const trickCards = tricks.map(trick => {
        <Card 
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
        />
    })
    return(
        <div classname='tricks-container'>
            {trickCards}
        </div>
    )
}