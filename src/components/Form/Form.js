import './Form.css'
import { useState } from 'react'
import reactDOM from 'react-dom'

export function Form(){
    return (
        <form>
            <input></input>
            <input></input>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);