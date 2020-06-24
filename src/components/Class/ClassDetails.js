import React from 'react'

export default function ClassDeatils (props){
    const {details} = props

    const{name, description} = details
    return (
        <div>
            <h3>Class Type:</h3>
            <p>{name}</p>
            <h4>Class Info:</h4>
            <p>{description}</p>
        </div>
        )
}