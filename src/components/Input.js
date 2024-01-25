import React from 'react'

const Input = (props) => {
    return (
        <>
            <div className="input-cont">
                <label htmlFor={props.name}>{props.labelName}</label>
                <input className='input' type={props.type} id={props.name} placeholder={props.placeholder} onChange={(e) => props.funct(e.target.value)} />
            </div>

        </>
    )
}

export default Input