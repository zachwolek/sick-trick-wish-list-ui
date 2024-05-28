import './Form.css'
import { useState } from 'react'

export function Form(){
    return (
        <form>
            <select>
                <option value="regular">Regular</option>
                <option value="switch">Switch</option>
            </select>
            <select>
                <option value="flatground">Flatground</option>
                <option value="ledge">Ledge</option>
                <option value="rail">Rail</option>
                <option value="stairs">Stairs</option>
                <option value="pool">Pool</option>
            </select>
        </form>
    )
}