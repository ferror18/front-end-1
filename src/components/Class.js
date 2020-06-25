import React, { useState } from 'react';
import {StyledDiv} from '../styles/StyledClass'
import {default as ClassCard} from './ClassCard'

export default function Class({ classInfo, enrolledClasses }){
    // console.log(props)
    const [ showAllClasses, setShowAllClasses ] = useState(true)
    const onClick = event => {
        setShowAllClasses(!showAllClasses)
    }
    classInfo.filterEnrolledClasses = function (enrolledClasses){
        let idarr = []
        enrolledClasses.forEach(element => {
            idarr.push(element.classId)
        });
        console.log(idarr, "<--- idarr");
        return this.filter((e)=>{return idarr.includes(e.id)})
    }
 
    return (
        <StyledDiv>
            <h1 onClick={onClick}>{showAllClasses?'All Classes':'Joined Classes'}</h1>
            {
                showAllClasses?(
                    classInfo.map(fitnessClass => {
                        return <ClassCard key={fitnessClass.id} fitnessClass={fitnessClass} />
                    })
                ) : (
                    classInfo.filterEnrolledClasses(enrolledClasses).map(fitnessClass => {
                        console.log(fitnessClass, '<--- enrolledClasses')
                        return <ClassCard key={fitnessClass.id} fitnessClass={fitnessClass} />
                    })
                )
            }
            
        </StyledDiv>
    )
}
