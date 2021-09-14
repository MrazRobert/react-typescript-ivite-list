import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const regex = new RegExp('^[1-9]?$|^[1-9][0-9]$|^1[0-2][0-9]$')

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        if (!(e.target.name === "age" && !regex.test(e.target.value))) {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.img) {
            return
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: +input.age,
                url: input.img,
                note: input.note
            }
        ])
        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })
    }

    return (
        <div className="add-to-list">
            <input 
                type="text" 
                placeholder="Name" 
                className="add-to-list-input" 
                value={input.name} 
                onChange={handleChange} 
                name="name" 
            />
            <input 
                type="text" 
                placeholder="Age" 
                className="add-to-list-input" 
                value={input.age} 
                onChange={handleChange} 
                name="age" 
            />
            <input 
                type="text" 
                placeholder="Image Url" 
                className="add-to-list-input" 
                value={input.img} 
                onChange={handleChange} 
                name="img" 
            />
            <textarea  
                placeholder="Note" 
                className="add-to-list-input" 
                value={input.note} 
                onChange={handleChange} 
                name="note"
            />
            <button 
                className="add-to-list-btn" 
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList