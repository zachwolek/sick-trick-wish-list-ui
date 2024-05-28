import './Form.css'
import { useState } from 'react'

export function Form(){
        const [stance, setStance] =useState("")
        const [name, setName] =useState("")
        const [obstacle, setObstacle] =useState("")
        const [tutorial, setTutorial] =useState("")

    return (
        <form>
            <select className='form' value={stance} 
                onChange={(e) => setStance(e.target.value)}>
                <option disabled selected>Choose your Stance</option>
                <option value="regular">Regular</option>
                <option value="switch">Switch</option>
            </select>
            <input type='text' 
                placeholder='Name of Trick' 
                value={name}  
                className='form'
                onChange={(e) => setName(e.target.value)}/>
            <select  className='form' value={obstacle}
                onChange={(e) => setObstacle(e.target.value)}>
                <option disabled selected>Choose your Obstacle</option>
                <option value="flatground">Flatground</option>
                <option value="ledge">Ledge</option>
                <option value="rail">Rail</option>
                <option value="stairs">Stairs</option>
                <option value="pool">Pool</option>
            </select>
            <input type='text' 
                placeholder='Link to Tutorial' 
                value={tutorial} 
                className='form'
                onChange={(e) => setTutorial(e.target.value)}
            />
            <input type="submit" value="Submit" className='form'/>
        </form>
    )
}