import React, { useState } from 'react';
import {StyledDiv} from '../styles/StyledClass'
import {default as ClassCard} from './ClassCard'
import { Typography } from '@material-ui/core';

export default function Class({ categories, classInfo, enrolledClasses }){
    console.log(categories, classInfo, 'classInfo')
    const [ showAllClasses, setShowAllClasses ] = useState(true)
    const onClick = event => {
        setShowAllClasses(!showAllClasses)
    }
    if (classInfo !== undefined) {
        classInfo.filterEnrolledClasses = function (enrolledClasses){
            let idarr = []
            enrolledClasses.forEach(element => {
                idarr.push(element.classId)
            });
            console.log(idarr, "<--- idarr");
            return this.filter((e)=>{return idarr.includes(e.id)})
        }
    }
    
    return (
        <>
        <Typography variant='h1' onClick={onClick}>{showAllClasses?'All Classes':'Joined Classes'}</Typography >
        <StyledDiv>
            
            {
                showAllClasses?(
                    (classInfo === undefined)?(<span/>):(classInfo.map(fitnessClass => {
                        return <ClassCard categories={categories} key={fitnessClass.id} fitnessClass={fitnessClass} />
                    }))
                ) : (
                    classInfo.filterEnrolledClasses(enrolledClasses).map(fitnessClass => {
                        console.log(fitnessClass, '<--- enrolledClasses')
                        return <ClassCard categories={categories} key={fitnessClass.id} fitnessClass={fitnessClass} />
                    })
                )
            }
        </StyledDiv>
        </> 
    )
}
