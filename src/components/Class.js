import React from 'react';
import {StyledDiv} from '../styles/StyledClass'
import ClassCard from './ClassCard'

export default function Class(props){
    console.log(props)


    return (
        <StyledDiv>
            <h1>Class List</h1>
            {props.classInfo.map(fitnessClass => {
                return <ClassCard key={fitnessClass.id} fitnessClass={fitnessClass} />
            })}
        </StyledDiv>
    )
}
