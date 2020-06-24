import React, {useEffect, useState} from 'react';
import {StyledDiv} from '../../styles/StyledClass'
import ClassCard from './ClassCard'
import {classInfo} from './dummyserver'

export default function Class(){
    const [classList, setClassList] = useState([]);

    /*axios call for class information from server */

    useEffect(() => {
        const getClasses = () => {
            setClassList(classInfo);
        }
        getClasses();
    }, [])

    return (
        <StyledDiv>
            <h1>Class List</h1>
            {classList.map(fitnessClass => {
                return <ClassCard key={fitnessClass.id} fitnessClass={fitnessClass} />
            })}
        </StyledDiv>
    )
}
