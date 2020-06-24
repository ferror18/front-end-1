import React from 'react'

export default function ClassDeatils (props){
    const {details} = props

    const{name, description} = details
    return (
        <div>
            <h3>Class Type: {name}</h3>
            <p>Class Info: {description}</p>
        </div>
        )
}